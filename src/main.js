import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue';
import Repositories from './components/Repositories.vue';

import './assets/main.css'
import './assets/tailwind.css'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
         path: '/',
         name: 'HomePage',
         component: HomePage
      },
      {
         path: '/repositories',
         name: 'Repositories',
         component: Repositories
      }
   ]
})

createApp(App).use(router).mount('#app')
