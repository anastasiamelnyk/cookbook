import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '~views/Home';
import AddRecipe from '~views/AddRecipe';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'AddRecipe',
    component: AddRecipe,
  },
  // {
  //   path: '/:recipe',
  //   name: 'Recipe',
  //   component: Recipe
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
