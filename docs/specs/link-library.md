# Personal link library

**Instructor reference, not your task list.** Begin with [Start here](../start) for your own practice.

Our worked example: save links now; add summaries and organization later. [Follow the walkthrough](../example).

**For:** one person. **Progress:** LINK-001 is implemented locally. Page reading, summaries, search, and editing are still planned.

## Intended flow

1. Paste a URL and optionally add a note. Saving and duplicate detection work now.
2. The app saves it, reads the page, and uses OpenAI to suggest a category, topic tags, and a short summary.
3. Browse or search your library. Open an entry to read the summary, visit the source, or make corrections.

Keep the interface to a URL box, a searchable list with category filters, and an entry detail view. Show **Processing**, **Ready**, or **Needs attention** on each entry.

## Features

| ID | Feature | Done when |
| --- | --- | --- |
| LINK-001 | Save a link | A valid URL and optional note are saved in SQLite before processing. Submitting the same normalized URL opens the existing entry. |
| LINK-002 | Read the page | The app extracts available page text and metadata. A blocked or unreadable page shows a clear reason, with options to retry or paste text. |
| LINK-003 | Organize and summarize | The entry gets a category, topic tags, a short summary, and key points based on retrieved or pasted content. Missing facts stay unknown. |
| LINK-004 | Browse and search | Search titles, summaries, tags, and notes; filter by category; open the original source. |
| LINK-005 | Edit an entry | Change the category, tags, summary, or notes. Reprocessing preserves manual edits unless you choose to replace them. |

## Try saving a link

Run `npm ci` and `npm start` in the repository, then open **http://127.0.0.1:3000**. The app saves to `data/links.sqlite`. This is a local application; the GitHub Pages site contains the documentation.

A saved entry has its own `/links/ID` address. Equivalent URLs return that entry and keep its original note. Normalization trims surrounding whitespace, normalizes hostname case and default ports, and removes fragments. Paths, trailing slashes, query parameters, and HTTP versus HTTPS remain distinct.

Only HTTP(S) URLs without embedded credentials are accepted. URLs are limited to 2,048 characters and notes to 4,000. Entries show **Saved** until page processing is implemented; saving does not fetch the URL or call OpenAI.

## Categories

Start with **Article**, **Tutorial / docs**, **Repository / tool**, **Event**, **Research**, and **Other**. Use flexible topic tags such as AI, Python, or teaching.

Summaries match the category: events emphasize dates, venues, and speakers; tutorials emphasize what you learn; tools emphasize what they do; research emphasizes findings and limitations. Include only details present in the source.

## Keep the build small

- One web app with a backend and one SQLite database file.
- OpenAI calls run on the backend; the API key stays out of the browser and Git.
- Save the URL, extracted content, generated result, manual edits, and processing status.
- A failed fetch or AI request leaves the saved link intact and offers a retry.
- Limit page size and request time. Fetch public web URLs only, including after redirects.
- Keep the SQLite file on persistent storage and make regular backups.

Start for personal use locally. Before making the running app internet-accessible, decide how to restrict access. GitHub Pages hosts these docs; the running app needs a backend host.

## Later, if useful

Shared accounts, team roles, browser extensions, bulk imports, scheduled refreshes, and vector search can wait. No separate queue service or microservices for the first version.

## Work and code

Each feature has one issue. As implementation lands, add its pull request, source files, and tests here. **Planned** means the feature is not implemented yet.

| Feature | Issue | Implementation | Verification |
| --- | --- | --- | --- |
| LINK-001 | [#1](https://github.com/kaw393939/218_spec/issues/1) | [PR #6](https://github.com/kaw393939/218_spec/pull/6), [Server](https://github.com/kaw393939/218_spec/blob/main/app/server.js), [SQLite storage](https://github.com/kaw393939/218_spec/blob/main/app/store.js), [form](https://github.com/kaw393939/218_spec/blob/main/app/public/app.js) | [Acceptance tests](https://github.com/kaw393939/218_spec/blob/main/test/link-001.test.js) · `npm test` |
| LINK-002 | [#2](https://github.com/kaw393939/218_spec/issues/2) | Not implemented | Not verified |
| LINK-003 | [#3](https://github.com/kaw393939/218_spec/issues/3) | Not implemented | Not verified |
| LINK-004 | [#4](https://github.com/kaw393939/218_spec/issues/4) | Not implemented | Not verified |
| LINK-005 | [#5](https://github.com/kaw393939/218_spec/issues/5) | Not implemented | Not verified |

## Decisions

- **Agreed:** Node.js with its built-in HTTP server and SQLite support. No application framework needed for saving links.
- **Agreed:** Duplicate submissions preserve the original note so saving again does not overwrite it.
- **Open:** Where to host the app after the local version works.

Next step: LINK-002, reading a saved page. LINK-003 will add categorization and summaries afterward.
