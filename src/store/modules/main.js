export default {
	state: {
		title: ''
	},
	mutations: {
		SET_TITLE (state, {title}) {
			state.title = title;
		}
	},
	actions: {
		setTitle ({commit}, {title}) {
			console.log('title'+title)
			commit('SET_TITLE', {title});
		}
	}
}