<template>
	<div>
		<detail-header></detail-header>
		<div id="detail"></div>
		<comment-list></comment-list>
	</div>
</template>

<script>
	import detailHeader from "./headerNav/detail_header.vue";
	import commentList from "./comment.vue";
	export default {
		data() {
			return {}
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
						$("#detail").html(data.data.content);
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
			commentList,
		}
	}
</script>

<style scoped>
	ul,li{
		list-style: none;
	}
	#detail {
		height: 100%;
		width: 100%;
		margin-top:56px;
		padding: 1rem;
	}
	#detail img {
		min-width: 100%;
		height: auto;
		width: auto;
	}
</style>