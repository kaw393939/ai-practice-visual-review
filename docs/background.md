# Background and further reading

A large language model (LLM) generates responses from instructions and available context. A coding tool can also let it read files, edit code, and run commands. Useful collaboration means giving it a clear task and checking what it produces.

## Why write a short spec?

A spec is a shared description of the intended result. A few examples make it easier to discuss an idea before changing code. Update it when you make a new decision.

This resembles approaches used in current AI development tools. GitHub's Spec Kit carries a specification through planning, tasks, implementation, and checking the result. GitHub's coding-agent guidance recommends clear, bounded tasks with explicit expected outcomes. These are examples of industry practice, not proof that one workflow always succeeds. Our exercise uses the common ideas with ordinary Markdown and GitHub. [Spec Kit](https://github.github.com/spec-kit/), [GitHub guidance](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results)

## You and the AI

You bring the purpose, preferences, and decisions. AI can help clarify questions, suggest options, explain files, and implement changes. The running application and its checks give you something concrete to inspect together.

Ask for explanations and alternatives when useful. Treat confident claims as claims to check. Read the plan, try the result, and give specific feedback.

## Context and tokens

**Context** is the information available for the current response: instructions, relevant conversation, files, and tool results. A context window has a finite capacity. Long or cluttered context can also make relevant details harder to use; there is no universal percentage at which errors begin. Keep current decisions in the spec and retrieve relevant files when needed. [Context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents)

**Tokens** are units used to process and generate content. Input tokens cover supplied material; visible output includes explanations and code. Some models also use internal reasoning tokens. In OpenAI's API, reasoning tokens count toward output usage and are billed accordingly; a short visible answer can still involve substantial computation. [OpenAI reasoning documentation](https://developers.openai.com/api/docs/guides/reasoning)

Planning also uses tokens. It may save work when an early clarification prevents a mistaken implementation and repeated repairs. Prose is not automatically cheaper than code, and savings are not guaranteed. Aim for a useful result you understand.

When starting a new chat, provide the spec, current task, and a short note about what works and what remains. Let the tool inspect current files rather than relying on an old conversation alone.

## Read more when useful

- [GitHub: get better results from a coding agent](https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results) — practical advice on task scope, context, and review.
- [GitHub Spec Kit](https://github.github.com/spec-kit/) — a more structured version of the spec-to-implementation approach. Installation is optional; the exercise does not depend on it.
- [Anthropic: effective context engineering](https://www.anthropic.com/research/effective-context-engineering-for-ai-agents) — why choosing and maintaining relevant context matters.
- [OpenAI: reasoning models](https://developers.openai.com/api/docs/guides/reasoning) — optional technical detail on reasoning tokens and context limits.
