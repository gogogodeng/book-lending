import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页',
        header: false,
      },
      component: () => import('../views/Home/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录',
        header: false,
      },
      component: () => import('../views/Login/index.vue'),
    },
  ],
});

export default router;
