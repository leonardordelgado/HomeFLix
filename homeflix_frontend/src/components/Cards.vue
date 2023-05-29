<template>
    <div class="cointainer-card">
        <div class="card-filmes" v-for="filme in filmes" :key="filme._id">
            <div class="face face1">
                <div class="content">
                    <video controls poster="@/assets/imagem_post_desenvolvimento_web.jpg" preload="auto">
                        <source :src="`${filme.url}`"
                            type="video/mp4">
                    </video>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <div class="title-Card">
                        <p class="text-cards">
                       {{ filme.titulo }}
                        </p>
                    </div>
                    <div class="descricao-card">
                        <p>
                            {{ filme.descricao }}
                        </p>
                    </div>
                    <div class="controle-card">
                        <RouterLink to="" class="bt-edite button is-success">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </RouterLink>
                        <button class="bt-delete button ml-2 is-danger" @click="excluir(filme._id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { key } from '@/store';
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import {DELETAR_FILME} from '@/store/actios'

export default defineComponent({
    name: 'Card-Filmes',
    
    setup() {
        const store = useStore(key)
       const excluir= (id: string)=>{
            store.dispatch(DELETAR_FILME, id)
        }
        return{
            filmes: computed( ()=> store.state.filmes),
            excluir
        }
    },
})
</script>

<style scoped>
.cointainer-card {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.bt-delete{
    margin: auto;
    height: 30px;
    position: absolute;
    right: 10px;
}
.bt-edite{
    margin: auto;
    height: 30px;
    position: absolute;
    right: 55px;
}
.cointainer-card .card {

    cursor: pointer;
}

.cointainer-card .card-filmes .face {
    width: 250px;
    height: 140px;
    transition: 0.5s;
}
.cointainer-card .card-filmes .face.face2 {
    width: 250px;
    height: 240px;
    transition: 0.5s;
    overflow: hidden;
}
.cointainer-card .card-filmes video{
    width: 100%;
    height: 147px;
    object-fit:fill;
    overflow-clip-margin:unset;
    overflow: hidden;
}

.cointainer-card .card-filmes .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.cointainer-card .card-filmes:hover .face.face1 {
    background: #5396FF;
    transform: translateY(0);
}



.cointainer-card .card-filmes:hover .face.face1 .content {
    opacity: 1;
}


.cointainer-card .card-filmes .face.face2 .content .title-Card{
    width: 255px;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;
    
}
.cointainer-card .card-filmes .face.face2 .content .controle-card{
    width: 255px;
    height: 21%;
    display: flex;
    align-items: center;
    justify-content:right;
}
.cointainer-card .card-filmes .face.face2 .content .title-Card p {   
    margin-top: -3px;
    font-size: 1em;
    animation: go-title ease-in 10s infinite;
    color: var(--title-color);
}
@keyframes go-title{
    0% {
        transform: translateX(250px);
    }
    100%{
        transform: translateX(-250px);
    }
 
}
.cointainer-card .card-filmes .face.face2 .content .descricao-card{
    width: 255px;
    height: 65%;
    background-color: #5396FF;
}
.cointainer-card .card-filmes .face.face2 .content .descricao-card p{
    color: var(--title-color);
    font-size: 1em;
}
.cointainer-card .card-filmes .face.face2 {
    position: relative;
    background:#333;
    display: flex;
    padding-top: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    transform: translateY(-100px);
}

.cointainer-card .card-filmes:hover .face.face2 {
    transform: translateY(0);
}

</style>