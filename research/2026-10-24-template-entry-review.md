# Student entry review: template, clone, and setup

Date: October 24, 2026. Reviewed the published README/site revision `12ca439`, followed by the small wording corrections below.

## Changes

The README now gives one route: **Use this template → create your repository → clone your repository in VS Code → setup → practice**. Enabled the instructor repository as a public GitHub template. Kept `main` as the unfinished PRACTICE-001 starter; no stage branches are needed.

Removed student-facing publishing instructions from the README, aligned copy terminology across the site, added a Git identity/push-access check, included duplicate preservation in the issue examples, and added the working command/address to the AI handoff. The prompt asks for durable results rather than temporary “not pushed” status.

## Actual Computer Use observations

| Action | Observed result |
| --- | --- |
| Open the instructor repository in signed-in Safari. | “Public template,” Use this template, and the revised four-step README were visible. |
| Use the template creation form. | Created [ai-practice-starter-review](https://github.com/kaw393939/ai-practice-starter-review), public, with Include all branches off. Used a distinct review name; no owner/fork workaround was required. |
| Select Code → HTTPS and clone through VS Code's UI. | The folder picker appeared and the new repository opened at `/Users/kwilliams/ai-practice-starter-review`. No reopening of a previous completed clone was needed. |
| Run the documented version, remote, identity, and dry-run push checks in VS Code. | Tools were available, origin pointed to the new copy, identity values were displayed, and push access returned “Everything up-to-date.” Reused the existing signed-in account and installed tools. |
| Run npm ci and npm test. | Installation completed; six tests passed, zero failed. npm warnings did not prevent startup. |
| Run npm start, then the documented alternate command. | Port 3000 was occupied. PORT=3001 npm start opened the new copy on 3001. |
| Open the local app in the in-app browser. | The form was empty and the practice help sentence was absent, as a student should find it before the exercise. |
| Enter the readiness prompt into the actual Codex extension in VS Code. | It identified PRACTICE-001, app/public/index.html, the missing help/association, and the spec's unfinished status. It reported no file edits. |
| Open the new repository's Issues and Actions pages in Safari. | Issues started at zero, Small feature or change was available, and the copied workflow appeared. No practice issue or solution was created. |
| Follow Setup → Your first change on the published site. | Template instructions, concrete readiness checks, three matching acceptance examples, and the command/address handoff line were present. |

## Corrections prompted by this review

- The copied README repeats the first-time creation steps. Added explicit cues: already have the GitHub copy → clone it; already have the local folder → setup. This avoids a second-copy loop without adding another workflow.
- The workflow was still titled “Deploy VitePress to GitHub Pages.” Renamed it “Check app and docs” to match the student task. The instructor-only deployment condition remains in place.

## Evidence and limits

- [Unfinished starter app](./evidence/2026-10-24-template-entry-review/unfinished-starter.png)
- [Available issue template](./evidence/2026-10-24-template-entry-review/issue-template.png)
- [Final README starting steps](./evidence/2026-10-24-template-entry-review/readme.png)

This was an agent's setup and starting-state review, not a study with students or a new full assignment implementation. GitHub creation, cloning, terminal checks, browser inspection, and the Codex readiness dialogue used Computer Use. The separate ChatGPT-desktop handoff and first-time installation/sign-in remain untested.

A capture error occurred during Ctrl+C cleanup; a helper process check found no remaining port-3001 listener. A helper Git check confirmed the fresh copy was clean, on main, at its initial template commit `278197a`. The earlier completed trial repositories were not used as this starter.
