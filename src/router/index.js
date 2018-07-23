import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '../store'

Vue.use(vueRouter)

import data from '@/data/catalog.config.js'

import Index from '@/views/index.vue'
import Login from '@/views/user/login.vue'
import Tools from '@/views/tools/index.vue'
import Sublime from '@/views/tools/tools-sublime.vue'
import Xshell from '@/views/tools/tools-xshell.vue'
import Xmindmap from '@/views/prod/prod-xmindmap.vue'
import Resimg from '@/views/resource/res-img.vue'
import ResCss from '@/views/resource/res-css.vue'
import ResCssCommon from '@/views/resource/res-css-common.vue'

import TaskIndex from '@/views/task/task-index.vue'

import AddPost from '@/views/others/addPost.vue'
import PostLists from '@/views/others/PostLists.vue'

let components = {
	Index : Index,
	Login : Login,
//tools
	Tools : Tools,
	Sublime : Sublime,
	Xshell : Xshell,
	Xmindmap : Xmindmap,

//res
	Resimg : Resimg,
	ResCss: ResCss,
	ResCssCommon: ResCssCommon,

//task
	TaskIndex : TaskIndex,

//others
	addPost : AddPost,
	postLists: PostLists
};


//循环生成列表数据
let routerObj = [{
					path: '/',
					name: 'index',
					component: Index,
				}];

data.catalogLists.forEach((el, index) => {
	let oData = {
		path: el.path,
		component: components['Index'],
		redirect: el.sub[0].path,
		meta: { routepath: el.sub[0].path, key: el.name},
	};

	oData.children = [];
	el.sub.forEach((el2, index2) => {
		oData.children.push({
			path: el2.subpath,
			meta: { routepath: el2.path, key: el2.name, of: (el2.of || '')},
			component: components[el2.componentname]
		})
	});

	routerObj.push(oData)
})

const router = new vueRouter({
	routes: routerObj
})

router.beforeEach((to, from, next) => {
	store.dispatch('setBarActive', {routepath: (!to.meta.of ? to.meta.routepath : to.meta.of) });
	store.dispatch('setBreadcrumb', {obj: to.matched});
	next()
})

export default router