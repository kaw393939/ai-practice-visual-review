# Student assignment attempt through the actual interfaces

Date: October 23, 2026. Published starting point: https://kaw393939.github.io/218_spec/start.html. Assignment: PRACTICE-001, add the note-limit explanation in the student's own copy.

**Outcome: blocked before implementation. This assignment was not completed.** This report supersedes any impression that the earlier browser walkthrough and disposable-copy rehearsal constituted a full student attempt.

Continuation: the later [full-trial report](./2026-10-23-student-ui-full-trial.md) records an adapted exercise through a merged PR, including the helper actions and interfaces that remained untested. The blocked outcome below describes this earlier attempt.

## Approach

Used Computer Use to interact with Safari and attempt to open VS Code and ChatGPT/Codex. Followed the published instructions rather than using GitHub APIs, shell tools, or direct file edits to complete the assignment. The only non-UI write was saving this report.

This is an agent acting out an inexperienced student's task, not a study of NJIT students. The usability reactions below are simulated. The interface states and tool rejections are observed. The existing instructor account and prepared computer are materially different from a new student's environment.

## Actual action log

| Step | Action taken | Observed result |
| --- | --- | --- |
| Find the tools | Read the Computer Use app/browser inventory. | Safari, ChatGPT, and Code were listed as running. |
| Start the exercise | Navigated Safari to the published Start here page. | The task and required ChatGPT desktop / Codex / VS Code roles were visible. |
| Open VS Code | Requested Code, then the listed VS Code bundle ID. | Name lookup failed; bundle lookup reported no accessible windows. This is a tool/environment limitation, not evidence that a student cannot open VS Code. |
| Recover the editor | Attempted the documented launcher capability and system app launcher. | The launcher capability was unavailable; the Spotlight control attempt timed out. No editor window was obtained. |
| Inspect Terminal | Requested the running Terminal application as a possible recovery interface. | Computer Use explicitly rejected access to `com.apple.Terminal` for safety reasons. No commands were run. |
| Open ChatGPT/Codex | Requested the running ChatGPT application, `com.openai.codex`. | Computer Use explicitly rejected access for safety reasons. No planning prompt or implementation prompt was sent. |
| Continue the browser setup | Followed Setup and its starter-repository link in Safari. | GitHub was signed in as the instructor account, `kaw393939`. |
| Attempt the fork step | Clicked Fork and opened the owner selector. | The personal owner was disabled with “repository already exists.” Other organization destinations were visible but were not selected. |
| Check the name conflict | Changed only the unsubmitted form's proposed name to `218_spec_student_trial`, then reopened the owner selector. | The personal owner remained disabled. No fork or repository was created. |

No files were changed for PRACTICE-001. No issue, branch, commit, push, or PR was created. The running example app was not used as a substitute for a student's own copy. No organization repository or account settings were changed.

## What feels difficult from the student perspective

These are fictional reactions to the instructions, not participant quotes:

- **“The actual change is one sentence, but I have a lot to set up first.”** The first cycle combines tool installation/access, GitHub ownership, Git/Node commands, a local server, AI planning, code editing, and a PR. A short task does not automatically make its setup accessible.
- **“Why do I plan in one chat and then paste the plan into another?”** The guide explains the handoff mechanically, but a novice may see duplication. The instructor demonstration should make the purpose of that handoff visible, or explicitly allow planning within Codex while still using ChatGPT desktop for explanation.
- **“How do I know I chose the same folder?”** File names and the readiness prompt help, but the folder-selection step is still a point to observe in a real trial. It could not be exercised here.
- **“What do I do if the first setup step does not work?”** The guide appropriately suggests instructor help, but there is no prepared, named fallback workspace. Account and machine issues can stop progress before the structured AI process is practiced.
- **“I need somewhere to pause and come back.”** The numbered pages help. A tiny checkpoint such as “app open / Codex sees files / own issue created” may be more useful than additional background reading.

## What worked in this attempt

- The published starting page clearly names one task and distinguishes it from building the entire app.
- Setup is directly reachable and specifies the three class tools.
- The starter link reaches the correct repository.
- The fork instruction leads to the actual GitHub form.
- The ownership requirement prevented quietly doing practice work in the instructor's repository or an unrelated organization.

## Distinguish the blockers

**Computer Use restrictions:** this agent cannot control the ChatGPT/Codex app through the available interface. Terminal is also explicitly blocked, and VS Code has no accessible window. These restrictions do not establish a defect in the course instructions and must not be bypassed through another interface and represented as a student UI test.

**Instructor-account mismatch:** the signed-in account owns the starter. The personal-fork failure is specific to this rehearsal account; it is not evidence that a different student's fork would fail. Moving to an organization would change the exercise and its ownership assumptions.

**Unvalidated usability hypotheses:** setup burden, three-tool switching, folder selection, and resuming the exercise should be observed in an actual student session. This attempt cannot establish completion time, success rate, or learning effectiveness.

## Conditions needed to finish the requested end-to-end trial

1. A permitted UI route to ChatGPT/Codex and an accessible VS Code window with the student's local project.
2. A separate authorized GitHub student/test account that can fork the starter into its own personal namespace, or an explicitly chosen equivalent test repository.
3. Then actually perform the planning handoff, issue creation, branch, edit, browser check, tests, commit, push, PR review, and merge. Record the actual URLs and outcomes rather than copying the completed instructor example.

No student-facing documentation was changed during this attempt. Preserve these findings for the next review; do not label this a completed assignment or a successful end-to-end usability trial.
