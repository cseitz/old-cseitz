import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from '@/components/Navigation.vue'

const app = createApp(App)
    .use(store).use(router)
    .component('navigation', Navigation)
app.mount('#app');

let currentURL = '';
setInterval(function () {
    const path = location.pathname + location.search;
    if (path != currentURL) {
        currentURL = path;
        window.parent.postMessage({ location: path }, '*')
    }
}, 10)