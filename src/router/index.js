import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/views/Welcome/LoginPage.vue";
import RegisterPage from "@/views/Welcome/RegisterPage.vue";
import HomeView from "@/views/Home/HomeView.vue";
import NewTweetView from "@/views/Home/NewTweetView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',

      component: LoginPage
    },
    {
      path: '/register',

      component: RegisterPage
    },
    {
      path: '/Home',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/newTweet',
      name: 'NewTweet',
      component: NewTweetView
    },

  ]
})

export default router
