import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './router'
import VueFullscreen from 'vue-fullscreen'
import { key, store } from './store'
createApp(App)
    .use(roteador)
    .use(store, key)
    .use(VueFullscreen)
    .mount('#app')
