import data from '@/data/res-css-lists.config.js'
let resCss = {
	state: {
		subLists: []
	},
	mutations: {
		SET_SUBLISTS (state, {subLists}) {
			state.subLists = subLists;
		}
	},
	actions: {
		A_setSubLists ({commit}) {
			commit('SET_SUBLISTS', {
				subLists: data.subLists
			});
		}
	},
	getters: {
		G_subLists: state => state.subLists
	}
}

export default resCss;