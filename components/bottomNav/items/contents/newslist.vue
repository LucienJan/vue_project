<template>
	<div id="newslist">
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="图片" />
			<mu-tab value="tab2" title="资讯" />
		</mu-tabs>
		<div v-if="activeTab === 'tab1'">
			<div class="weui-panel weui-panel_access">
				<div class="weui-panel__hd">美女图片</div>
				<div class="weui-panel__bd">
					<a v-for="news in newss" :href="news.url" class="weui-media-box weui-media-box_appmsg">
						<div class="weui-media-box__hd">
							<img class="weui-media-box__thumb" :src="news.picUrl" alt="">
						</div>
						<div class="weui-media-box__bd">
							<h4 v-text="news.title" class="weui-media-box__title"></h4>
							<p v-text="news.description" class="weui-media-box__desc">
								<span v-text="news.ctime"></span>
							</p>
						</div>
					</a>
				</div>
				<div class="weui-panel__ft">
					<a @click="getNews()" href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
						<div class="weui-cell__bd">查看更多</div>
						<span class="weui-cell__ft"></span>
					</a>
				</div>
			</div>

		</div>
		<div v-if="activeTab === 'tab2'">
			<h3>更新中...</h3>
		</div>

		<!--===========数据加载中===========-->
		<div id="loadingToast" :style="{display:isShowLoading?'block':'none'}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中...</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'tab1',
				newss: [],
				page: 1,
				isShowLoading: 0,
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},
			handleActive() {
				window.alert('tab active')
			},
			getNews() {
				this.isShowLoading += 1;

				$.ajax({
					type: "GET",
					url: "http://localhost/yao/vue_test/day06/vue&webpack&mui_test/meinv.php",
					data: {
						page: this.page
					},
					dataType: "json",
					async: true,
					success: function(data) {
						console.log(data);
						this.isShowLoading -= 1; //调用成功隐藏loading
						this.newss = this.newss.concat(data.showapi_res_body.newslist)
						console.log(this.newss);
					}.bind(this)
				});

				this.page += 1;
			},
		},
		mounted() {
			this.getNews()
		}
	}
</script>

<style scoped>
	#newslist{
		margin-bottom: 56px;
	}
	h3{
		color:red;
		text-align: center;
		line-height: 20px;
	}
</style>