<template>
	<div>
		<p id="mine">{{mine}}</p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				mine:"个人中心"
			}
		},
	}
</script>

<style scoped>
	#mine {
		text-align: center;
	}
</style>