<template>
	<div>
		<mu-appbar id="header">
			<mu-icon-button icon="backspace" size="30" slot="left" @click="toHome()" class="mu-icon"/>
			<!--<mu-flat-button label="expand_more" slot="right" />
			<mu-flat-button href="333" label="expand_more" slot="right" />
			<mu-icon-button icon="expand_more" slot="right" />-->
			<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg" />
		</mu-appbar>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toHome() {
				console.log("toHome");
				this.$router.push({path:"/home/cartoon"})
			}
		}
	}
</script>

<style scoped>
	#header {
		position:fixed;
		top: 0;
		left: 0;
		margin-bottom: 56px;
	}
	#header:after{
		content:'',;
		display:inline-block;
		clear:both;
	}
	img {
		height: auto;
		max-width: 50%;
		vertical-align: middle;
		border: 0;
		margin: 0 0 0 40px;
	}
	
	.brand {
		float: none;
		margin: 0 auto;
		width: 120px;
		padding: 3px 20px;
		height: 28px;
		display: block;
		font-size: 20px;
		font-weight: 200;
		color: #777;
		text-shadow: 0 1px 0 #fff;
		text-decoration: none;
	}
	
	.mu-appbar-title {
		height: 100%;
	}
	.mu-icon{
		font-size: 30px;
	}
</style>