import $ from "jquery";
window.$ = $;
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vuex from "vuex";
Vue.use(Vuex);

//引入muse-ui
import MuseUI from "muse-ui";
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
//引入weui
import "weui";
//引入swiper
import "swiper"

//组件
import home from "./components/home.vue";
import cartoon from "./components/bottomNav/items/cartoon.vue";
import news from "./components/bottomNav/items/news.vue";
import novel from "./components/bottomNav/items/novel.vue";
import mine from "./components/bottomNav/items/mine.vue";
import detail from "./components/detail.vue";

//路由
var router = new VueRouter({
	routes: [{
		path: "/home",
		component: home,
		children: [{
			path: "cartoon",
			component: cartoon
		}, {
			path: "news",
			component: news
		}, {
			path: "novel",
			component: novel
		}, {
			path: "mine",
			component: mine
		}]
	}, {
		path: "/detail/:id",
		component: detail,
	},{
		path: "*",
		redirect: "/home/cartoon",
	}]
})

//状态管理
var store = new Vuex.Store({
	state: {
		auther:"LucienJan",
		exchange: "测试一下"
	},
	mutations: {
		setExchange(state, data) {
			state.exchange = data;
		}
	},
	getters: {
		getExchange(state) {
			return state.exchange;
		}
	}
})

new Vue({
	el: "#app",
	data:{
		name:"This page is written by Lucien"
	},
	template: `
		<router-view></router-view>
	`,
	router,
	store,
})