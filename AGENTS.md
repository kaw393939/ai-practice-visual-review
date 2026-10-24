# Working in this repository

This is a small teaching project about collaborating with AI through ordinary Markdown, focused issues, and reviewable changes.

- Students use ChatGPT desktop, Codex, and VS Code. Explain discussion in ChatGPT, explicit plan handoff to Codex in the same local folder, and file inspection in VS Code. Use terminal Git commands for cloning, branches, diffs, staging, commits, and pushes; do not teach the VS Code Command Palette or Source Control workflow. Do not substitute Copilot or Codespaces.
- Keep student instructions short, concrete, and accessible. Emphasize practicing the process; avoid adding rubrics, token quotas, or extra process machinery.
- The link library is the worked example. IS117 uses a T-shirt ecommerce site, IS218 a four-function web calculator, and IS373 investigates an existing Docker/CI/CD deployment with a real domain. These course projects are not implemented here.
- Read the relevant spec and existing files before editing. Discuss unresolved behavior before implementing it. Keep each change within its agreed scope.
- Preserve feature IDs and links between specs, issues, PRs, source, and checks. Distinguish implemented behavior from plans. Do not invent evidence or code links.
- Documentation lives in `docs/`; navigation is in `docs/.vitepress/config.mts`.
- Build docs with `npm run docs:build`. Run `npm test` for application changes; `npm start` runs the local app.
- GitHub Pages serves docs only. The app uses Node.js and SQLite. LINK-001 saves links; page reading and AI processing remain planned.
- AI-assisted coding does not require adding AI to the application. Keep secrets and local SQLite data out of Git.

- Student entry: create a repository from this GitHub template, then clone their own copy. Keep instructor `main` as the unfinished PRACTICE-001 starter; put completed practice trials in separate repositories.
- Students already have GitHub SSH access configured in class. Use SSH clone URLs (`git@github.com:USERNAME/REPOSITORY.git`) and terminal Git in student instructions and trials.
