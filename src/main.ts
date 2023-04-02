import { createApp } from 'vue'
import App from './App.vue'
import './setupi18n'
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

import './assets/main.css'

const app = createApp(App)
app.use(I18NextVue, { i18next })
app.mount('#app')
