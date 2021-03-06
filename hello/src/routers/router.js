import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import Page1 from '../components/pages/Page1.vue'
import Page2 from '../components/pages/Page2.vue'

Vue.use(VueRouter) // 使用 vue-router

const routes = [
  //{path,component,name,children}
  {
    path: '/home',
    component: Home,
    name: 'Home',
    children: [
      { path: 'page1', component: Page1, name: 'Page1' },
      { path: 'page2', component: Page2, name: 'Page2' },
    ],
  },
  // 通配符 * 会匹配所有路径
  // 路由 { path: '*' } 通常用于客户端 404 错误
  // 含有通配符的路由应该放在最后
  { path: '*', redirect: { name: 'Home' } },
]

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes,
})
