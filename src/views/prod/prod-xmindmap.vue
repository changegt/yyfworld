<template>
	<el-collapse v-model="activeNames" @change="handleChange">
	  	<el-collapse-item :title="item.title" :name="item.name" :key="item.name" v-for="item in lists">
		    <div v-html="item.content"></div>
	  	</el-collapse-item>
	</el-collapse>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: [],
        lists: [
        	{
        		title: 'yyfworld建站思维导图',
        		name: '1',
        		content: '<img src="https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png" alt="">'
        	},
        	{
        		title: 'js高级程序设计思维导图',
        		name: '2',
        		content: ''
        	}
        ]
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>