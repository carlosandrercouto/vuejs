<template>
	<div class="slider">
			<h3>Ação</h3>
			<span v-on:mouseover="scrollEsquerda()"  v-on:mouseout="clearScroll()" class="handle handlePrev active">
				<i class="fa fa-caret-left" aria-hidden="true"></i>
			</span>

			<div id="scroller" class="row">
				<div class="row__inner">

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				<div class="gui-card">
					<div class="gui-card__media">
					<img class="gui-card__img" src="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700" alt=""  />
					</div>
					<div class="gui-card__details">
					<div class="gui-card__title">
						Assassin’s Creed
					</div>
					</div>
				</div>

				</div>

			</div>
			 
			<span v-on:mouseover="scrollDireita()" v-on:mouseout="clearScroll()"  class="handle handleNext active">
				<i class="fa fa-caret-right" aria-hidden="true"></i>
			</span>
		</div>
</template>

<script>
	export default {
		name: "categorias",
		props: {
			msg: String
		},
		data() {
			return {
				nomeProjeto : 'NetflixVuess',
				intervalo: null
			}
		},
		methods: {
			scrollDireita() {
				this.intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5)
			},

			scrollEsquerda(){
				this.intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5)
			},

			clearScroll(){
				clearInterval(this.intervalo);
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");

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


	


	.gui-card {
	position: relative;
	display: inline-block;
	width: 250px;
	height: 140.625px;
	margin-right: 10px;
	font-size: 20px;
	cursor: pointer;
	-webkit-transition: 450ms all;
	transition: 450ms all;
	-webkit-transform-origin: center left;
			transform-origin: center left;
	}
	.gui-card__img {
	width: 250px;
	height: 140.625px;
	-o-object-fit: cover;
		object-fit: cover;
	}
	.gui-card__details {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;
	font-size: 10px;
	opacity: 0;
	background: -webkit-linear-gradient(bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
	background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
	-webkit-transition: 450ms opacity;
	transition: 450ms opacity;
	}
	.gui-card__details:after,
	.gui-card__details:before {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	display: #000;
	}
	.gui-card__details:after {
	margin-top: -25px;
	margin-left: -25px;
	width: 50px;
	height: 50px;
	border: 3px solid #ecf0f1;
	line-height: 50px;
	text-align: center;
	border-radius: 100%;
	background: rgba(0,0,0,0.5);
	z-index: 1;
	}
	.gui-card__details:before {
	content: '▶';
	left: 0;
	width: 100%;
	font-size: 30px;
	margin-left: 7px;
	margin-top: -13px;
	text-align: center;
	z-index: 2;
	}
	.gui-card:hover .gui-card__details {
	opacity: 1;
	}
	.gui-card__title {
	position: absolute;
	bottom: 0;
	padding: 10px;
	}
	.row__inner:hover {
	-webkit-transform: translate3d(-62.5px, 0, 0);
			transform: translate3d(-62.5px, 0, 0);
	}
	.row__inner:hover .gui-card {
	opacity: 0.3;
	}
	.row__inner:hover .gui-card:hover {
	-webkit-transform: scale(1.5);
			transform: scale(1.5);
	opacity: 1;
	}
	.gui-card:hover ~ .gui-card {
	-webkit-transform: translate3d(125px, 0, 0);
			transform: translate3d(125px, 0, 0);
	}

</style>