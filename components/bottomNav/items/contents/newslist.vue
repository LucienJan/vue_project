<template>
	<div>
		<mu-tabs :value="activeTab" @change="handleTabChange">
			<mu-tab value="tab1" title="新闻" />
			<mu-tab value="tab2" title="资讯" />
		</mu-tabs>
		<div v-if="activeTab === 'tab1'">
			<h2>新闻</h2>
		</div>
		<div v-if="activeTab === 'tab2'">
			<h2>资讯</h2>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'tab1',
			}
		},
		methods: {
			handleTabChange(val) {
				this.activeTab = val
			},
			handleActive() {
				window.alert('tab active')
			}
		}
	}
</script>

<style scoped>
	
</style>