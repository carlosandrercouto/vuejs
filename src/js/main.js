var app = new Vue({
	el: "#app",
	data: {
		msg: 'Iniciando com Vue JS',
		titulo: 'Teste com v-vind',
		condicao: true,
		registros: [
			{
				nome: 'Marcopolo G7 Paradiso 1200',
				marca: 'Marcopolo',
				modelo: 'Paradiso 1200'
			},
			
			{
				nome: 'Comil Invictus 1200',
				marca: 'Comil',
				modelo: 'Invictus 1200'
			}
		],
		click: false,
		usuario: {nome:""}
	},
	methods: {
		usuarioClicou: function() {
			this.click = !this.click
		}
	}
})