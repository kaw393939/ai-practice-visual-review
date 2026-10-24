<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ compact?: boolean }>()
</script>

<template>
  <div id="target-result" class="comparison" :class="{ compact }" aria-label="The change you will make">
    <figure>
      <figcaption><strong>Before · your starter</strong><span>The note limit is not explained.</span></figcaption>
      <a :href="withBase('/images/note-before.png')" aria-label="Open full-size screenshot of the unfinished app"><img :src="withBase('/images/note-before.png')" alt="Starter app with an optional Note box and no help below it." width="1280" height="720" /></a>
    </figure>
    <figure>
      <figcaption><strong>After · your goal</strong><span>Help appears directly below Note.</span></figcaption>
      <a :href="withBase('/images/note-after.png')" aria-label="Open full-size screenshot of the completed example"><img :src="withBase('/images/note-after.png')" alt="Completed example showing Add a short note (up to 4,000 characters). below the Note box." width="1280" height="720" /></a>
    </figure>
  </div>
  <p class="caption">Real app screenshots. Select either image to enlarge it. You will add the help text; the rest of the app already works.</p>
</template>

<style scoped>
.comparison { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
figure { margin: 0; border: 1px solid var(--vp-c-divider); border-radius: 12px; overflow: hidden; background: var(--vp-c-bg-soft); }
figcaption { display: flex; flex-direction: column; gap: 4px; padding: 14px 16px; font-size: 14px; line-height: 1.5; }
figcaption strong { color: var(--vp-c-brand-1); }
.comparison a { display: block; overflow: hidden; aspect-ratio: 1.4; }
.comparison img { width: 200%; max-width: none; height: auto; display: block; transform: translate(-25%, -29%); }
.compact { grid-template-columns: 1fr; }
.compact a { aspect-ratio: 3.2; }
.compact img { transform: translate(-25%, -50%); }
.caption { font-size: 13px; color: var(--vp-c-text-2); }
@media (max-width: 720px) { .comparison { grid-template-columns: 1fr; } }
</style>
