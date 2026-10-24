# Practice: explain the note limit

This is the supplied first task for [Your first change](../practice). It is planned in the instructor's starter; students implement it in their own repositories.

## Purpose

Help someone understand what they can put in the optional Note box.

## Feature

| ID | What should change | Expected result |
| --- | --- | --- |
| PRACTICE-001 | Explain the note limit beside the field. | “Add a short note (up to 4,000 characters).” appears directly below the Note box before typing. The field is associated with its help text. |

## Examples to try

- Open the app: the sentence appears below Note.
- Save `https://example.com` with a short note: saving still works.
- Save that URL again with a different note: the existing entry opens and keeps the original note.

## Decisions and limits

Keep the existing 4,000-character limit. Change only help text and its HTML association; no new validation, database behavior, summaries, or other features.

The relevant file is `app/public/index.html`. Start with a plan before editing.

## Work and checks

| Feature | Issue | Implementation | How to check |
| --- | --- | --- | --- |
| PRACTICE-001 | Add your own issue URL. | Not implemented in this starter. | Not verified for your change. |

In your repository, replace this row with your issue, implementation link, and what you actually checked. LINK-001's existing tests check saving; they do not establish that the new help text appears correctly.
