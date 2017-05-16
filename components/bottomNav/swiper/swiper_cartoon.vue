<template>
	<div>
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img :src="F4"/></div>
				<div class="swiper-slide"><img :src="iverson"/></div>
				<div class="swiper-slide"><img :src="kobe"/></div>
				<div class="swiper-slide"><img :src="carter"/></div>
				<div class="swiper-slide"><img :src="mcgrady"/></div>
			</div>
			<!-- Add Pagination -->
			<div class="swiper-pagination"></div>
			<!-- Add Arrows -->
			<!--<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//src:require("../../../images/F4.jpg"),
				F4: require("../../../images/F4.jpg"),
				iverson: require("../../../images/iverson.jpg"),
				kobe: require("../../../images/kobe.jpg"),
				carter: require("../../../images/carter.jpg"),
				mcgrady: require("../../../images/mcgrady.jpg")
			}
		},
		mounted() {
			var swiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				paginationClickable: true,
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
		}
	}
</script>

<style scoped>
	@import "../../../swiperPlugin/swiper.css";
	html,
	body {
		position: relative;
		height: 100%;
	}
	img{
		width: 100%;
	}
	
	body {
		background: #eee;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}
	
	.swiper-container {
		width: auto;
		height: auto;
	}
	
	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
	}
</style>