import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '../store'

Vue.use(vueRouter)

import Index from '@/views/index.vue'
import Login from '@/views/user/login.vue'

import Tools from '@/views/tools/index.vue'
import Sublime from '@/views/tools/tools-sublime.vue'
import Xshell from '@/views/tools/tools-xshell.vue'
import Xmindmap from '@/views/prod/prod-xmindmap.vue'
import Resimg from '@/views/resource/res-img.vue'

const router = new vueRouter({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index,
		},
		{
			path: '/tools',
			component: Index,
			redirect: '/tools/sublime',
			meta: { title: '/tools/sublime', key: '工具体系'},
			children: [
				{
					path: 'sublime',
					meta: { title: '/tools/sublime', key: 'sublime'},
					component: Sublime
				},
				{
					path: 'xshell',
					meta: { title: '/tools/xshell', key: 'xshell'},
					component: Xshell
				},
			]	
		},
		{
			path: '/prod',
			component: Index,
			redirect: '/prod/xmindmap',
			meta: { title: '/prod/xmindmap', key: '作品体系'},
			children: [
				{
					path: 'xmindmap',
					meta: { title: '/prod/xmindmap', key: '思维导图'},
					component: Xmindmap
				},
			]
		},
		{
			path: '/resource',
			component: Index,
			redirect: '/resource/res-img',
			meta: { title: '/resource/res-img', key: '资源体系'},
			children: [
				{
					path: 'res-img',
					meta: { title: '/resource/res-img', key: '图片资源'},
					component: Resimg
				},
			]
		}
	]
})

router.beforeEach((to, from, next) => {
	store.dispatch('setTitle', {title: to.meta.title});
	store.dispatch('setBreadcrumb', {obj: to.matched});
	next()
})

export default router