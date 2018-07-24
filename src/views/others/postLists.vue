<template>
	<el-container>
		<el-table
	      :data="postLists"
	      style="width: 100%">
	      <el-table-column
	        label="标题"
	        width="300">
	        <template slot-scope="scope">
	        	<router-link :to="{ path: '/others/postpage', query: { pid: scope.row.pid}}">
	        		<span class="curp ml10">{{ scope.row.title }}</span>
	        	</router-link>
	      	</template>
	      </el-table-column>
	      <el-table-column
	        prop="time"
	        label="创建时间"
	        width="220">
	      </el-table-column>
	      <el-table-column
	        prop="label"
	        label="标签">
	      </el-table-column>
	    </el-table>
	</el-container>
</template>

<script>
	import {addPost,getPostLists} from '@/api/api_post.js';
	import {Utils} from '@/utils/Utils.js'
	export default {
		name: 'postLists',
		data () {
			return {
				postLists: [],
				sourceData: []
			};
		},
		mounted() {
			this.initPostLists();
		},
		methods: {
			initPostLists () {
				let self = this;
				getPostLists().then((res) => {
					if(res.errorCode == 0){
						self.sourceData = res.result.lists;
						self.postLists = self.analysis(res.result.lists);
					}else{
						alert(res.errorMsg);
					}
				});
			},

			analysis (arr) {
				let targetArr = [];
				for(var i in arr){
					targetArr[i] = {
						pid: arr[i].pid,
						title: arr[i].p_title,
						time: Utils.timeFormat(new Date(parseInt(arr[i].p_timestr))),
						label: '',
					}
				}

				return targetArr;
			},
		},
		computed: {
			
		}
	}
</script>

<style lang="less" scope>
</style>