# Critical terminal-first assignment trial

Date: October 24, 2026. Started from the README/site revision `6670390`.

This is an agent-enacted novice walkthrough on the instructor's computer. Interface outcomes are observations; boredom, motivation, and likely student interpretations are hypotheses, not findings from human participants.

## Result and limits

Created [kaw393939/ai-practice](https://github.com/kaw393939/ai-practice) using the template UI with the exact repository name in the README. Cloned it through terminal commands into `/Users/kwilliams/ai-practice`; origin identifies the student copy. Created [practice issue #1](https://github.com/kaw393939/ai-practice/issues/1), branch `practice-001-note-help`, and [PR #2](https://github.com/kaw393939/ai-practice/pull/2). Actual Codex produced the two-file change. Browser checks, all six automated tests, and the docs build passed.

GitHub CI build passed (26 seconds); deployment skipped as expected. PR #2 was squash-merged as `d176205`, and issue #1 closed automatically. The public PR page visibly confirmed both outcomes. Kept the practice branch so the spec's source link remains valid; stopped only this trial's server. No completed learner solution was copied into the instructor starter.

This was a partial enactment of the student interface journey, followed by assisted completion. Computer Use exercised repository creation, terminal clone/setup/branch creation, issue creation, the actual Codex extension, and browser checks. Native window input subsequently stopped working. Direct terminal tools recovered the verified port-3001 process, reran checks, staged/reviewed/committed/pushed, and completed the PR. A direct file edit recorded the observed browser results in the spec. The separate ChatGPT desktop conversation/handoff and final native terminal/PR interactions remain unvalidated. These substitutions are not evidence that those student steps are easy.

## What actually happened

| Step | Observation |
| --- | --- |
| Start from the README. | The template-copy action and git clone block were clear. |
| Create the copy in Safari. | Public copy created with Include all branches off. No instructor-account fork workaround was necessary. |
| Run git clone, cd, pwd, and git remote -v in a terminal. | Clone completed; the terminal was in the new student folder and origin was correct. Used VS Code's integrated terminal because direct control of Terminal.app had previously been rejected. No Git GUI was used. |
| Open the cloned folder in VS Code. | Used File → Open and the path from pwd. The README names the action but gives no concrete way to do it. |
| Follow Setup. | The page repeats the copy/clone steps already completed in the README. Version checks and npm ci succeeded; npm displayed install-script warnings. |
| Run npm start. | Port 3000 was occupied. The documented PORT=3001 npm start recovery worked, and the browser showed the empty, unfinished starter without help text. |
| Enter the readiness prompt in the actual Codex extension. | It identified PRACTICE-001, app/public/index.html, the scope limits, and the need for a plan. It made no edit. The separate ChatGPT desktop handoff could not be exercised through Computer Use. |
| Run Git identity and dry-run push checks. | The working folder was correct, identity values were present, and Git returned Everything up-to-date. |
| Ask for a plan and ask why this workflow is needed for one sentence. | The AI proposed the expected scoped change and explained that the small task rehearses scope, review, and a traceable result. It retained the supplied port-3001 context. No code was changed. |
| Create the supplied issue. | Copied the title, feature/spec reference, scope, and three examples into GitHub's form. Issue #1 opened successfully. |
| Return to the terminal for the branch. | Computer Use could read the window but input did not appear at its prompt; a coordinate click reported no available window. Did not execute a command without seeing it in the terminal. Asked the user to bring the window and terminal onto the active desktop. This is an automation limitation, not a student-facing Git failure. |
| Recover the branch terminal. | A dedicated VS Code terminal window accepted pwd and terminal Git. Created practice-001-note-help successfully. No Command Palette or Git GUI was used. |
| Approve the plan in actual Codex. | It edited only the HTML and practice spec, retained maxlength=4000, added the exact help and aria-describedby, and linked the real issue/source. It reported six tests, docs build, and an additional HTML check passed; it left browser checking pending. |
| Restart and inspect the app. | Native terminal input stopped working again; even coordinate focus failed. Direct tooling verified that the port-3001 listener belonged to this clone before stopping/restarting it. The documented need to restart was correct; the inability to send Ctrl+C was a control limitation. Port 3000 was left alone. |
| Try the form in the browser. | Exact help appeared below Note before typing. Saved https://example.com with an original note, then resubmitted with another note. The existing entry retained the original note and explicitly explained this. |
| Inspect and publish the change. | Direct tooling reviewed the staged two-file diff and committed 36d2b70. Public GitHub Files changed visibly showed only the expected HTML and tracking row. Final Git/PR steps used helpers, not native student UI. |

## Critical findings

### The first useful result comes after too much preparation

The visible app is small and approachable. The path to changing it involves repository creation, cloning, opening a matching editor folder, versions, npm installation, runtime recovery, another AI workspace, a readiness prompt, identity/access checks, a plan, and an issue. Some of this is legitimate one-time preparation, but the exercise page should begin from an already-working workspace. Adding explanatory paragraphs does not remove those demands.

**Likely learner reaction:** the promised small change feels much smaller than the administrative work surrounding it. This is a motivation risk, not an observed completion rate or time measurement.

### The task is safe, but offers little ownership

The exact sentence, exact field, exact issue contents, and exact AI prompts leave little for the learner to decide. This supports a first rehearsal, but can feel like copying a script. The AI's explanation of why the workflow matters was useful; the instructions should establish that purpose before the issue form.

Keep a very small scope, but consider an authentic payoff: use a link the student actually wants to save, show the before/after result early, and give them one bounded decision to discuss with AI. Avoid adding points, badges, or extra deliverables as substitutes for a useful task.

### The route repeats itself

The README, Start here, Setup, readiness checklist, and Your first change overlap. A student following the README has already completed creation and cloning before Setup repeats them. A clear first-time route and one returning-student route would reduce guessing without adding more pages.

### The first-time Setup link lands halfway down the page

From the home page, clicked Start the exercise, then the body Setup link on Start here. It landed at `setup.html#ready-to-begin`, after the copy/clone/start instructions. This is appropriate for a prepared workspace, but the link is introduced as the first setup action. A new learner may reach a checklist of things they have not yet learned to do.

### Template means two different things

GitHub's Use this template creates the project copy. The home page's Use the template link opens the Markdown spec template. Both are valid, but the same label can misdirect a beginner. The home page is otherwise visually calm, with a clear primary button and restrained navigation.

### The issue step duplicates supplied text

Copying four chunks from the exercise into multiple form fields makes the task visible but supplies little opportunity to judge requirements. Letting AI draft a short issue from the agreed spec, then asking the student to check its scope and examples, may better exercise the intended collaboration. This is a recommendation to test, not evidence of improved engagement.

### The useful AI exchange happens too late

The short plan was understandable. The implementation stayed in scope, and a two-file diff made the result explainable. Asking why a sentence needs an issue/branch/PR produced a useful answer: the sentence is a low-risk rehearsal for agreeing scope, inspecting changes, and keeping evidence. Put that purpose near the first task, before administrative steps. The later browser result and diff are the most concrete parts of the exercise.

### Checking is valuable, but students need to know what a pass means

The six tests cover existing saving behavior. They do not prove that this new sentence is visible in the right place. The current instructions correctly require a browser check and actual results in the spec. Keep that distinction prominent and concise: “Tests passed; now show yourself that the requested change actually appears.” The duplicate check has an observable payoff because the app explicitly preserves and explains the original note.

### Avoid solving engagement by expanding the assignment

Do not add more tools, required artifacts, or features to make it interesting. Keep the first change small. Improve the sequence: see the app, understand the annoyance, agree a plan, inspect a visible result, and then recognize what the issue/diff/PR record. A student-selected useful link is a low-cost way to make the trial personal. A later course-specific task can provide more ownership; the first rehearsal need not become an entire product project.

## Recommended next revision, in order

1. Fix the first-time Setup link and distinguish “Create your project copy” from “Spec template.”
2. Give README users one linear route; omit repeated clone steps once their folder is ready. Provide a concrete terminal-friendly way to open that folder in VS Code, with a short File → Open Folder fallback if `code .` is unavailable.
3. State the reason for the tiny task in one sentence before the issue: practice agreeing, checking, and keeping a change made with AI.
4. Let AI draft the small issue from the supplied spec; have the learner check the scope/examples instead of copying four blocks. Keep the issue visible and linked.
5. Show a before/after example early and use a link the student wants to keep. Retain the exact beginner task for the first rehearsal; offer one bounded decision in the next course-specific exercise.

These are proposed changes for the next iteration, not edits silently made during this trial. The instructor starter remains unfinished. Test the revised route with a real novice before claiming it is engaging or easy.

## Evidence

- [Unfinished baseline](./evidence/2026-10-24-terminal-assignment/baseline.png)
- [Home page](./evidence/2026-10-24-terminal-assignment/home-page.png)
- [First-time Setup link landing](./evidence/2026-10-24-terminal-assignment/first-setup-link-landing.png)
- [Help text and duplicate preservation](./evidence/2026-10-24-terminal-assignment/after-and-duplicate.png)
- [Merged PR and linked closed issue](./evidence/2026-10-24-terminal-assignment/merged-pr.png)

No human participant was observed. Think-aloud interpretations above are design hypotheses; successful completion by an agent with tooling assistance does not establish novice completion time, motivation, or independence.
