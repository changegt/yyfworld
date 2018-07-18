export default {
	state: {
		routepath: '',
		breadcrumb: []
	},
	mutations: {
		SET_BARACTIVE (state, {routepath}) {
			state.routepath = routepath;
		},
		SET_BREADCRUMB (state, {crumbArray}) {
			state.breadcrumb = crumbArray;
		}
	},
	actions: {
		setBarActive ({commit}, {routepath}) {
			commit('SET_BARACTIVE', {routepath});
		},

		setBreadcrumb ({commit}, {obj}) {
			var arr = [];
			for(let i in obj){
				arr.push(obj[i].meta);
			}

			console.log('---------------')
			console.log(arr)
			commit('SET_BREADCRUMB', {
				crumbArray: arr
			})
		}
	},
	getters : {
		getBreadcrumb : state => {
			return state.breadcrumb;
		}
	}
}