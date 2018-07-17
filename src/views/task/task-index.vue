<template>
	<el-container>
		<el-header style="height: auto; padding: 10px 0; border: none;">
		  	<el-select v-model="value4" clearable placeholder="所有任务">
		    	<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
		    	</el-option>
		  	</el-select>
		</el-header>

	  	<el-main>
		  	<el-collapse v-model="activeNames" @change="handleChange">
			  	<el-collapse-item>
			  		<template slot="title">
				      <el-checkbox v-model="checked" style="margin-right: 5px;"></el-checkbox>实现工作框架
				    </template>
			    	<el-row>
				    	<el-col :span="16">
				    		<el-progress :text-inside="true" :stroke-width="18" :percentage="10"></el-progress>
				    	</el-col>
			    	</el-row>
			  	</el-collapse-item>
			</el-collapse>
		</el-main>
	</el-container>
</template>

<script>
	export default {
	    data() {
	      	return {
		        options: [
		        	{
			          value: '选项1',
			          label: '未开始'
			        }, {
			          value: '选项2',
			          label: '进行中'
			        }, {
			          value: '选项3',
			          label: '已完成'
			        }, {
			          value: '选项4',
			          label: '已上线'
			        }
			    ],
		        value4: [],
		        activeNames: ['1'],
		        checked: true
	      	}
	    },
	    methods: {
	    	handleChange(val) {
		        console.log(val);
	      	}
	    }
  	}
</script>