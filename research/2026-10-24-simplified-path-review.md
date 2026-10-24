# Simplified student path: revision and repeat review

October 24, 2026. This is an agent walkthrough, not research with human participants. Reading-path observations and application results are evidence; motivation and likely novice reactions are hypotheses.

## What changed

- README is the sole setup path: make a GitHub copy, terminal clone/open, run and try the app, check access, then follow Your first change.
- Home and Start links point to that README. Setup is troubleshooting only; it no longer repeats cloning and running instructions.
- The exercise opens with the before/after outcome and why a tiny change is useful practice.
- One AI prompt produces a plan and issue draft. The student reviews scope/examples and pastes one body into the simplified issue form, rather than copying three supplied fields.
- Terminal Git remains explicit. `code .` has a File → Open Folder fallback; no Command Palette or Git GUI is taught.
- Students save a useful link, inspect the two-file diff, distinguish automated checks from browser evidence, and record actual observations.
- The spec-template link is named explicitly. Optional reading stays separate from the assignment.

## Fresh copy and actual results

Created [ai-practice-simple-review](https://github.com/kaw393939/ai-practice-simple-review) from the updated default-branch template (`333494d`), then used HTTPS git clone. Its initial commit was `60fdfd9`. The initial HTML had no Note help sentence; only the trial branch received the solution. Existing student trial repositories were left alone.

| Step | Result |
| --- | --- |
| Read the new copy's README in the browser | All three sections rendered. The alternate repository-name instruction covered this repeat trial, since ai-practice already existed. |
| Clone/install/access | Origin matched the new copy. Node 24.20.0, npm ci, Git identity presence, and dry-run push succeeded. No secrets or identity values were copied into this report. |
| Start the app | npm start failed because port 3000 was already occupied. Published Setup help explained the error; PORT=3001 npm start worked without stopping the other app. |
| Try the unfinished app | Browser saved an HTML reference and a personal note. Help text was absent, as required for a new student. |
| Follow the exercise | Published page showed the before/after, a short plan/issue prompt, one Plan and checks field instruction, and four stages. No clone loop was required. |
| Plan and issue | Draft limited work to help text/association and the tracking row. Scope and three checks matched the spec. Created issue #1. This draft was produced/reviewed within this assisted run; the separate desktop conversation was not exercised. |
| Branch and implementation | Clean main; created practice-001-note-help. Changed only app/public/index.html and docs/specs/practice.md. Existing maxlength=4000 remained; aria-describedby connects the new help. |
| Automated checks | Six tests passed and docs build passed. These tests cover saving, not visible placement of the new sentence. |
| Browser checks | After server restart and explicit browser refresh, help appeared below Note. Saved a new Git diff reference with a note; resubmitting that URL with another note preserved the original and showed the duplicate explanation. |
| Diff and tracking row | Reviewed only the two intended files. Recorded actual issue/source links and checks, then committed a9351e8 and pushed the practice branch. |
| PR | [PR #2](https://github.com/kaw393939/ai-practice-simple-review/pull/2) links the change to issue #1 and describes checks plus this run's tooling limits. GitHub build passed (14 seconds), deployment skipped as expected. Reviewed the public two-file diff, squash-merged as cd9769f, and verified issue #1 closed. Kept the source-linked branch and stopped this trial's server. |

## Problems caught during the repeat

**Automatic page navigation suggested unnecessary next steps.** The site footer offered Setup help or a worked example after the assignment, undermining the explicit route. Disabled previous/next pagers on Start, Setup help, and Your first change (`05d66ac`); browser review confirmed the exercise no longer shows them.

**The issue-drafting prompt should supply the published spec URL.** An attached local Markdown file alone does not establish the public URL that belongs in GitHub. Added that URL to the existing prompt, without adding another copy block. The trial issue already used this correct URL.

**Refresh is a real step.** Navigating back to the app after restarting initially displayed its previous browser document. An explicit refresh, as instructed, loaded the new help. Keep the restart-and-refresh sentence; do not assume navigating to the app proves the latest HTML loaded.

## What remains uncertain

Computer Use could read VS Code but terminal typing did not visibly appear, and terminal creation was disabled in the detached window. Did not keep retrying input or change system settings. Direct tools performed repository creation, clone, install, Git checks, branch, implementation, server control, issue/PR creation, and final Git steps. Computer Use inspected published instructions and exercised the actual app. Native issue-form entry and the separate ChatGPT desktop-to-Codex handoff remain unvalidated in this run. Source inspection confirms the issue template has one required body field, but that is not a successful form-entry trial.

The reading path is more direct, and the scope/review decisions are clearer. It is still a deliberately modest rehearsal. There is no evidence here that actual students find it fun, finish independently, or learn more quickly. The next useful check is one novice using their normal class setup, without instructor coaching, noting where they ask what to do next. Avoid expanding the task to compensate for setup friction.

## Evidence

- [Unfinished app](./evidence/2026-10-24-simplified-path/baseline.png)
- [Revised home](./evidence/2026-10-24-simplified-path/home-page.png)
- [Assignment page](./evidence/2026-10-24-simplified-path/assignment-page.png)
- [Help and duplicate preservation](./evidence/2026-10-24-simplified-path/checked-result.png)
- [Merged PR](./evidence/2026-10-24-simplified-path/merged-pr.png)
