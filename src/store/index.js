import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import toolsSublime from './modules/tools/sublime'
import main from './modules/main'

export default new vuex.Store({
	modules: {
		toolsSublime,
		main
	}
})