<template>
	<div>
		<swiper-cartoon></swiper-cartoon>
		<cartoonlist></cartoonlist>
	</div>
</template>

<script>
	import swiperCartoon from "../swiper/swiper_cartoon.vue";
	import cartoonlist from "./contents/cartoonlist.vue";

	export default {
		data() {
			return {
				
			}
		},
		components: {
			swiperCartoon,
			cartoonlist,
		},
	}
</script>

<style>
	
</style>