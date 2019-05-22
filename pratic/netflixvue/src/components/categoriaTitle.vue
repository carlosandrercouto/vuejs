<template>
	<div class="slider">
			<h3>{{titulo}}</h3>
			
			<span v-on:mouseover="scrollEsquerda()"  v-on:mouseout="clearScroll()" class="handle handlePrev active">
				<i class="fa fa-caret-left" aria-hidden="true"></i>
			</span>

			<div ref="scroller" class="row">
				<div class="row__inner">
					<componentFilme v-for="filmesResult in filmes" v-bind:titulo="filmesResult.titulo" v-bind:imagem="filmesResult.imagem"></componentFilme>
				</div>

			</div>
			 
			<span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()"  class="handle handleNext active">
				<i class="fa fa-caret-right" aria-hidden="true"></i>
			</span>
		</div>
</template>

<script>
	//importa componente a ser usado
	import componentFilme from "@/components/filme.vue";
	
	export default {
		name: 'categoria',
		props: ['titulo', 'filmes'],
		data() {
			return {
				nomePage: 'Categorias',
			}
		},
		methods: {
			scrollDireita() {
				const self = this
				this.intervalo = setInterval(function(){ self.$refs.scroller.scrollLeft += 1 }  , 5)
			},

			scrollEsquerda(){
				const self = this
				this.intervalo = setInterval(function(){ self.$refs.scroller.scrollLeft -= 1 }  , 5)
			},

			clearScroll(){
				clearInterval(this.intervalo);
			}
		},
		components: {
			componentFilme,//declara componente a ser usado
		},
	}
</script>


<style scoped lang="scss">
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

	.title {
		&__main {
			font-size: 20px;
		}
	}
	
	h1,
	p {
		width: 100%;
		max-width: 500px;
		text-align: center;
		margin: auto;
	}

	a {
		&:link,
		&:hover,
		&:active,
		&:visited {
			transition: color 150ms;
			color: #95a5a6;
			text-decoration: none;
		}

		&:hover {
			color: #7f8c8d;
			text-decoration: underline;
		}
	}

	.slider {
		height: 214px;
		position: relative;
		margin: 0;
		padding: 0 4%;
		touch-action: pan-y;

		h3 {
			position: absolute;
			top: 22px;
			z-index: 30;
		}

		.handle {
			width: 7%;
			height: 251px;
			position: absolute;
			top: 0;
			display: flex;
			justify-content: center;
			background: rgba(20, 20, 20, 0.26);
			bottom: 0;
			color: #fff;
			text-align: center;
			z-index: 20;

			&.handlePrev {
				left: 11px;
			}

			&.handleNext {
				right: 11px;
			}

			&.active {
				cursor: pointer;
			}
		}
	}

	.row {
		overflow: hidden;

		&__inner {
			transition: 450ms -webkit-transform;
			transition: 450ms transform;
			transition: 450ms transform, 450ms -webkit-transform;
			font-size: 0;
			white-space: nowrap;
			margin: 70.3125px 0;
			padding-bottom: 10px;
		}
	}


	.fa{
	font-size: 46px;
	margin-top: 120px;
	}

	
	.row__inner:hover {
	-webkit-transform: translate3d(-62.5px, 0, 0);
			transform: translate3d(-62.5px, 0, 0);
	}
	

</style>
