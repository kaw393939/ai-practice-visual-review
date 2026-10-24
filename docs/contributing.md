# Maintaining this website

This page is for contributors to the instructor's documentation site. It is not part of the student's first exercise.

Content lives in `docs/`; navigation lives in `docs/.vitepress/config.mts`. Use Node.js 22.13 or newer, run `npm ci`, then `npm run docs:dev` to preview locally.

Run `npm run docs:build` before publishing. Pull requests validate the build. Pushes to `main` in `kaw393939/218_spec` publish through [GitHub Actions](https://github.com/kaw393939/218_spec/actions/workflows/deploy.yml). Student copies run checks without deploying the instructor's site.

Keep the first learner path short. Place optional background in reference pages. Preserve links between features, issues, PRs, code, and checks.

## Prepare the first class session

Complete [the README setup](https://github.com/kaw393939/218_spec#readme) with students before the AI exercise. Confirm their own repository, Issues/Actions access, local app, matching Codex/VS Code folder, and ability to commit/push. Demonstrate one small cycle from a prepared workspace, then let students repeat it.

Keep installation and account recovery in setup time. During the exercise, focus discussion on the spec, the AI's plan, the actual diff, and the student's browser observations. The [UI trial findings](https://github.com/kaw393939/218_spec/blob/main/research/2026-10-23-student-ui-full-trial.md) explain these changes; they are observations from an agent trial, not evidence of student learning outcomes.

Keep `main` as the student starter: PRACTICE-001 must remain unfinished there. Practice solutions and research trials belong in separate repositories. Keep this repository enabled as a GitHub template; students copy only its default branch. No stage branches are needed for the first exercise.
