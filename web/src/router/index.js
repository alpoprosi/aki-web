import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Platforms/HomeView.vue'
import PlatformPage from '../views/Platforms/PlatformPage.vue'

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
      path: '/platforms/:id',
      name: 'platform-page',
      component: PlatformPage,
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
