<template>
	<div>
		<!-- Swiper -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img :src="slide1"/></div>
				<div class="swiper-slide"><img :src="slide2"/></div>
				<div class="swiper-slide"><img :src="slide3"/></div>
				<div class="swiper-slide"><img :src="slide4"/></div>
				<div class="swiper-slide"><img :src="slide5"/></div>
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
				slide1: require("../../../images/1.jpg"),
				slide2: require("../../../images/2.jpg"),
				slide3: require("../../../images/3.jpg"),
				slide4: require("../../../images/4.jpg"),
				slide5: require("../../../images/5.jpg"),
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
		},
	}
</script>

<style scoped>
	@import '../../../swiperPlugin/swiper.css';
	img {
		width: 100%;
	}
	.swiper-container {
        width: 100%;
        height: 100%;
        
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