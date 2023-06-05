<template>
        <video  controls  autoplay="true" id="myvideo" @loadeddata="notifica">
            <source :src="`${url}`" type="video/mp4" >
            
        </video>
  </template>
<script lang="ts">
import { defineComponent } from "vue";


import useNotificador from '@/hooks/notificador'
import { TipoNotificacao } from "@/interfaces/INotificacao";



export default defineComponent({
    name: "reprodutor-filme",
    data() {
        return {
            url: this.$route.params.url,
            faixaetaria: this.$route.query.faixaetaria
        }
    },
    created() {
        this.url = this.$route.params.url
        this.faixaetaria = this.$route.query.faixaetaria
    },
    methods:{
        notifica(){
            
            this.notificar(TipoNotificacao.ATENCAO, `Faixa Indicativa ${this.faixaetaria} anos`,`Esta titulo e contra indicado para menores de ${this.faixaetaria} anos`)
        }
        
    },
    
    setup(){
        const { notificar } = useNotificador()
        
        return{
            notificar
        }
    }
    
})
</script>

<style scoped>
#myvideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height:100vh;
  background-size: 100vh;
  background-color: black;
  z-index: 2;
}

source{
    background: 100px;
}
</style>