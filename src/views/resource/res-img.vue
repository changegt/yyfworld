<template>
 	<el-tabs type="border-card" style="margin-top: 20px; height: 95%;">
	  	<el-tab-pane>
	    	<span slot="label">图片展示</span>
	    	<ul class="clearfix">
	    		<li class="fl" style="width: 200px; height: 160px; margin: 10px; border: solid 1px #ccc; cursor: pointer;" :key="item.id" v-for="item in imgLists">
	    			<img :src="item.img" alt="" style="width: 100%; height: 100%;">
	    		</li>
	    	</ul>
	  	</el-tab-pane>
	  	<el-tab-pane>
	    	<span slot="label">图片上传</span>
	    	<div>
	    		<el-upload
				  	class="upload-demo"
				  	action="https://jsonplaceholder.typicode.com/posts/"
				  	:on-preview="handlePreview"
				  	:on-remove="handleRemove"
				  	:file-list="fileList2"
				  	list-type="picture">
				  	<el-button size="small" type="primary">点击上传</el-button>
				  	<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
	    	</div>
	  	</el-tab-pane>
	  	<el-tab-pane>
	    	<span slot="label">图片搜索</span>
	    	图片搜索
	  	</el-tab-pane>
	</el-tabs>
</template>
<script>
  export default {
    data() {
      	return {
      		activeName: '1',
      		imgLists: [
      			{
      				id: '1',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},
      			{
      				id: '2',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},{
      				id: '3',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},
      			{
      				id: '4',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},
      			{
      				id: '5',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},
      			{
      				id: '6',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			},
      			{
      				id: '7',
      				img: 'https://yyf-world.oss-cn-beijing.aliyuncs.com/img/%E4%B8%AA%E4%BA%BA%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0.png',
      				txt: 'yyfword项目思维导图'
      			}
      		],
      		fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      	};
    },
    methods: {
    	handleClick(tab, event) {
	        console.log(tab, event);
	    },
	    handleRemove(file, fileList) {
        	console.log(file, fileList);
      	},
      	handlePreview(file) {
	        console.log(file);
      	}
    }
  }
</script>
<style>
	.fl{
		float: left;
	}
	.rowflex{
		display: flex;
		flex-direction: row;
	}
	.flex1{
		flex: 1;
	}
	.clearfix{
		clear: both;
	}
	li{
		list-style: none;
	}
</style>