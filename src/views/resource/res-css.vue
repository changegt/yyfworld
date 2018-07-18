<template>
 	<el-container>
 		<el-row class="w100">
			  	<el-col style="width: 150px;" v-for="(el, index) in G_subLists" :key="index" :offset="index > 0 ? 2 : 0" class="mt20" >
 					<router-link :to="el.path">
			    	<el-card :body-style="{ padding: '0px' }">
			      		<img v-if="el.img" :src="el.img" class="image">
			      		<div class="p14 fs30 tac curp " :style="{ background: el.bg, height: '65px', lineHeight: '65px' }">
			        		<span class="fs16 fwb cfff">{{el.name}}</span>
			      		</div>
			    	</el-card>
					</router-link>
			  	</el-col>
		</el-row>

		<router-view></router-view>
 	</el-container>
</template>
<script>
	import { mapActions, mapGetters } from 'vuex'
  	export default {
    	data() {
      		return {
		      	// subLists: [
		      	// 	{
		      	// 		name: '通用样式',
		      	// 		bg: '#f05b72',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: 'LESS',
		      	// 		bg: '#fcaf17',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: 'Canvas',
		      	// 		bg: '#fcf16e',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: '数据可视化',
		      	// 		bg: '#5c7a29',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: '样式组件化',
		      	// 		bg: '#7fb80e',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: '其他',
		      	// 		bg: '#90d7ec',
		      	// 		path: ''
		      	// 	},
		      	// 	{
		      	// 		name: '更多',
		      	// 		bg: '#6f60aa',
		      	// 		path: ''
		      	// 	},
		      	// ]
	      	};
    	},
    	mounted () {
    		this.A_setSubLists();
    	},
    	computed: {
    		...mapGetters(['G_subLists'])
    	},
	    methods: {
	    	...mapActions(['A_setSubLists'])
	    }
  	}
</script>
<style scope>
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>