import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import Table from '../pages/Table.vue';
import Products from'../pages/Products.vue';

const router = createRouter({
  history:createWebHistory(),  // 路由器工作模式
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/table',
      component:Table
    },
    {
      path:'/products',
      component:Products
    }
  ]
})
export default router 