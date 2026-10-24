# Actual assignment trial with UI interaction

Date: October 23, 2026. Starting instructions: https://kaw393939.github.io/218_spec/start.html.

## Current outcome

Completed the coding and checking portion of PRACTICE-001 in a separate repository. Created the issue, discussed a plan with the actual Codex interface, implemented and revised the change, checked it in Safari, reviewed the local diffs, committed and pushed two files, and created PR #2. GitHub's PR page reported all checks passed: one successful build check and one skipped deployment check.

**The adapted assignment is complete:** PR #2 was squash-merged as `74034a7a4470633b4582f41ad6286cd107c77435`, and issue #1 was verified closed as completed. The Mac locked while opening Files changed. Final remote diff review, merge, and issue-state verification used the GitHub connector rather than the browser. The exact ChatGPT-desktop handoff and browser merge interaction remain untested.

Artifacts:

- [Practice repository](https://github.com/kaw393939/218_spec_student_trial)
- [Actual practice issue #1](https://github.com/kaw393939/218_spec_student_trial/issues/1)
- [Actual PR #2](https://github.com/kaw393939/218_spec_student_trial/pull/2)
- [Implementation commit 29a8bab](https://github.com/kaw393939/218_spec_student_trial/commit/29a8babcfc182706636f2f0007919e2aff2ace78)
- Local project: `/Users/kwilliams/is218-student-ui-trial/218_spec`

## What was actually exercised

Used Computer Use to operate Safari and VS Code, including the editor's terminal and its actual Codex extension. Prompts were entered into that interface and its real responses and edits were reviewed. This goes beyond the earlier imagined walkthrough and direct disposable-copy rehearsal.

This is still an agent enacting a novice task, not research with NJIT students. Reactions and likely novice interpretations are hypotheses; interface outcomes are observations. No learning results, student completion rates, or human completion times are claimed.

## Departures from the normal student route

- The signed-in GitHub account owns the starter and could not fork it personally. With the user's broader authorization, created a separate personal repository through GitHub Import. Importing was a test-account workaround, not a recommended student step.
- Opened VS Code using one helper shell command, `open -a 'Visual Studio Code'`, after Computer Use initially found no window. Subsequent editor actions used Computer Use.
- The import queued and selected the older `link-001-save-link` branch as its default. Cloned the public starter through VS Code, pointed the isolated clone's origin at the trial repository, verified/pushed main (already up to date), and corrected the trial repository's default branch using GitHub CLI inside the VS Code terminal. These were account/copy preparation actions, not ordinary assignment requirements.
- Direct control of the ChatGPT desktop application was rejected by Computer Use. Used the available Codex extension in VS Code for the actual planning dialogue and implementation. A separate ChatGPT-desktop-to-Codex handoff therefore remains untested. Terminal.app remained blocked and was not used.
- The existing port-3000 application was preserved. The trial copy ran on port 3001 after Codex explained how to change the port.
- After the Mac locked, used the GitHub connector to review the exact two-file diff and merge only the previously checked head SHA. Confirmed issue #1 closed through the connector. Stopped only the trial server through a helper command after verifying its process working directory; the existing port-3000 app was untouched.
- Browser automation sometimes needed fresh accessibility targets or direct navigation to already-observed GitHub URLs. Input-focus and accessibility-refresh problems are tooling limitations, not automatically student or site defects.

## Action and result log

| Action | Actual result |
| --- | --- |
| Open the published exercise and setup pages in Safari. | Task and class-tool roles were visible. |
| Open VS Code and run the setup version checks in its terminal. | Git 2.55.0, Node 26.10.0, npm 11.19.1. This existing machine differs from the guide's recommended Node 24 setup. |
| Prepare the personal trial copy. | Repository and isolated local clone created; origin verified as the trial repository. Default branch corrected to main. |
| Enter the guide's readiness prompt into Codex. | It read AGENTS.md and the practice spec, identified PRACTICE-001 and app/public/index.html, and made no edit. |
| Ask for a short plan before coding. | It proposed the exact help sentence, an HTML association, unchanged saving/limit behavior, tests, and browser checks; it requested confirmation. |
| Create the issue using Small feature or change. | Issue #1 created with the supplied title, spec link, limits, and examples. |
| Run npm ci. | Installation completed, audit reported zero vulnerabilities, and npm displayed install-script warnings. |
| Run the documented npm start. | Failed with a long EADDRINUSE stack trace because port 3000 was already occupied. |
| Paste that actual error into Codex and ask for help without edits. | It explained PORT=3001 npm start, how to identify the right browser address, and how to stop only this copy. |
| Run the recovery command and open port 3001. | The baseline app opened; the new note-limit help was absent. |
| Create practice-001-note-help and approve the agreed plan. | Codex edited only the HTML and practice spec, ran checks, and left commit/push to the user. |
| Inspect the assistant's first implementation result. | All six tests passed. A relative source link initially broke the docs build; Codex repaired it using a clearly identified GitHub branch link, and the docs build passed. |
| Refresh the running app. | The old page remained visible. |
| Restart the port-3001 server and refresh. | The exact sentence appeared directly below Note before typing. |
| Save https://example.com with a note. | Link saved; the entry appeared at /links/1. |
| Save the same URL with a different note. | The existing entry reopened and retained the first note. |
| Report browser results to Codex. | It updated the spec with the reported checks without pretending to have personally performed them. |
| Inspect changed files in VS Code. | Two intended files plus 18 untracked generated VitePress files were visible. The HTML retained maxlength=4000 and linked Note to note-help with aria-describedby. |
| Give review feedback on the spec. | The initial long tracking row was shortened. Temporary statements that commit/push had not happened were removed before publication. |
| Stage the two named assignment files and inspect the staged stat. | Exactly two files, three insertions, two deletions. Generated files stayed unstaged. |
| Commit and push from VS Code. | Commit 29a8bab published on the practice branch. |
| Create the PR through Safari. | PR #2 linked Closes #1. The form did not visibly redirect; checking the PR list confirmed creation and avoided a duplicate. |
| Inspect PR status. | All checks passed: one successful build check and one skipped deployment. |
| Open Files changed for the final browser PR review. | The Mac locked; no further desktop interaction was attempted. |
| Finish through the GitHub connector. | Reviewed the exact two-file remote diff, merged PR #2 with an expected-head-SHA check, and verified issue #1 closed as completed. |
| Clean up the trial app. | Identified the port-3001 server and verified its working directory matched the isolated clone, then stopped only that process. This was a helper command rather than a student UI step. |

## Findings from doing the work

### 1. A successful process includes recovery

The EADDRINUSE failure is concrete evidence that the happy-path instructions are insufficient on an already-used machine. The short “port is in use” note helps identify the problem but does not give the alternate-port command. Asking Codex to explain the actual error produced a useful, scoped recovery without unnecessary code edits or stopping another app.

Suggested improvement: one copyable troubleshooting prompt asking for explanation and a minimal recovery, plus a reminder to check the browser's port before judging whether an edit worked. Keep platform-specific commands accurate.

### 2. Refreshing is not enough for this app

The server reads its static assets at startup. npm start did not reload the changed HTML, so refreshing showed the old page. Restarting made the sentence appear. The guide already mentions this recovery, but it is predictable enough to state directly for this exercise: after an HTML edit under npm start, restart that app terminal and refresh. Do not leave a novice to infer that the AI failed to edit the file.

### 3. The starter produces distracting generated changes after a failed build

The first failed docs build left 18 files under docs/.vitepress/.temp/. VS Code then showed 20 pending changes despite an intended two-file task. This is a concrete starter-repository issue: its .gitignore does not exclude that directory. A novice using Stage All could include generated files.

Suggested improvement: ignore VitePress .temp output in the instructor starter and keep the first task's explicit two-file git add command. The trial did not modify .gitignore or commit the generated files, preserving the assigned scope.

### 4. AI output still needs small, specific review

The AI initially produced a source link that VitePress interpreted as a missing documentation page. Its own build check caught and repaired that problem. It then expanded one tracking-table cell into a long account of the manual session and included a temporary “not committed/pushed” statement that would become stale after publication. Specific feedback produced a concise row with the issue, branch source link, and actual check results.

Suggested improvement: show a short completed tracking row in the instructions and explain that source-code links should point to GitHub, while page links point into the docs. This example demonstrates review and revision rather than suggesting a plan prevents every error.

### 5. The concrete task and acceptance examples are useful

The exact sentence, field location, and example URL made the visual check easy to understand. The request not to claim manual success before a report kept the AI's record accurate. Trying a duplicate provided a clear preservation check without adding scope.

### 6. Setup and repository mechanics dominate the first attempt

The core edit was tiny. The surrounding work involved copies, folders, terminals, ports, branches, issue fields, staged changes, and a PR. Some of the friction here was instructor-account-specific and must not be generalized to students. Even so, a prepared-workspace checkpoint before the exercise would let the first lesson concentrate on describing, planning, checking, and revising.

### 7. Keep warnings and automation artifacts separate from application failures

npm ci printed install-script warnings even though installation completed and the app ran. Browser automation also occasionally pasted into a prior field or retained an older viewport. These do not establish application defects. Correcting input and verifying the actual result matters more than interpreting every warning or stale screen as failed work.

## Evidence

- [Baseline before the edit](./evidence/2026-10-23-full-trial/before.png)
- [Changed help text and duplicate-preservation result](./evidence/2026-10-23-full-trial/after-and-duplicate.png)
- The public issue, commit, and PR above preserve the actual submitted artifacts.

## What is complete and what remains untested

The practice repository now contains the merged, checked change and closed issue. The trial app was stopped. The instructor starter was not changed to include the practice solution, and generated files were not committed.

A true ChatGPT-desktop-to-Codex handoff, the browser merge interaction, and a student's independent first-time account setup remain untested. Those need a permitted desktop interface or a real student session. The trial does not justify calling this representative of all NJIT students.

## Instruction revisions after review

Updated the starter instructions following this trial:

- Put an instructor-assisted workspace checkpoint before the exercise, with a direct route for students whose setup is complete.
- Added alternate-port commands for macOS/Linux and Windows Command Prompt, a scoped AI troubleshooting prompt, and guidance for distinguishing warnings from failures.
- Made server restart and matching the browser address explicit after HTML edits.
- Ignored VitePress `.temp` output and retained staging of only the two intended assignment files.
- Added a concise tracking-row example, GitHub source-link guidance, duplicate-note checks, and the expected skipped deployment status.
- Fixed the practice page's link to the copy/setup section and added instructor preparation guidance.

Validation: documentation build passed; setup section anchors and generated-file ignore rule checked. These revisions have not yet been tested with students or through another complete desktop walkthrough.
