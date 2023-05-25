import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Platforms/HomeView.vue'
import Login from '../views/login/LoginForm.vue'
import Register from '../views/login/RegisterForm.vue'

// import { useAuthStore, useAlertStore } from '../stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    }
  ]
})

// router.beforeEach(async (to) => {
//   const publicPages = ['/'];
//   const authRequired = !publicPages.includes(to.path);
//   const authStore = {} // useAuthStore();

//   if (authRequired && !authStore.user) {
//     authStore.returnUrl = to.fullPath;
//     return '/';
//   }
// });
export default router
