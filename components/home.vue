<template>
	<div>
		<myheader></myheader>
		<mybottom></mybottom>
	</div>
</template>

<script>
	import myheader from "./headerNav/header.vue"
	import mybottom from "./bottomNav/bottom.vue"

	export default {
		components: {
			myheader,
			mybottom,
		}
	}
</script>

<style scoped>

</style>