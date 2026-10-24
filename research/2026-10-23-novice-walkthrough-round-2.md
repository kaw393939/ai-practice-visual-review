# Simulated novice-student walkthrough: round 2

Date: October 23, 2026. Reviewed documentation: commit `e4e9291` (after first-pass fixes at `2a08bbb`). Compared with [round 1](./2026-10-23-novice-walkthrough.md).

**Finding:** the revised site supplies a concrete starting path and a bounded first task. The previously missing directions are now present and navigable. This is evidence of improved instructions, not proof of independent student success.

## Method and limits

Repeated the same fictional novice scenario: a 19-year-old with chat-AI familiarity but little experience with repositories, terminals, or PRs. Age and academic performance do not establish these skills; they are scenario assumptions. All quoted reactions below are invented probes, not actual participant quotations or the model's internal reasoning. The reviewer also authored the revisions.

Used the rendered local preview in a desktop browser, following Start here, Setup, Your first change, search, and the template. Separately rehearsed the small HTML change and saving behavior in a disposable clone. No student account was impersonated, no fork or issue was created, and no practice PR was submitted. Installing/signing into the three class tools and an independent ChatGPT-to-Codex exchange were not tested. This is a guided content walkthrough plus a technical rehearsal, not a completed student exercise or clean-machine study.

## Fixes from round 1

| Earlier obstacle | Change | Round-2 observation |
| --- | --- | --- |
| No named tool or setup route | Setup uses the required ChatGPT desktop, Codex, and VS Code. | Tool roles, version checks, fork/clone steps, terminal commands, and an app-ready signal are visible. |
| No supplied task | PRACTICE-001 adds a sentence below the optional Note field. | Start here names the task immediately; the practice page and local spec give its exact text and scope. |
| Closed instructor issue confused with student work | Added a filled-in issue example and ownership directions. | The page distinguishes feature IDs from issue numbers and directs both issue and PR to the student's fork. |
| No way to copy/use the template | Added a copyable Markdown block and a target filename. | The Copy Code button changed to Copied. The page names `docs/specs/my-project.md` and VS Code's New File action. |
| Setup search found nothing | Added an indexed Setup page and navigation entry. | Searching `setup` now lists Setup and its relevant sections. |
| Site maintenance mixed into first exercise | Moved maintenance instructions to a contributor page. | Keep the work visible now focuses on the spec/issue/change/check connections. |
| Optional theory could distract | Background stays separate; LLM is expanded on first use. | Start here explicitly says the background can wait. |

## Simulated student reactions during the repeat

- **Start here:** “I only have to add one sentence. I can follow Setup first.” The student no longer has to invent a feature or infer whether the whole app is assigned.
- **Tool roles:** “I discuss the plan in ChatGPT, then give that plan to Codex. VS Code shows the actual files.” The handoff is explicit; the instructions do not promise that separate chats share context automatically.
- **Setup:** “I know what the folder should contain and what the running page should say.” The app heading and file names provide concrete checkpoints.
- **Practice issue:** “I can use this title and these three fields in my own repository.” Copyable examples reduce the blank-page decision.
- **Plan:** “This tells me how much change is enough.” The second pass prompted one further clarification: an adequate plan adds help text, connects it to Note, preserves saving, and checks the result.
- **Template:** “I have a filename and a copy button.” The second pass also prompted naming VS Code's New File action explicitly.
- **PR:** “Both repositories should be mine, and the issue number comes from my issue.” This is clearer, but real account-dependent GitHub navigation remains untested.

## Technical rehearsal

Cloned the revised repository into a temporary local directory and created `practice-001-note-help`. Installed dependencies, made only the supplied help-text change and its `aria-describedby` association in that disposable copy, and ran the existing tests: all six passed.

Started that copy on port 3187 to avoid the user's existing app on port 3000. In the browser, the requested sentence appeared below Note before typing. Saving `https://example.com` with a short note showed Link saved and the saved entry. This checks that the practice task is feasible; it does not evaluate a novice's ability to perform it or prove assistive-technology behavior. The instructor's application source remains unchanged so students still have a task to do.

The fork workflow now runs validation without attempting instructor Pages deployment. The original deployment route remains restricted to `kaw393939/218_spec`.

Evidence: [setup search now returns results](./evidence/2026-10-23/setup-search-round-2.png), [isolated practice change and successful save](./evidence/2026-10-23/practice-rehearsal-round-2.png).

## Remaining points for real-student review

1. First-time installation, account access, Git identity, and push authentication may still need instructor help. The guide names these checkpoints and recovery routes; it does not eliminate them.
2. The first exercise includes several GitHub actions. Observe whether students can resume after the instructor demonstration without losing their place. Avoid adding more explanation unless a specific step causes trouble.
3. Test whether the ChatGPT-to-Codex handoff is clear in the actual installed class version and whether students select the same local folder in both tools.
4. Observe a real fork/issue/PR cycle, including enabling Issues and Actions, before claiming the instructions work independently end to end.

No additional features or grading requirements are proposed. The next useful evidence is a student trying this path with the actual class tools.
