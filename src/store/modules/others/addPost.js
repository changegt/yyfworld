let addPost = {
	state: {
		mdtxt: ''
	},

	mutations: {
		SET_MDTXT (state, {txt}) {
			state.mdtxt = txt;
		}
	},

	actions: {
		setMDTxt ({commit}, obj) {
			commit('SET_MDTXT', obj);
		}
	},

	getters: {

	}
}