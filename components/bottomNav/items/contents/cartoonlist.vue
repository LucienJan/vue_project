<template>
	<div>
		<div class="weui-panel weui-panel_access">
			<!--<div class="weui-panel__hd">体育新闻</div>-->
			<div class="weui-panel__bd">
				<a v-for="news in newss" class="weui-media-box weui-media-box_appmsg">
					<div class="weui-media-box__hd">
						<img :src="news.author.avatar_url" class="weui-media-box__thumb" alt="">
					</div>

					<div class="weui-media-box__bd">
						<!--<a :href="/detail/?id=news.id" v-text="news.title" class="weui-media-box__title"></a>-->
						<router-link :to="{path:'/detail/' + news.id}" v-text="news.title" class="router-link"></router-link>
						<span v-text="news.tab" ></span>
						<div class="reply">
							<span v-text="news.reply_count"></span>/
							<span v-text="news.visit_count"></span>
						</div>
						<!--<span v-text="news.last_reply_at" class="last_reply_at"></span>-->
					</div>
				</a>
			</div>
			<!--返回顶部-->
			<div id="returnTop" @click="toTop()" style="display:none;">返回顶部</div>
			<!--<div class="weui-panel__ft">
				<a @click="getNews()" href="javascript:void(0)" class="weui-cell weui-cell_access weui-cell_link">
					<div class="weui-cell__bd">查看更多</div>
					<span class="weui-cell__ft"></span>
				</a>
			</div>-->
			<mu-pagination :total="total" :current="current" @pageChange="handleClick">
			</mu-pagination>

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
				classObj: {
					'topiclist_tab': false,
					'put_top': false,
					'put_good': false
				},
				total: 50,
				current: 1
			}
		},
		methods: {
			//回到顶部
			toTop() {
				$("#returnTop").click(function() {
					var speed = 200; //滑动的速度
					$('body,html').animate({ scrollTop: 0 }, speed);
					return false;
				});
			},
			handleClick(newIndex) {
				console.log(newIndex);
				this.page = newIndex;
				
				this.getNews();
				$('body,html').animate({ scrollTop: 0 }, 200);
			},
			getNews() {
				this.isShowLoading += 1;

				switch(this.newss.tab) {
					case "ask":
						classObj.topiclist_tab == true;
						break;
					case "share":
						classObj.topiclist_tab == true;
						break;
					case "job":
						classObj.put_top == true;
						break;
					case "good":
						classObj.put_good == true;
						break;
				}
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
						//this.newss = this.newss.concat(data.data)
						this.newss = data.data;
						console.log(this.newss);
					}.bind(this)
				});

				this.page++;
			},
		},
		mounted() {
			this.getNews()
			//滚动条
			$(function(){
				$(window).bind("scroll",function(){
					var sTop = parseInt($(window).scrollTop());
					if(sTop >= 236){
						if(!$("#returnTop").is(":visible")){
							try {
								//$("#returnTop").slideDown();
								$("#returnTop").fadeIn();
							} catch(e){
								$("#returnTop").slideDown();
								//$("#returnTop").fadeIn();
							}
						}
					}else{
						if($("#returnTop").is(":visible")){
							try {
								//$("#returnTop").slideUp();
								$("#returnTop").fadeOut();
							} catch(e) {
								$("#returnTop").slideUp();
								//$("#returnTop").fadeout();
							}
						}
					}
				})
			})
		}
	}
</script>

<style scoped>
	#returnTop {
		display: block;
		position: fixed;
		top: 300px;
		right: 0;
		max-width: 28px;
		/*max-height: 8rem;*/
		background-color: #F5F5F5;
		color: gray;
		border: 1px #ccc solid;
		border-right: 0;
		border-radius: 12px 0 0 12px;
		text-align: center;
		z-index: 20;
		padding: 12px 0 12px 5px;
		cursor:pointer;
	}
	#returnTop:active {
		background-color: #A6E1EC;
	}
	
	.weui-panel {
		margin-bottom: 56px;
	}
	
	.router-link {
		color: #000000;
		font-size: 14px;
		font-weight: bold;
		display: block;
	}
	
	.topiclist_tab {
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
	}
	
	
	.reply {
		float: right;
		display: inline-block;
		color: #777;
	}
	
	.last_reply_at {
		float: right;
		color: #777;
	}
</style>