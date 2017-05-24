<template>
	<div>
		<router-view></router-view>
		<mu-paper id="mybottom">
			<mu-bottom-nav :value="bottomNav" @change="handleChange">
				<mu-bottom-nav-item value="推荐" title="推荐" icon="functions" to="/home/cartoon"/>

				<mu-bottom-nav-item value="更新" title="更新" icon="sort" to="/home/news"/>

				<mu-bottom-nav-item value="地图" title="地图" icon="note" to="/home/novel"/>

				<mu-bottom-nav-item value="我的" title="我的" icon="star" to="/home/mine"/>
			</mu-bottom-nav>
		</mu-paper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bottomNav: '推荐',
			}
		},
		methods: {
			handleChange(val) {
				this.bottomNav = val;
				this.$store.state.exchange = this.bottomNav;
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