<template>
  <div class="home">
    <componentCategorias/>
  </div>
</template>

<script>
// @ is an alias to /src
import componentCategorias from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    componentCategorias
  }
};
</script>
