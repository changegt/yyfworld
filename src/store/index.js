import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

import toolsSublime from './modules/tools/sublime'
import main from './modules/main'
import mResCss from './modules/res/m-res-css'

export default new vuex.Store({
	modules: {
		toolsSublime,
		main,
		mResCss
	}
})