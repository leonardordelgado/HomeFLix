<template>
  <Cards @aoClick="editar" :v-model="filtro = id" />
  <ModalAddFilme :mostrar="modalEdit != false" v-for="(filme, index) in filmes" :key="index" :filme="filme">
      <template v-slot:cabecalio>
        <p class="modal-card-title">Editar Filme</p>
        <button class="delete" @click="fecharModel"  aria-label="close"></button>
      </template>
      <template v-slot:corpo>
          <div class="field" >
            <label for="titulo" class="label">Titulo</label>
            <input type="text" class="input capt" id="titulo"  name="titulo" v-model="filme.titulo"  />

            <label for="descricao" class="label">Descrição</label>
            <textarea type="" class="input capt" id="descricao" name="descricao"  v-model="filme.descricao"></textarea>

            <label for="url" class="label">Url</label>
            <input type="text" class="input capt" id="url" name="url" v-model="filme.url" />

            <label for="faixaetaria" class="label">faixaetaria</label>
            <input type="number" class="input capt" id="faixaetaria" name="faixaetaria" v-model="filme.faixaetaria" />

            <label for="capa" class="label">Capa</label>
            <input type="text" class="input capt" id="capa" name="capa" v-model="filme.capa" />

            <label for="genero" class="label">Genero</label>
            <input type="text" class="input capt" id="genero" name="genero" v-model="filme.genero" />
          </div>
      </template>
      <template v-slot:rodape>
        <button type="submit" class="button is-success" @click="alterarFilme">Salvar Alteração</button>
        <button class="button" @click="fecharModel" >Cancelar</button>
      </template>
    </ModalAddFilme>
</template>

<script lang="ts">
import {   computed, defineComponent, ref, watchEffect } from 'vue';
import Cards from '../components/Cards.vue';
import { useStore } from '@/store'
import {ALTERA_FILME, OBTEM_FILMES} from '@/store/actios'
import ModalAddFilme from '@/components/ModalAddFilme.vue';
import IFilmes from '@/interfaces/IFilmes';
export default defineComponent({
  name: "home-homefilx",
  components: {
    Cards,
    ModalAddFilme,
  },
  data(){
    return{
    modalEdit:  false ,
    id: ""
    }
  },
  methods:{
    editar(id: string){
    this.modalEdit= true
      this.id = id
    },
    fecharModel(){
      this.modalEdit = false
      
    },
    alterarFilme(){
        var input = (document.querySelectorAll('.capt'))
        const filme = {
        titulo: (input[0] as HTMLInputElement).value,
        descricao: (input[1] as HTMLInputElement).value,
        url: (input[2] as HTMLInputElement).value,
        faixaetaria: (input[3] as HTMLInputElement).value,
        capa: (input[4] as HTMLInputElement).value,
        genero: [(input[5] as HTMLInputElement).value],
        id: this.id
        }
          this.store.dispatch(ALTERA_FILME, filme)
          .then(this.fecharModel)
    }
  },
  setup(){
    const filtro = ref('')
    const store = useStore()
    store.dispatch(OBTEM_FILMES)
    return {
      filmes: computed( ()=> store.state.filmes.filter(it => it._id == filtro.value)),
      filtro,
      store
    }
    
    
  }
 
})
</script>
<style scoped>
.invisivel{
  display: none;
}
</style>

