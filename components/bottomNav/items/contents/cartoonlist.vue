<template>
	<div>
		<div class="weui-panel weui-panel_access">
			<!--<div class="weui-panel__hd">体育新闻</div>-->
			<div class="weui-panel__bd">
				<a v-for="news in newss" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img :src="news.author.avatar_url" class="weui-media-box__thumb" alt="">
					</div>
					<!--<span v-text="news.tab" :class="classObject"></span>-->
					<div class="weui-media-box__bd">
						<!--<a :href="" v-text="news.title" class="weui-media-box__title"></a>-->
						<router-link :to="{path:'/detail/' + this.$route.params.id}"></router-link>
						<span v-text="news.reply_count" class="reply"></span>/<span v-text="news.visit_count" class="visit"></span>
						<span v-text="news.last_reply_at" class="last_reply_at"></span>
					</div>
				</a>
			</div>
			<div class="weui-panel__ft">
				<a @click="getNews()" href="javascript:void(0)" class="weui-cell weui-cell_access weui-cell_link">
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
				<p class="weui-toast__content">数据加载中...</p>
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
				isShowLoading: 0, //表示隐藏
				/*classObject: {
					'topiclist_tab':false,
					'put_top':false,
					'put_good':false
				},*/
			}
		},
		methods: {
			getNews() {
				this.isShowLoading += 1;

				/*switch(this.newss.tab) {
					case "ask": classObject.topiclist_tab == true;
						break;
					case "share": classObject.topiclist_tab == true;
						break;
					case "job": classObject.put_top == true;
						break;
					case "good": classObject.put_good == true;
						break;
				}*/
				$.ajax({
					type: "GET",
					url: "https://cnodejs.org/api/v1/topics",
					data: {
						page: this.page
					},
					dataType: "json",
					async: true,
					success: function(data) {
						console.log(data);
						this.isShowLoading -= 1; //调用成功隐藏loading
						this.newss = this.newss.concat(data.data)
						console.log(this.newss);
					}.bind(this)
				});

				this.page++;
			},
		},
		mounted() {
			this.getNews()
		}
	}
</script>

<style scoped>
	.weui-panel {
		margin-bottom: 56px;
	}
	
	/*.topiclist_tab {
		background-color: #e5e5e5;
		color: #999;
		padding: 2px 4px;
		border-radius: 3px;
		font-size: 12px;
	}
	
	.put_top {
		background: #80bd01;
		padding: 2px 4px;
		border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		-o-border-radius: 3px;
		color: #fff;
		font-size: 12px;
	}
	
	.put_good {
		background: orange;
		padding: 2px 4px;
		border-radius: 3px;
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		-o-border-radius: 3px;
		color: #fff;
		font-size: 12px;
	}*/
	
	.reply,
	.visit {
		display: inline-block;
		color: #777;
	}
	
	.last_reply_at {
		float: right;
		color: #777;
	}
</style>