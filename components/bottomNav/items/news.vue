<template>
	<div>
		<swiper-news></swiper-news>
		<newslist></newslist>
	</div>
</template>

<script>
	import swiperNews from "../swiper/swiper_news.vue";
	import newslist from "./contents/newslist.vue";

	export default {
		data() {
			return {

			}
		},
		components: {
			swiperNews,
			newslist,
		}
	}
</script>

<style scoped>

</style>