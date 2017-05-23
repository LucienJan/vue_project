<template>
	<div>
		<detail-header></detail-header>
		<div id="demo"></div>
	</div>
</template>

<script>
	import detailHeader from "./headerNav/detail_header.vue";
	export default {
		data() {
			return {
				detailss: [],
			}
		},
		methods: {
			getDetails() {
				$.ajax({
					type: "GET",
					url: "https://cnodejs.org/api/v1/topic/" + this.$route.params.id,
					data: {},
					dataType: "json",
					success: function(data) {
						console.log(data);
						//console.log(data.data.content);
						$("#demo").html(data.data.content);
						//this.detailss = this.detailss.concat(data.data.content);
						//console.log(this.detailss);
					}.bind(this)
				})
			}
		},
		mounted() {
			this.getDetails()
			console.log(this.$route.params.id)
		},
		components: {
			detailHeader,
		}
	}
</script>

<style scoped>
	#demo {
		height: 100%;
		width: 100%;
		margin-top:56px;
		padding: 0 1rem;
	}
	
	#demo img {
		max-width: 100%;
		height: auto;
		width: auto;
	}
</style>