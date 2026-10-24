import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Working with AI',
  description: 'A short guided exercise in working with AI using Markdown specs, GitHub issues, and small changes.',
  lang: 'en-US',
  base: '/218_spec/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Start here', link: 'https://github.com/kaw393939/218_spec#readme' },
      { text: 'Worked example', link: '/example' },
      { text: 'Background', link: '/background' },
      { text: 'GitHub', link: 'https://github.com/kaw393939/218_spec' }
    ],
    sidebar: [
      { text: 'Practice', items: [
        { text: 'README: get ready', link: 'https://github.com/kaw393939/218_spec#readme' },
        { text: 'Your first change', link: '/practice' },
        { text: 'Setup help', link: '/setup' },
        { text: 'Worked example', link: '/example' },
        { text: 'Keep the work visible', link: '/review/' }
      ] },
      { text: 'Reference', items: [
        { text: 'Background and reading', link: '/background' },
        { text: 'Practice spec', link: '/specs/practice' },
        { text: 'Short spec template', link: '/specs/template' },
        { text: 'Personal link library', link: '/specs/link-library' },
        { text: 'Project specs', link: '/specs/' },
        { text: 'Maintaining this website', link: '/contributing' }
      ] }
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/kaw393939/218_spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/218_spec' }],
    footer: { message: 'Describe. Build. Check. · Practice working with AI.' }
  }
})
