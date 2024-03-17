import '@fontsource-variable/roboto-mono';
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$goldenOakUrl = 'https://goldenoak.vanderc.at'

app.use(createPinia())
app.use(router)

app.mount('#app')
