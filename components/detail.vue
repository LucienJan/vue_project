<template>
	<div>
		<myheader></myheader>
		<div id="detail" v-for="details in detailss">
			
		</div>
	</div>
</template>

<script>
	import myheader from "./headerNav/header.vue";
	export default { 
		data(){
			return {
				detailss: [],
			}
		},
		methods:{
			getDetails(){
				$.ajax({
					type:"GET",
					url:"https://cnodejs.org/api/v1/topic/:id",
					data:{},
					dataType:"json",
					success:function(data){
						console.log(data);
						$("document.body").html(data);
						//this.detailss = this.detailss.concat(data.data.content);
						//console.log(this.detailss);
					}.bind(this)
				})
			}
		},
		mounted(){
			this.getDetails()
		},
		components:{
			myheader,
		}
	}
</script>

<style scoped>
	
</style>