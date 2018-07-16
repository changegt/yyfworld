export default {
	state: {
		title: '',
		breadcrumb: []
	},
	mutations: {
		SET_TITLE (state, {title}) {
			state.title = title;
		},
		SET_BREADCRUMB (state, {crumbArray}) {
			state.breadcrumb = crumbArray;
		}
	},
	actions: {
		setTitle ({commit}, {title}) {
			commit('SET_TITLE', {title});
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