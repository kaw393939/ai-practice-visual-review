# Revised instructions: actual UI trial

Date: October 24, 2026. Instructions tested: revision `3ee3d20`, beginning at [Start here](https://kaw393939.github.io/218_spec/start.html).

## Method and limits

An agent followed the published pages using Computer Use on the instructor's Mac. This is an enacted novice walkthrough, not research with students or a measurement of learning outcomes. No student completion time is inferred from automation time.

Used Safari, VS Code's terminal and actual Codex extension, and the in-app browser. Direct control of ChatGPT desktop had previously been rejected; it was not retried. Planning and implementation therefore occurred in the Codex extension, with an explicit plan approval. The exact desktop handoff remains untested.

The instructor account owns the starter and cannot follow the normal personal-fork route. Prepared a separate repository through commands entered in VS Code: cloned the current starter main, renamed its original remote to upstream, and used GitHub CLI to create/push a separate public trial repository. This was instructor preparation, not a student setup requirement. Subsequent assignment edits came from the actual Codex interface.

- [Trial repository](https://github.com/kaw393939/218_spec_student_trial_2)
- [Practice issue #1](https://github.com/kaw393939/218_spec_student_trial_2/issues/1)
- Local folder: `/Users/kwilliams/is218-student-ui-trial-2026-10-24/218_spec`
- Practice branch: `practice-001-note-help`; implementation commit: `8fdf768`.
- [Completed PR #2](https://github.com/kaw393939/218_spec_student_trial_2/pull/2); squash merge: `5d792ed6c734e5539723cbe763e071fe3c59e3a6`.

## Action and observation log

| Step | Observed result |
| --- | --- |
| Follow Start here to the setup checkpoint. | The small task, tool roles, readiness checkpoint, and route for an already-prepared workspace were visible. |
| Reuse the old VS Code trial window. | Computer Use returned stale screenshots, inaccessible input targets, and delayed feedback. Some attempted terminal input reached an editor buffer; discarded the unintended unsaved buffer without saving. Closed only the old trial window and opened a fresh window. This is a control limitation, not a student failure. |
| Use VS Code's Clone command with the starter URL. | It offered to reopen the existing clone. Cancelled; prepared a separately named clone through the terminal to avoid reusing yesterday's completed work. |
| Run version checks, inspect origin, and run npm ci. | Git 2.55.0, Node 26.10.0, npm 11.19.1; origin pointed to the new trial repository. Install completed with zero audit vulnerabilities and install-script warnings. Existing tool installation was reused. |
| Run npm start. | Port 3000 was occupied: EADDRINUSE. |
| Follow the revised macOS recovery command. | PORT=3001 npm start opened the unchanged baseline at the printed address. No other app was stopped. |
| Ask Codex to read the spec and propose a plan without edits. | It identified PRACTICE-001 and app/public/index.html, proposed the exact sentence and aria-describedby, preserved other behavior, and suggested tests and browser checks. It made no edit. |
| Create the supplied issue in Safari. | Issue #1 was created with the feature ID, spec reference, scope, and examples. Added duplicate-note preservation to the examples. |
| Create the branch in the second VS Code terminal. | The command eventually confirmed the new practice branch; delayed control feedback initially obscured that result. Asked Codex to verify rather than assume it had failed. |
| Approve the plan with the issue URL and local port context. | Codex verified the branch, edited only the HTML and practice spec, and reported six tests, docs build, and diff check passing. Browser checks remained pending. |
| Inspect Source Control and the HTML diff. | Exactly two files were changed. The HTML added the help below Note and aria-describedby while preserving maxlength=4000. No generated .temp files cluttered the change list. |
| Restart the trial server with the same port command. | The exact help sentence appeared below Note before typing. |
| Try the form in Safari. | Automation misdirected textarea input into the URL field; a coordinate attempt reported no available window. These input failures were not counted as application defects. |
| Repeat the form checks in the in-app browser. | Saved https://example.com with “Revised instructions trial: original note.” and saw Link saved at /links/1. Submitting the same URL with another note showed the existing entry and retained the original note. |
| Report observations and review the spec. | Codex recorded the user-reported browser checks. Asked it to remove temporary “not pushed” wording before publication and keep the row short. Inspected the resulting issue link, practice-branch source URL, and actual results. |
| Stage and inspect the intended scope. | Exactly two files, three insertions, two deletions. |
| Commit and push through VS Code. | Commit 8fdf768 was published to the trial repository's practice branch. |
| Try to create the PR in Safari. | The active page changed away from the comparison form. The separate browser session was signed out of GitHub. The browser submission and merge controls were not tested. |
| Try a terminal fallback for the PR. | Computer Use misdirected the command text into an unsaved editor buffer. Stopped typing; discarded the unsaved input without saving. A helper read confirmed the saved trial repository was clean and no PR had been created. |
| Finish the remote workflow with helper commands. | Outside Computer Use, created PR #2 through GitHub CLI, waited for the passing build and skipped deployment, and squash-merged only the expected head commit. Verified issue #1 closed as completed. These are disclosed helper actions, not evidence of the browser or student terminal PR flow working. |
| Review the remote result in the in-app browser. | Opened Files changed and inspected both diffs. After the helper merge, the PR visibly showed Merged, commit 5d792ed, and its linked closed issue. |
| Clean up. | A helper command verified the port-3001 process working directory matched this trial and stopped only that server. The saved trial repository was clean; the unintended unsaved editor buffer was discarded. |

## What improved

- The alternate-port command resolved the real startup conflict using the instructions, without a new AI debugging detour.
- Explicit restart instructions avoided treating an old page as a failed code edit.
- The ignore rule kept generated VitePress files out of Source Control: two intended files instead of the earlier twenty pending changes.
- The task, expected sentence, examples, two-file staging command, and distinction between passing build and skipped deployment gave concrete checkpoints.
- The updated prompt produced a valid GitHub source link without the earlier broken relative documentation link.

## Remaining points of confusion

1. **The readiness checkpoint names an outcome without a concrete check.** It says Git identity and sign-in should allow commit/push, but a novice does not get a command or visible success signal to establish that. A short instructor demonstration or preflight check would help.
2. **Returning to an old workspace needs a clear decision.** The old completed clone was still open, and Clone offered to reopen it. This trial needed a fresh copy; a real student resuming should keep their existing work. Explain “resume your existing folder” separately from “start the exercise for the first time.”
3. **The README and exercise disagree about publishing.** The repository README says pushing main publishes through GitHub Actions, while the student instructions correctly explain that forks skip deployment. Students who begin on GitHub can receive conflicting guidance.
4. **AI needs the local runtime context.** Its first plan said restart with npm start. On this Mac, that would return to the occupied port. Explicitly carrying PORT=3001 into the approval prompt corrected its implementation instructions.
5. **Temporary process status still sneaks into durable specs.** Codex initially marked the source link “not pushed.” Removing that before committing required another small review. Tell students to record behavior and evidence rather than momentary publication status.
6. **Examples are slightly inconsistent across places.** The spec and browser-check section include duplicate-note preservation, but the copyable issue example only mentions help text and saving. I added the third example manually to the issue.
7. **Review needs usable screen space.** The terminal occupied most of the VS Code editor. Hiding the panel made the diff readable. One sentence naming View → Appearance → Panel (or the panel close button) could help students whose layout hides the code.

These are observations and design suggestions, not proof that a typical student would encounter every problem. Automation focus, capture errors, and delayed UI updates are tracked separately from instruction defects.

## Evidence

- [Unchanged baseline](./evidence/2026-10-24-revised-trial/baseline.png)
- [Practice issue](./evidence/2026-10-24-revised-trial/issue.png)
- [Changed help text and duplicate preservation](./evidence/2026-10-24-revised-trial/after-and-duplicate.png)
- [Remote PR diff](./evidence/2026-10-24-revised-trial/pr-diff.png)
- [Merged PR](./evidence/2026-10-24-revised-trial/merged-pr.png)

## Completion status

The adapted assignment is complete: implementation, local checks, browser examples, spec review, commit, push, remote diff review, merged PR, and closed issue. The trial server was stopped. The instructor's starter application was not changed to include the practice solution.

Actual AI planning, editing, feedback, and the initial commit/push used the visible Codex/VS Code interfaces. Browser form acceptance checks used the in-app browser after Safari input control failed. PR creation, check waiting, merge, saved-worktree verification, and server cleanup needed helper commands. A faithful ChatGPT-desktop handoff, first-time student account setup, and browser PR submission/merge remain unverified. The successful adapted outcome should not be presented as an uninterrupted student completion.
