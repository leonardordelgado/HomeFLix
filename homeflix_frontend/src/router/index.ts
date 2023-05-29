import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import AddFilmes from '@/views/AddFilme.vue'
const rotas : RouteRecordRaw []= [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
  })

export default roteador;