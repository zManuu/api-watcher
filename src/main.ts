import './assets/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
import TooltipDirective from './directives/tooltip'
import SoundClickDirective from './directives/soundClick'
import SoundHoverDirective from './directives/soundHover'

library.add(fas)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('fa', FontAwesomeIcon)
app.use(TooltipDirective)
app.use(SoundClickDirective)
app.use(SoundHoverDirective)
app.mount('#app')
