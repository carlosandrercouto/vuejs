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
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  },
  data() {
    return {
      nomeProjeto: 'Netflix VueJS',
      categorias: [
					{
						"id":1,
						"titulo":"Terror",
						"filmes":[
							{
								"id":1,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":2,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":3,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":4,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":5,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":6,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":7,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							},
							{
								"id":8,"titulo":"It: A Coisa","imagem":"http://br.web.img2.acsta.net/pictures/17/03/29/07/56/333222.jpg"
							}
						]
					},
					
					{
						"id":2,
						"titulo":"Ação",
						"filmes":[
							{
								"id":1,"titulo":"It: Assassin’s Creed","imagem":"https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"
							},
							{
								"id":2,"titulo":"It: O Mecanismo","imagem":"https://i.ytimg.com/vi/A8TNFbZ7mjg/maxresdefault.jpg"
							},
							{
								"id":3,"titulo":"It: Dr. House","imagem":"https://pm1.narvii.com/6866/cf0945d36a09139ec9eaa50dbf6562b4279d39d6r1-717-443v2_hq.jpg"
							},
							{
								"id":4,"titulo":"It: Breaking Bad","imagem":"https://occ-0-987-990.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABQyl1YAmoZditWkDmvqQKDCBJEY8aUx1BBzaSb0aLWCFgannplenW99dkVqBYtuOKG7tMtuz6D7BqM8tHgmz5M2bUzNHK3kN5w.jpg?r=9ff"
							},
							{
								"id":5,"titulo":"It: Designated Survivor","imagem":"https://s2.glbimg.com/V0dAdDKPuMliHmbyLvcPENeBvLo=/e.glbimg.com/og/ed/f/original/2018/05/11/kiefer-sutherland.jpg"
							},
							{
								"id":6,"titulo":"It: Prison Break","imagem":"https://3.bp.blogspot.com/-jZVPjCjOkfw/WHd8EnZSaRI/AAAAAAAAN_o/l2GdatZX7As0iXlkF2TVO20Pyv4eD85VgCLcB/s1600/prison-break.jpg"
							},
							{
								"id":7,"titulo":"It: Narcos","imagem":"https://ogimg.infoglobo.com.br/in/22495995-6d3-b42/FT1086A/652/xnarcos_press_1000-920x603.jpg.pagespeed.ic.FvzDkd2Hoe.jpg"
							}
						]
					}
				]
    }
  },
};
</script>
