<template>
  <figure id="codex-handoff" class="handoff" aria-label="What to carry from ChatGPT desktop into Codex">
    <div class="endpoint"><strong>ChatGPT desktop</strong><span>Discuss and agree</span></div>
    <div class="packet"><strong>Copy into Codex →</strong><ul><li>Your agreed plan</li><li>Your issue URL</li><li>Your app command + address</li></ul></div>
    <div class="endpoint"><strong>Codex</strong><span>Open your cloned folder</span><span>Read the spec and existing code</span></div>
  </figure>
</template>

<style scoped>
.handoff { display: grid; grid-template-columns: 1fr 1.35fr 1fr; gap: 12px; margin: 24px 0; align-items: stretch; }
.endpoint, .packet { display: flex; flex-direction: column; gap: 8px; border: 1px solid var(--vp-c-divider); border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.5; }
.endpoint { justify-content: center; background: var(--vp-c-bg-soft); }
.packet { background: var(--vp-c-brand-soft); }
.packet strong { color: var(--vp-c-brand-1); }
.packet ul { margin: 0; padding-left: 18px; }
.packet li { margin: 4px 0; }
@media (max-width: 720px) { .handoff { grid-template-columns: 1fr; } }
</style>
