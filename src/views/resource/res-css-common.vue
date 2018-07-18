<template>
	<el-collapse v-model="activeNames" @change="handleChange" accordion>
	  	<el-collapse-item :key="index" :name="index" v-for="(item, index) in cssLists">
	  		<template slot="title"><span class="fz16 el-collapse-word">{{item.name}}</span></template>
		    <!-- <a :href="item.url" target="_blank">{{item.url}}</a> -->
		    <pre v-if="item.content" class="cfff p20 ova" style="background: #282c34; font-family: source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace; max-height: 400px;"><code>{{item.content}}</code></pre>
  		</el-collapse-item>
  	</el-collapse>
</template>
<script>
	import axios from 'axios'
	import { mapActions, mapGetters } from 'vuex'
  	export default {
    	data() {
      		return {
      			activeNames: ['0'],
      			cssLists: [
      				{
      					name: '淘宝reset.css',
      					url: '/src/assets/css/reset-tb.css',
      					content: ''
      				},
      				{
      					name: '个人ystyle.css',
      					url: '/src/assets/less/ystyle.less',
      					content: ''
      				},
      				{
      					name: '个人btn.less',
      					url: '',
      					content: 'TODO'
      				},
      				{
      					name: '个人components.less',
      					url: '',
      					content: 'TODO'
      				}

      			]
	      	};
    	},
    	mounted () {

    	},
    	computed: {
    		
    	},
	    methods: {
	    	handleChange (val) {
	    		if(val === ''){
	    			return;
	    		}

	    		let obj = this.cssLists[this.activeNames];

	    		if(!!obj.content || !obj.url){
	    			return;
	    		}

	    		this.getContent(obj.url).then(res => {
	    			let data = res.data;
	    			this.cssLists[this.activeNames].content = this.$.trim(data);
	    		});
	    	},

	    	getContent (url) {
	    		return axios.get(url)
	    	}
	    }
  	}
</script>
<style scope>
.el-collapse-item:hover .el-collapse-word{
	color: #009ad6;
}
</style>