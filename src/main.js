import { createApp } from 'vue'
import App from './App.vue'

import {createRouter,createWebHashHistory} from 'vue-router';

import HomePage from './components/HomePage.vue';
import Restaurant from './components/Restaurant.vue'



const routes = [
    { path: '/', component: HomePage },
    { name:'Restaurant',path: '/Restaurant/:name', component: Restaurant },
   
  ]

  
const router =createRouter({
history:createWebHashHistory(),
routes,
});

const VueApp=createApp(App)

VueApp.use(router)

VueApp.mount('#app');
