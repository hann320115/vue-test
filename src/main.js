import { createApp } from 'vue'
import './scss/all.scss'
import Navbar from './components/Navbar.vue';
import SideNav from './components/SideNav.vue';
import App from './App.vue'
import router from './router';
import { RouterLink } from 'vue-router';
import { createPinia } from 'pinia';

const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.component('router-link', RouterLink);
app.component('Navbar', Navbar);
app.component('SideNav', SideNav);
app.mount('#app')