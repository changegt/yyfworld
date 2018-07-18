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
        		content: '<img src="/src/assets/img/xmind/个人创作平台.png" alt="">'
        	},
        	{
        		title: 'js高级程序设计思维导图',
        		name: '2',
        		content: '<img src="/src/assets/img/xmind/ES6%E3%80%90%E5%9F%BA%E7%A1%80%E5%8F%82%E8%80%83ryf.ES6%E3%80%91.png" alt="">'
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
<style>
</style>