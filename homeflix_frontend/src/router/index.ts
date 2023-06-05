import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Playfilme from '@/views/Playfilme.vue'
const rotas : RouteRecordRaw []= [
    {
      path:'/',
      name: 'Home',
      component: Home
    },
    {
      path:'/reprod/:url',
      name:'reprodutor-filme',
      component: Playfilme
    }
    
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
  })

export default roteador;