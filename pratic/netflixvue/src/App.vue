<template>
	<div class="contain" id="app">
		
		
		<router-view />
	</div>
</template>

<style lang="scss">
	body,
	html {
		padding: 0 10px;
		margin: 0;
		background: #0e0f11;
		color: #ecf0f1;
		font-family: 'Open Sans', sans-serif;
		min-height: 100vh;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
	}
	* {box-sizing: border-box;}

	.contain {
		width: 100%;
	}
</style>
