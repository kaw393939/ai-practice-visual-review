# Worked example: save a link

**Instructor demonstration, already completed.** To do your own task, [start in the README](https://github.com/kaw393939/218_spec#readme).

The [personal link library](./specs/link-library) is our example of a small project built with AI. Only **LINK-001: Save a link** is implemented. The remaining features are plans.

This is a walkthrough of the recorded artifacts, not a transcript of the original conversation.

## 1. Describe the intention

One person wants to save a URL with an optional note and find it again. Before building summaries or search, make saving work.

The feature has three simple examples:

| Try this | Expected result |
| --- | --- |
| Save a valid HTTP(S) URL and a note. Restart the app and revisit the entry. | The URL and note are still there. |
| Submit an invalid URL. | An explanation appears and no entry is saved. |
| Save the same normalized URL with a different note. | The existing entry opens and its original note stays unchanged. |

The last example resolves a decision: duplicate submissions must not overwrite a saved note. The [spec](./specs/link-library#try-saving-a-link) explains which URLs count as equivalent.

## 2. Make the task visible

[Issue #1](https://github.com/kaw393939/218_spec/issues/1) tracks LINK-001. The feature ID connects the requirement to the work without a separate project board.

A prompt for a task like this could be:

> Read LINK-001 and issue #1. Implement saving a URL and optional note in SQLite. Preserve the original note on duplicate submission. Keep page fetching and AI summaries for later. Explain your plan first.

## 3. Inspect the implementation

[PR #6](https://github.com/kaw393939/218_spec/pull/6) contains the completed change. Follow the request through the [browser form](https://github.com/kaw393939/218_spec/blob/main/app/public/app.js), [server](https://github.com/kaw393939/218_spec/blob/main/app/server.js), and [SQLite storage](https://github.com/kaw393939/218_spec/blob/main/app/store.js).

Ask AI to explain one part at a time: “Where does duplicate detection happen, and how is the original note preserved?” Open the referenced code as you discuss it.

## 4. Try the result

First prepare your local copy using [the README](https://github.com/kaw393939/218_spec#readme). If the app is already running, use that browser tab. Otherwise, in your project terminal:

```sh
npm ci
npm start
```

Open **http://127.0.0.1:3000**. Try the three examples above. Stop the app with Ctrl+C and restart it to check persistence. Your local entries are stored in `data/links.sqlite`, outside Git.

Run `npm test` to see the [automated checks](https://github.com/kaw393939/218_spec/blob/main/test/link-001.test.js). Discuss what a check demonstrates and what you still need to try in the browser.

The GitHub Pages website hosts these instructions; it does not run the application. Saving links requires no OpenAI API key.

## 5. Preserve what matters

The [feature table](./specs/link-library#work-and-code) links the spec, issue, PR, code, and tests. Someone returning later can find the current behavior without reading the whole chat.

For your own practice, follow the supplied [first change](./practice). You do not need to implement the rest of the link library.
