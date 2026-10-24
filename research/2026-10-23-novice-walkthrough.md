# Simulated novice-student walkthrough

Date: October 23, 2026. Site: https://kaw393939.github.io/218_spec/. Reviewed version: `8be6fd0dcbe79c3a61dae5e9d71877914d6656c3`.

**Main finding:** the site explains the working cycle clearly, but assumes the learner already has a project open in an AI coding tool. The most useful next improvement is a concrete first action and a prepared practice change, rather than more conceptual content.

## What this review represents

This is an AI role-play and browser walkthrough, not a study involving actual students. The first-person remarks below are fictional usability probes, not participant quotations or the model's internal reasoning. Observations describe what was actually present on the site; predictions about confusion remain hypotheses.

Scenario: a 19-year-old student who uses chat AI but has little experience connecting it to project files. They can follow short instructions but are unsure about terminals, repositories, branches, and pull requests. They skim when uncertain and prefer an example to an open-ended choice. These are explicit scenario assumptions, not claims about typical students, age, intelligence, or academic performance.

The reviewer helped write the site and already knows its structure. That limits the independence of this assessment. No completion rates, timing estimates, or generalizations about real learners are inferred.

## Task and boundaries

Task: use the site to understand the process and begin one small AI-assisted change.

Started at the supplied link-library page, followed Start here, the worked example, its GitHub issue, the template, workflow guidance, and background. Also checked the homepage and searched for setup help. Used the published site in a desktop browser. Did not use repository source to fill gaps in the student instructions during the walkthrough.

Read the existing issue without signing in or creating anything. Did not run installation commands, create a branch, submit an issue, or change the application. The local workspace is already prepared, so successfully running it here would not demonstrate that a new student could set it up. Mobile use, screen-reader use, and a clean-machine setup were not tested.

## Walkthrough notes

All quoted student reactions in this table are simulated.

| Stop / action | Observed on the site | Simulated student reaction | Likely implication |
| --- | --- | --- | --- |
| Open the supplied [link-library page](https://kaw393939.github.io/218_spec/specs/link-library.html). | Five features, technical choices, current and future behavior; a walkthrough link and Start here navigation are available. | “Am I making this whole app? I thought my class was doing a calculator.” | Deep links can introduce the reference project before the exercise's scope. The clarification exists on Start here, but the student must find it. |
| Follow [Start here](https://kaw393939.github.io/218_spec/start.html). | A short purpose and six steps. The tool is described as the AI coding tool available in class. | “I get the steps. Which app do I open, and how does it get my files?” | The process is understandable; the starting environment is unspecified. This may be fine after a demonstration, but does not support independent entry. |
| Read the suggested first prompt. | It asks AI to read this spec and relevant files and help choose a change. | “Do I paste the website link into ChatGPT? What files can it see?” | A reusable prompt still needs a named destination and a statement of what must already be open. |
| Follow the [worked example](https://kaw393939.github.io/218_spec/example.html). | Three actions are paired with expected results, including invalid and duplicate URLs. | “Okay, I can try these and see whether they work.” | This is the strongest instructional element: concrete actions make checking approachable. |
| Open Issue #1 from the example. | It opens a separate GitHub tab. The issue is closed, its checklist is complete, and it links to the merged PR. GitHub shows Sign in / Sign up in this browser. | “This is already done. Do I copy it? Where does my issue go?” | The historical example needs a short bridge to the learner's own task and repository. Signed-out viewing worked; issue creation was not attempted. |
| Reach the example's run instructions. | Node.js version, `npm ci`, `npm start`, and localhost are supplied. No clone/open-folder steps are given there. | “What is the repository terminal? Where do I type this?” | First likely execution stop for an unprepared learner. Commands alone do not establish the working directory or tool setup. |
| Open the [spec template](https://kaw393939.github.io/218_spec/specs/template.html). | It says Copy this page and displays a rendered document with tables. There is an Edit this page on GitHub link, but no dedicated template-copy control or linked raw Markdown in the page body. | “Copy it into what? Do I replace PROJECT-001 myself?” | The template is short, but its use requires an unstated file destination and one naming example. |
| Open [Keep the work visible](https://kaw393939.github.io/218_spec/review/). | Brief definitions explain issues, branches, and PRs. It then includes instructions for maintaining this docs website. | “The definitions help. Am I also supposed to publish this website?” | Separate instructor/site maintenance from the first learner path. A completed small issue example would help more than additional terminology. |
| Read [Background](https://kaw393939.github.io/218_spec/background.html). | Short sections explain specs, collaboration, context, and tokens; sources are linked. Further reading is marked optional, but LLM is not expanded. | “I see why we're doing this. Can I come back to tokens later?” | Keep this optional. Expand LLM once and prioritize practical advice; no extra theory is needed to begin. |
| Search for `setup`. | The search dialog says **No results for "setup"**. | “I still don't know how to get started on my computer.” | No discoverable recovery path for this query. This demonstrates a content/findability gap, not a malfunction of search. |
| Visit the [homepage](https://kaw393939.github.io/218_spec/). | The main action is Start the exercise; the slogan is Describe. Build. Check. | “This is a clear place to start.” | The homepage works well as the shared entry link. |

Evidence: [setup search screenshot](./evidence/2026-10-23/setup-search.png). The screenshot documents the search state, not an actual student's response.

## Outcome of this simulated attempt

The walkthrough supports understanding the basic sequence and locating a completed example. It does not establish successful independent execution. The scenario reaches the transition from reading to doing without a named workspace, a supplied starter task, or a clear place to create the student's files and issue.

The site explicitly calls for watching an instructor demonstration first. With that support, some gaps may disappear. The unresolved question is how much of that demonstration students can recover from the site later.

## Keep these strengths

- The goal is practice with one small change, with no grading machinery.
- The homepage offers a clear starting action.
- The example's action/result table makes checking concrete.
- Sample prompts and the specific empty-field feedback example give usable language.
- Working and planned features are distinguished, and code/issue links make the work inspectable.
- Background material and outside reading are separated from the main exercise.

## Small changes to consider, in order

1. **Add a short “Before you begin” block.** Name the class tool, the exact starter repository, whether to fork it, how to open the folder, and the signal that setup worked. Link a single setup guide for details. Avoid offering several tool choices in the first path.
2. **Give the first cycle a named practice task.** State the current behavior, requested change, and one result to try. Distinguish instructor demonstration, already-completed example, and student action. A short instructor-provided task avoids requiring a novice to invent a feature immediately.
3. **Show one filled-in issue and its destination.** Include its title, spec link, and two expected outcomes. Explain that LINK-001 is a feature ID and #1 is a repository's issue number. Explain where the student's issue belongs; do not direct students to edit the instructor's closed issue.
4. **Make copying concrete.** Link raw Markdown or provide a copyable starter block, name its file, and say where it goes. Put any remaining term definitions beside the first action that needs them.
5. **Keep the first path focused.** Share Start here as the entry URL. Move website-maintenance directions to contributor reference. Keep tokens and industry reading optional. Expand “large language model (LLM)” on first use.

These are recommendations for later review; this walkthrough did not change student-facing pages. The proposed setup details require an instructor choice of tool and repository, rather than an invented default.

## A brief follow-up with real students

Ask a few students to start from the actual link they will receive and begin the exercise on their own computers. Invite them to say what they expect before acting; avoid explaining the next step immediately. Note where they need help and which instruction they were following. Check particularly whether setup, choosing the task, and creating an issue in the correct repository are still obstacles after the class demonstration. Use that evidence to revise this simulated assessment.
