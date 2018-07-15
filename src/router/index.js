import Vue from 'vue'
import vueRouter from 'vue-router'
import store from '../store'

Vue.use(vueRouter)

import Index from '@/views/index.vue'
import Login from '@/views/user/login.vue'

import Tools from '@/views/tools/index.vue'
import Sublime from '@/views/tools/tools-sublime.vue'
import Xshell from '@/views/tools/tools-xshell.vue'

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
			meta: { title: '/tools/sublime'},
			children: [
				{
					path: 'sublime',
					meta: { title: '/tools/sublime'},
					component: Sublime
				},
				{
					path: 'xshell',
					meta: { title: '/tools/xshell'},
					component: Xshell
				},
			]	
		}
	]
})

router.beforeEach((to, from, next) => {
	store.dispatch('setTitle', {title: to.meta.title});
	next()
})

export default router