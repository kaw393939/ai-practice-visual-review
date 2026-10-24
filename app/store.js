import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export class InputError extends Error {}

// LINK-001: Preserve meaningful paths and queries; fragments identify a section of a page.
export function normalizeUrl(value) {
  if (typeof value !== 'string' || !value.trim() || value.trim().length > 2048) {
    throw new InputError('Enter a web URL of 2,048 characters or fewer.');
  }
  const raw = value.trim();
  if (!/^https?:\/\//i.test(raw) || /[\s\\]/.test(raw)) {
    throw new InputError('Enter a complete URL starting with http:// or https://.');
  }
  let url;
  try { url = new URL(raw); } catch { throw new InputError('Enter a valid web URL.'); }
  if (!url.hostname || url.username || url.password) {
    throw new InputError('Use a web URL without an embedded username or password.');
  }
  url.hash = '';
  return url.href;
}

export function openStore(databasePath) {
  if (databasePath !== ':memory:') mkdirSync(dirname(databasePath), { recursive: true });
  const db = new DatabaseSync(databasePath);
  db.exec(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS links (
      id INTEGER PRIMARY KEY,
      url TEXT NOT NULL UNIQUE,
      note TEXT NOT NULL DEFAULT '',
      status TEXT NOT NULL DEFAULT 'saved',
      created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
    ) STRICT;
  `);
  const insert = db.prepare('INSERT INTO links (url, note) VALUES (?, ?) ON CONFLICT(url) DO NOTHING');
  const byUrl = db.prepare('SELECT * FROM links WHERE url = ?');
  const byId = db.prepare('SELECT * FROM links WHERE id = ?');
  return {
    save(input) {
      if (!input || typeof input !== 'object' || Array.isArray(input)) {
        throw new InputError('Submit a URL and optional note.');
      }
      const url = normalizeUrl(input.url);
      const note = input.note ?? '';
      if (typeof note !== 'string' || note.length > 4000) {
        throw new InputError('Keep the note to 4,000 characters or fewer.');
      }
      const result = insert.run(url, note.trim());
      // The unique constraint handles duplicate submissions without replacing existing notes.
      return { link: byUrl.get(url), created: result.changes === 1 };
    },
    get(id) { return byId.get(id); },
    close() { db.close(); }
  };
}
