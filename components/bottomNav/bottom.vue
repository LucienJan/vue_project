<template>
	<div>
		<router-view></router-view>
		<mu-paper id="mybottom">
			<mu-bottom-nav :value="bottomNav" @change="handleChange">
				<router-link to="/home/cartoon" >
					<mu-bottom-nav-item value="推荐" title="推荐" icon="functions" />
				</router-link>

				<router-link to="/home/news">
					<mu-bottom-nav-item value="更新" title="更新" icon="sort" />
				</router-link>

				<router-link to="/home/novel">
					<mu-bottom-nav-item value="地图" title="地图" icon="note" />
				</router-link>

				<router-link to="/home/mine">
					<mu-bottom-nav-item value="我的" title="我的" icon="star" />
				</router-link>
			</mu-bottom-nav>
		</mu-paper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: '漫画',
			}
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val
				this.$store.commit("setExchange",this.bottomNav)
			},
		}
	}
</script>

<style scoped>
	
	#mybottom {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}
</style>