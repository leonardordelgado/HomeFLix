<template>
  <Cards />
</template>

<script lang="ts">
import {  defineComponent } from 'vue';
import Cards from '../components/Cards.vue';
import { useStore } from '@/store'
import {OBTEM_FILMES} from '@/store/actios'

export default defineComponent({
  name: "home-homefilx",
  components: {
    Cards,
  },
  setup(){
    const store = useStore()
    store.dispatch(OBTEM_FILMES)
    
  }
 
})
</script>

