<script setup lang="ts">
const steps = [
  ['Plan', 'ChatGPT desktop', 'Agree what should change.'],
  ['Record', 'GitHub issue', 'Review the plan and examples.'],
  ['Build', 'Codex', 'Make one change on a branch.'],
  ['Check', 'Browser + VS Code', 'Try it and inspect the diff.'],
  ['Keep', 'Git + GitHub PR', 'Save the reviewed change.']
]
</script>

<template>
  <nav id="assignment-cycle" class="workflow" aria-label="The five-step assignment cycle">
    <ol>
      <li v-for="(step, index) in steps" :key="step[0]">
        <span class="step-number">{{ index + 1 }}</span>
        <strong>{{ step[0] }}</strong>
        <span class="tool">{{ step[1] }}</span>
        <span>{{ step[2] }}</span>
      </li>
    </ol>
    <p>If a check fails, give AI specific feedback, revise, and check again.</p>
  </nav>
</template>

<style scoped>
.workflow { margin: 24px 0; }
.workflow ol { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; list-style: none; padding: 0; margin: 0; }
.workflow li { position: relative; display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 16px 12px; border: 1px solid var(--vp-c-divider); border-radius: 12px; background: var(--vp-c-bg-soft); font-size: 13px; line-height: 1.5; }
.workflow li:not(:last-child)::after { content: '→'; position: absolute; right: -12px; top: 30px; z-index: 1; color: var(--vp-c-brand-1); }
.step-number { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 700; }
.workflow strong { font-size: 17px; }
.tool { font-weight: 600; color: var(--vp-c-brand-1); }
.workflow p { margin: 12px 0 0; font-size: 14px; color: var(--vp-c-text-2); }
@media (max-width: 720px) {
  .workflow ol { grid-template-columns: 1fr; }
  .workflow li { padding: 12px 16px; display: grid; grid-template-columns: 28px 1fr; gap: 2px 12px; }
  .step-number { grid-row: span 3; }
  .workflow li:not(:last-child)::after { content: '↓'; top: auto; bottom: -16px; left: 21px; right: auto; }
}
</style>
