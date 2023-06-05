<template>
    <div class="cointainer-card">
        <div class="card-filmes" v-for="filme in filmes" :key="filme._id">
            <div class="face face1">
                <div class="content">
                    <img :src="`${filme.capa}`" alt="">
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
                        <button type="submit" class="bt-edite button is-success" @click="modalClick(filme._id)">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </button>
                        <button class="bt-delete button ml-2 is-danger" @click="excluir(filme._id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>

                        <RouterLink :to="{name: 'reprodutor-filme', params:{url: filme.url}, query:{faixaetaria: filme.faixaetaria}}" class="bt-play button ml-2 is-ghost">
                            <span class="icon ">
                                <i class="bi bi-play-circle" style="font-size: 2rem; color: cornflowerblue;"></i>
                            </span>
                        </RouterLink>

                        
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
import { DELETAR_FILME, OBTEM_FILMES } from '@/store/actios'
import useNotificador from '@/hooks/notificador'
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { RouterLink, routerViewLocationKey } from 'vue-router';
import roteador from '@/router/index'

export default defineComponent({
    name: 'Card-Filmes',

    emits: ['aoClick'],
    methods: {
        modalClick(id: string,): void {
            this.$emit('aoClick', id)
        }
    },

    setup() {
        const store = useStore(key)
        const { notificar } = useNotificador()
        const excluir = (id: string) => {
            store.dispatch(DELETAR_FILME, id)
                .then(() => notificar(TipoNotificacao.ATENCAO, 'Tudo Certo', 'Poxa :/ você acabou de apagar um filme'))
        }
        const play = (play: string) => {
            const filme = play
            

        }

        return {
            filmes: computed(() => store.state.filmes),
            excluir,
            play
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

.bt-delete {
    margin: auto;
    height: 30px;
    position: absolute;
    right: 10px;
}

.bt-edite {
    margin: auto;
    height: 30px;
    position: absolute;
    right: 55px;
}

.bt-play {
    margin: auto;
    height: 30px;
    position: absolute;
    left: 2px;

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

.cointainer-card .card-filmes img {
    width: 100%;
    height: 147px;
    margin-top: -7px;
    object-fit: fill;
    overflow-clip-margin: unset;
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


.cointainer-card .card-filmes .face.face2 .content .title-Card {
    width: 255px;
    height: 30px;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 3px;

}

.cointainer-card .card-filmes .face.face2 .content .controle-card {
    width: 255px;
    height: 21%;
    display: flex;
    align-items: center;
    justify-content: right;
}

.cointainer-card .card-filmes .face.face2 .content .title-Card p {
    margin-top: -3px;
    font-size: 1em;
    animation: go-title ease-in 10s infinite;
    color: var(--title-color);
}

@keyframes go-title {
    0% {
        transform: translateX(250px);
    }

    100% {
        transform: translateX(-250px);
    }

}

.cointainer-card .card-filmes .face.face2 .content .descricao-card::-webkit-scrollbar {
    display: none;
}

.cointainer-card .card-filmes .face.face2 .content .descricao-card {
    width: 255px;
    height: 65%;
    overflow: auto;

    background-color: #5396FF;
}

.cointainer-card .card-filmes .face.face2 .content .descricao-card p {
    color: var(--title-color);
    padding: 6px;
    font-size: 0.8em;
}

.cointainer-card .card-filmes .face.face2 {
    position: relative;
    background: #333;
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