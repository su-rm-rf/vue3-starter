import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "~/components/Dashboard.vue";
import TodoList from '~/components/todo/TodoList.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/todo',
    component: TodoList,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router