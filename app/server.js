import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { InputError, openStore } from './store.js';

const publicDirectory = new URL('./public/', import.meta.url);
const assets = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']],
  ['/style.css', ['style.css', 'text/css; charset=utf-8']]
].map(([route, [file, type]]) => [route, { body: readFileSync(new URL(file, publicDirectory)), type }]));

function json(response, status, body) {
  response.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  response.end(JSON.stringify(body));
}

export function createApp({ databasePath = resolve('data/links.sqlite') } = {}) {
  const store = openStore(databasePath);
  const server = createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
    try {
      const host = request.headers.host ?? '';
      if (!/^(127\.0\.0\.1|localhost)(:\d+)?$/.test(host)) {
        return json(response, 403, { error: 'Use the local application address.' });
      }
      const pathname = new URL(request.url, `http://${host}`).pathname;
      const match = pathname.match(/^\/api\/links\/([1-9]\d*)$/);
      if (request.method === 'GET' && match) {
        const id = Number(match[1]);
        const link = Number.isSafeInteger(id) ? store.get(id) : undefined;
        return link ? json(response, 200, { link }) : json(response, 404, { error: 'Link not found.' });
      }
      if (request.method === 'POST' && pathname === '/api/links') {
        if (request.headers.origin && request.headers.origin !== `http://${host}`) {
          return json(response, 403, { error: 'Submit links from the application page.' });
        }
        if (request.headers['content-type']?.split(';')[0].trim() !== 'application/json') {
          return json(response, 415, { error: 'Send the URL and note as JSON.' });
        }
        let size = 0;
        const chunks = [];
        for await (const chunk of request) {
          size += chunk.length;
          if (size > 16384) return json(response, 413, { error: 'The submission is too large.' });
          chunks.push(chunk);
        }
        let input;
        try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
        catch { return json(response, 400, { error: 'The submission is not valid JSON.' }); }
        const result = store.save(input);
        response.setHeader('Location', `/api/links/${result.link.id}`);
        return json(response, result.created ? 201 : 200, result);
      }
      const asset = assets.get(pathname) ?? (/^\/links\/[1-9]\d*$/.test(pathname) ? assets.get('/') : undefined);
      if (request.method === 'GET' && asset) {
        response.writeHead(200, { 'Content-Type': asset.type, 'Cache-Control': 'no-cache' });
        return response.end(asset.body);
      }
      return json(response, 404, { error: 'Page not found.' });
    } catch (error) {
      if (error instanceof InputError) return json(response, 400, { error: error.message });
      console.error('Request failed:', error.message);
      if (!response.headersSent) json(response, 500, { error: 'Could not save the link. Please try again.' });
      else response.end();
    }
  });
  server.on('close', () => store.close());
  return server;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT ?? 3000);
  const server = createApp({ databasePath: resolve(process.env.LINKS_DB_PATH ?? 'data/links.sqlite') });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Personal link library: http://127.0.0.1:${server.address().port}`);
  });
  for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
}
