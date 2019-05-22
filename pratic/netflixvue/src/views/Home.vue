<template>
  <div class="home">
    <componentCategorias v-for="categoriasResult in categorias" v-bind:titulo="categoriasResult.titulo" v-bind:filmes="categoriasResult.filmes"/>
  </div>
</template>

<script>

import componentCategorias from "@/components/categoriaTitle.vue";


export default {
  name: "home",
  components: {
    componentCategorias,
  },
  created: function() {
   // GET /someUrl
  this.$http.get('http://localhost:3000/categorias').then(response => {

    // get body data
    this.categorias = response.body;

  }, response => {
    // error callback
  })
  },
  data() {
    return {
      nomeProjeto: 'Netflix VueJS',
      categorias: []
    }
  },
};
</script>
