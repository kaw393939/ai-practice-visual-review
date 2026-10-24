import DefaultTheme from 'vitepress/theme'
import WorkflowMap from './components/WorkflowMap.vue'
import NoteComparison from './components/NoteComparison.vue'
import HandoffMap from './components/HandoffMap.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('WorkflowMap', WorkflowMap)
    app.component('NoteComparison', NoteComparison)
    app.component('HandoffMap', HandoffMap)
  }
}
