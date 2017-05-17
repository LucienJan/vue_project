<template>
	<div>
		<div class="weui-panel weui-panel_access">
			<div class="weui-panel__hd">美女图</div>
			<div class="weui-panel__bd">
				<a :href="news.url" v-for="news in newss" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img class="weui-media-box__thumb" :src="news.picUrl" alt="">
					</div>
					<div class="weui-media-box__bd">
						<h4 class="weui-media-box__title" v-text="news.title"></h4>
						<p class="weui-media-box__desc" v-text="news.description"></p>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @href="getNews()" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
					<div class="weui-cell__bd">查看更多</div>
					<span class="weui-cell__ft"></span>
				</a>
			</div>
		</div>
		<!--===========数据加载中===========-->
		<div id="loadingToast" :style="{display:isShowLoading?'block':'none'}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newss: [],
				page: 1,
				isShowLoading: 0,//表示隐藏
			}
		},
		methods: {
			getNews() {
				this.isShowLoading += 1;
				
				$.ajax({
					type: "GET",
					url: "http://localhost/yao/vue_test/day06/vue&webpack&mui_test/api.php",
					data: {
						page: this.page
					},
					dataType: "json",
					async: true,
					success: function(data) {
						console.log(data);
						this.isShowLoading -= 1;//调用成功隐藏loading
						this.newss = this.newss.concat(data.showapi_res_body.newslist)
						console.log(this.newss);
					}.bind(this)
				});
				
				this.page++;
			}
		},
		mounted() {
			this.getNews()
		}
	}
</script>

<style scoped>
	.weui-panel{
		margin-bottom: 56px;
	}
</style>