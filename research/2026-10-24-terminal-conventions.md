# Aligning the exercise with existing terminal conventions

The instructor clarified that students use terminal Git, not VS Code's Command Palette or Source Control workflow.

Reviewed representative recent repositories through their GitHub README/setup files:

- [IS218 Act 1 setup](https://github.com/kaw393939/is218-act-1-operate-deliver/blob/main/docs/setup.md) and [GitHub lesson](https://github.com/kaw393939/is218-act-1-operate-deliver/blob/main/lessons/02-github.md): terminal clone, folder/remote checks, diff, explicit staging, commit, and push.
- [IS218 calculator setup](https://github.com/kaw393939/is218-oop-calculator/blob/main/docs/setup.md): distinguish terminal commands from editor contents and keep the working folder clear.
- [IS117 setup](https://github.com/kaw393939/is117-basic-web-server/blob/main/docs/setup.md): open the system terminal, use git clone/cd, explain expected output, and use npm.cmd for PowerShell script-policy errors.
- [IS373 hosting quick start](https://github.com/kaw393939/373_hosting#quick-start) and [application delivery quick start](https://github.com/kaw393939/is373_ci_cd#quick-start-local-development): copyable git clone/cd blocks followed by project commands.
- Also reviewed the [white T-shirt README](https://github.com/kaw393939/is_117_white_t-shirt); it describes the book/workflow rather than providing a clone quick start.

Updated this project's README, setup, practice instructions, start page, and AGENTS.md. Git operations now use terminal commands; VS Code is for reading/editing files. Retained the GitHub template step so students own their issue/PR destination. Added staged-diff review before committing and a brief pager exit instruction. Historical UI trial reports remain records of what was actually tested at that time.

Validation: documentation build and whitespace checks passed. This revision does not claim another full student walkthrough.
