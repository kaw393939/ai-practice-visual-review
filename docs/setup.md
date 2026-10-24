---
prev: false
next: false
---
# Setup help

**The assignment starts in [the README](https://github.com/kaw393939/218_spec#readme).** Follow its steps once. This page is help when something fails; you do not need to repeat setup here.

## Missing a tool?

Use your class installations of [ChatGPT desktop](https://learn.chatgpt.com/docs/app), [VS Code](https://code.visualstudio.com/), [Git](https://git-scm.com/install/), and [Node.js 24](https://nodejs.org/en/download), with your existing GitHub SSH setup. Sign in to the apps with your own accounts. Codex should work locally in the cloned project folder; [local project help](https://learn.chatgpt.com/docs/projects#use-local-projects-for-folders-and-codebases).

In your class terminal, these should each print a version:

```sh
git --version
node --version
npm --version
```

Node.js 22.13 or newer works. If a command is missing after installation, reopen the terminal. Ask your instructor if tool access is unavailable.

## Common fixes

- **`code .` is not found:** in VS Code, use **File → Open Folder** and select your cloned folder. No Command Palette setup is needed.
- **PowerShell blocks npm scripts:** use `npm.cmd` wherever the instructions say `npm`.
- **Port 3000 is occupied (`EADDRINUSE`):** stop your earlier app with Ctrl+C if you recognize it. Otherwise leave it alone and use port 3001 below.
- **The page still shows old HTML:** in this app's running terminal, press Ctrl+C, rerun its start command, then refresh the matching browser address.
- **npm prints warnings:** look for whether the command completed. A warning alone is not a failed setup.
- **Git name/email is blank:** ask Codex or your instructor to help configure your own Git identity.
- **Clone or push says `Permission denied (publickey)`:** check that the repository's SSH address matches your copy, then ask your instructor to help with your existing class SSH setup. Do not force-push or replace your SSH keys as a workaround.
- **Codex cannot find the files:** check that its local project and VS Code both use the folder printed by `pwd` in your project terminal.
- **Issues or build checks are missing:** open your repository's Issues/Actions tabs. Enable workflows if GitHub asks; ask your instructor if unavailable.

### Another port

macOS / Linux:

```sh
PORT=3001 npm start
```

Windows PowerShell:

```powershell
$env:PORT=3001
npm start
```

Open the printed address, normally **http://127.0.0.1:3001**. Keep this command/address for later restarts. Stop your app with Ctrl+C when finished.

## Ask AI for help

Paste the failing command and error into Codex, leaving out passwords and tokens:

> I am setting up the exercise. Explain this error and the smallest next step for my operating system. Do not edit the app or stop other programs. Tell me what success looks like.

Once resolved, **return to the README step where you stopped**. If setup is complete, continue to [Your first change](./practice).
