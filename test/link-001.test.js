import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { once } from 'node:events';
import { createApp } from '../app/server.js';
import { normalizeUrl } from '../app/store.js';

async function start(databasePath) {
  const server = createApp({ databasePath });
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const base = `http://127.0.0.1:${server.address().port}`;
  return { base, close: () => new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve())) };
}
const post = (base, input) => fetch(`${base}/api/links`, {
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(input)
});

test('LINK-001: saves URL and note durably, including after reopening SQLite', async () => {
  const directory = mkdtempSync(join(tmpdir(), 'link-001-'));
  const databasePath = join(directory, 'links.sqlite');
  let app;
  try {
    app = await start(databasePath);
    const response = await post(app.base, { url: ' https://EXAMPLE.com:443/read#intro ', note: '  Read for class  ' });
    assert.equal(response.status, 201);
    const { link, created } = await response.json();
    assert.equal(created, true);
    assert.equal(link.url, 'https://example.com/read');
    assert.equal(link.note, 'Read for class');
    assert.equal(link.status, 'saved');
    assert.ok(Date.parse(link.created_at));
    await app.close(); app = await start(databasePath);
    const reopened = await fetch(`${app.base}/api/links/${link.id}`);
    assert.equal(reopened.status, 200);
    assert.deepEqual((await reopened.json()).link, link);
  } finally {
    if (app) await app.close();
    rmSync(directory, { recursive: true, force: true });
  }
});

test('LINK-001: concurrent equivalent URLs return one entry without overwriting its note', async () => {
  const app = await start(':memory:');
  try {
    const first = await (await post(app.base, { url: 'https://Example.com:443', note: 'Original note' })).json();
    const responses = await Promise.all(Array.from({ length: 5 }, () => post(app.base, { url: 'https://example.com/#section', note: 'Replacement' })));
    for (const response of responses) {
      assert.equal(response.status, 200);
      const result = await response.json();
      assert.equal(result.created, false);
      assert.deepEqual(result.link, first.link);
    }
  } finally { await app.close(); }
});

test('LINK-001: optional note and meaningful URL distinctions are preserved', async () => {
  const app = await start(':memory:');
  try {
    const results = [];
    for (const url of ['https://example.com/a', 'https://example.com/a/', 'http://example.com/a', 'https://example.com/a?q=1', 'https://example.com/a?q=2']) {
      const response = await post(app.base, { url });
      assert.equal(response.status, 201);
      const { link } = await response.json();
      assert.equal(link.note, '');
      results.push(link.id);
    }
    assert.equal(new Set(results).size, 5);
  } finally { await app.close(); }
});

test('LINK-001: invalid submissions give actionable errors and create no entry', async () => {
  const app = await start(':memory:');
  try {
    for (const input of [{}, null, [], { url: 123 }, { url: 'example.com' }, { url: 'https://' }, { url: 'javascript:alert(1)' }, { url: 'ftp://example.com' }, { url: 'https://user:secret@example.com' }, { url: 'https://example.com/a b' }, { url: 'https://example.com', note: 123 }, { url: 'https://example.com', note: 'x'.repeat(4001) }]) {
      const response = await post(app.base, input);
      assert.equal(response.status, 400, JSON.stringify(input));
      assert.ok((await response.json()).error.length > 10);
    }
    assert.equal((await fetch(`${app.base}/api/links/1`)).status, 404);
    const valid = await post(app.base, { url: 'https://example.com' });
    assert.equal((await valid.json()).link.id, 1);
  } finally { await app.close(); }
});

test('LINK-001: malformed/oversized JSON, cross-origin writes, and unknown entries are handled', async () => {
  const app = await start(':memory:');
  try {
    assert.equal((await fetch(`${app.base}/api/links`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' })).status, 400);
    assert.equal((await fetch(`${app.base}/api/links`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ note: 'x'.repeat(17000) }) })).status, 413);
    assert.equal((await fetch(`${app.base}/api/links`, { method: 'POST', body: 'url=https://example.com' })).status, 415);
    assert.equal((await fetch(`${app.base}/api/links`, { method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'https://other.example' }, body: '{}' })).status, 403);
    assert.equal((await fetch(`${app.base}/api/links/999`)).status, 404);
    assert.equal((await fetch(`${app.base}/links/1`)).status, 200);
  } finally { await app.close(); }
});

test('LINK-001: normalization removes fragments without discarding query parameters', () => {
  assert.equal(normalizeUrl('HTTPS://Example.COM:443/a?b=2&a=1#x'), 'https://example.com/a?b=2&a=1');
  assert.throws(() => normalizeUrl('https://example.com/' + 'x'.repeat(2048)), /2,048/);
});
