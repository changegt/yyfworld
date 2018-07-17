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
import TaskIndex from '@/views/task/task-index.vue'

let components = {
	Index : Index,
	Login : Login,
	Tools : Tools,
	Sublime : Sublime,
	Xshell : Xshell,
	Xmindmap : Xmindmap,
	Resimg : Resimg,
	TaskIndex : TaskIndex,
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
		meta: { title: el.sub[0].path, key: el.name},
	};

	oData.children = [];
	el.sub.forEach((el2, index2) => {
		oData.children.push({
			path: el2.subpath,
			meta: { title: el2.path, key: el2.name},
			component: components[el2.componentname]
		})
	});

	routerObj.push(oData)
})

const router = new vueRouter({
	routes: routerObj
})

router.beforeEach((to, from, next) => {
	store.dispatch('setTitle', {title: to.meta.title});
	store.dispatch('setBreadcrumb', {obj: to.matched});
	next()
})

export default router