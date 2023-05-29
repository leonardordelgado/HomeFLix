<template>
  <main class="row">
    <div class="nav-header d-flex col-14 ">
      <Header @aoClick="modal" />
    </div>
    <ModalAddFilme :mostrar="modalclicaco != false">
      <template v-slot:cabecalio>
        <p class="modal-card-title">Adicionar Filme</p>
        <button class="delete" @click="fecharModel" aria-label="close"></button>
      </template>
      <template v-slot:corpo>
        <form  id="add-filme" @submit.prevent="AdicionarFilme" class="form" >
          <div class="field">
            <label for="titulo" class="label">Titulo</label>
            <input type="text" class="input capt" id="titulo"  name="titulo"  />

            <label for="descricao" class="label">Descrição</label>
            <input type="text" class="input capt" id="descricao" name="descricao" />

            <label for="url" class="label">Url</label>
            <input type="text" class="input capt" id="url" name="url" />

            <label for="faixaetaria" class="label">faixaetaria</label>
            <input type="number" class="input capt" id="faixaetaria" name="faixaetaria" />

            <label for="genero" class="label">Genero</label>
            <input type="text" class="input capt" id="genero" name="genero" />
          </div>
        </form>
      </template>
      <template v-slot:rodape>
        <input type="submit" class="button is-success" form="add-filme" placeholder="Salvar">
        <button class="button"  @click="fecharModel">Cancelar</button>
      </template>
    </ModalAddFilme>


    <div class=" corpo col-14 ">
      <RouterView>

      </RouterView>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent, ref } from 'vue';
import Header from './components/Header.vue'
import ModalAddFilme from './components/ModalAddFilme.vue';
import { useStore } from './store';
import { ADICIONAR_FILME } from './store/actios';



export default defineComponent({
  name: 'App',
  components: {
    Header,
    ModalAddFilme
  },
  data() {
    return {
      modalclicaco: false
    }
  },
  emits:['fecharmodal'],
  
  methods: {
    modal(modal: boolean) {
      this.modalclicaco = modal
    },
    fecharModel(){
      this.modalclicaco = false
    },
  
    },
    setup(){
      const store = useStore()
      const AdicionarFilme =()=>{
        var input = (document.querySelectorAll('.capt'))
        const filme = {
        titulo: (input[0] as HTMLInputElement).value,
        descricao: (input[1] as HTMLInputElement).value,
        url: (input[2] as HTMLInputElement).value,
        faixaetaria: (input[3] as HTMLInputElement).value,
        genero: [(input[4] as HTMLInputElement).value]
      }
        store.dispatch(ADICIONAR_FILME, filme)
        
      }

      return{
        AdicionarFilme
      }
    }
  })
</script>

<style>
main {
  --bg-header: rgba(0, 0, 0, 0.08);
  --color-text-nav: rgb(0, 0, 0);
}

.nav-header {
  height: 12vh;
}

.conteudo {
  height: 100%;
}

.corpo {
  height: 100%;
  width: 100%;
}
</style>
