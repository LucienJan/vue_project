<template>
	<div>
		<div id="allmap"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			// 百度地图API功能
			var map = new BMap.Map("allmap"); // 创建Map实例
			map.centerAndZoom(new BMap.Point(113.2759952545166, 23.117055306224895), 12); // 初始化地图,设置中心点坐标和地图级别
			map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
			map.setCurrentCity("广州"); // 设置地图显示的城市 此项是必须设置的
			map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

			//右键菜单(放大缩小)
			var menu = new BMap.ContextMenu();
			var txtMenuItem = [{
					text: '放大',
					callback: function() { map.zoomIn() }
				},
				{
					text: '缩小',
					callback: function() { map.zoomOut() }
				}
			];
			for(var i = 0; i < txtMenuItem.length; i++) {
				menu.addItem(new BMap.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
			}
			map.addContextMenu(menu);
		},
	}
</script>

<style scoped>
	body,
	html,
	#allmap {
		width: 100%;
		height: 456px;
		overflow: hidden;
		margin: 0;
		font-family: "微软雅黑";
	}
</style>