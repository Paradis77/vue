import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'; // Assurez-vous que le chemin est correct

const router = createRouter({
  history: createWebHistory(),

  routes: [



    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    },
   
  ],
});

export default router;