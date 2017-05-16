<template>
	<mu-appbar title="" :title="title">
		<mu-icon-button icon="menu" slot="left" />
	</mu-appbar>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		computed:{
			title(){
				return this.$store.getters.getExchange
			}
		},
	}
</script>

<style scoped>

</style>