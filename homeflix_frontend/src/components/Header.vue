<template>
  <nav class="navbar navbar-expand-lg ">
    <h1>HomeFlix</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado"
      aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <RouterLink to="/" class="nav-link">
            Inicio
          </RouterLink>
        </li>
        <li class="nav-item active">
          <RouterLink to="/projetos" class="nav-link">
            Filmes
          </RouterLink>
        </li>
        <li class="nav-item active">
          <button class="nav-link button is-text" @click="modalClick">Adicionar filme</button>
        </li>
      </ul>

      <p class="control has-icons-left ">
        <input class="input" type="texto" placeholder="Informe o titulo da busca!" />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>

    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header-app',
  props: {
    model: {
      type: Boolean,
      default: true
    }
  },
  emits:['aoClick'],
  methods:{
    modalClick():void{
      this.$emit('aoClick', this.model)
    }
  }


});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  padding: 1rem;
  cursor: default;
}

.nav-link {
  cursor: pointer;
  color: var(--color-text-nav);
  padding: 1rem;
  text-decoration: none;
}

.control {
  width: 250px;
  margin: 1rem;
}

.navbar {
  width: 100%;
  background-color: var(--bg-header);
}

.is-text:hover {
  background-color: inherit;
  color: inherit;
}
</style>
