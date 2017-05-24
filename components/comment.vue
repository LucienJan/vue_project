<template>
	<div id="comment">
		
	</div>
</template>

<script>
	export default{
		data() {
			return {
				
			}
		},
		methods:{
			getComment(){
				$.ajax({
					type:"POST",
					url:"https://cnodejs.org/api/v1/topic/:topic_id/replies",
					data:{},
					dataType:"json",
					async:true,
					success:function(data){
						console.log(data);
						$("#comment").html(data);
					},
				})
			}
		},
		mounted() {
			this.getComment()
		},
	}
</script>

<style scoped>
	
</style>