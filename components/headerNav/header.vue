<template>
	<div>
		<div class="header">
			<mu-raised-button icon="menu" label="" @click="open('bottom')" class="button" />
			<!--==========标题==========-->
			<span class="title">{{title}}</span>
		</div>
		<!--==========弹出框==========-->
		<mu-popup position="center" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
			<mu-appbar title="登录">
				<mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')" />
			</mu-appbar>
			<mu-content-block class="login">
				<input type="text" placeholder="Access Token" />
				<button type="submit">提交</button>
			</mu-content-block>
		</mu-popup>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				bottomPopup: false,
				topPopup: false,
				leftPopup: false,
				rightPopup: false,
			}
		},
		methods: {
			open(position) {
				this[position + 'Popup'] = true
			},
			close(position) {
				this[position + 'Popup'] = false
			}
		},
		watch: {
			topPopup(val) {
				if(val) {
					setTimeout(() => {
						this.topPopup = false
					}, 2000)
				}
			}
		},
		computed: {
			title() {
				return this.$store.getters.getExchange
			}
		},
	}
</script>

<style scoped lang="css">
	.login {
		width: 100%;
		max-width: 375px;
		text-align: center;
	}
	
	.header {
		height: 56px;
		width: 100%;
		background-color: #7e57c2;
		vertical-align: middle;
	}
	
	.header .button {
		height: 100%;
		min-width: 60px;
		background-color: #7e57c2;
		border: none;
		box-shadow: none;
		color: #fff;
	}
	
	.header .title {
		display: inline-block;
		line-height: 56px;
		position: absolute;
		left: 50%;
		margin-left: -13px;
		color: #fff;
		font-size: 18px;
		font-family: '微软雅黑';
	}
	
	.demo-popup-top {
		width: 100%;
		opacity: .8;
		height: 48px;
		line-height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: 375px;
	}
	
	.demo-popup-left {
		display: flex;
		width: 85%;
		max-width: 375px;
		height: 100%;
		align-items: center;
		padding: 24px;
	}
	
	.demo-popup-right {
		display: flex;
		width: 100%;
		height: 100%;
		max-width: 375px;
		align-items: center;
		padding: 24px;
	}
	
	.demo-popup-bottom {
		width: 80%;
		max-width: 375px;
	}
</style>