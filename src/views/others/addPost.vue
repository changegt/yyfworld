<template>
	<el-container>
		<el-main class="pl10 pr10 por">
			<div class="clearfix post-md-box mt20">
				<div class="fl post-md-item md-input">
					<textarea name="" id="" class="commonScroll" v-model="mdVal"></textarea>
				</div>
				<div class="fl post-md-item md-show ova commonScroll" v-html="outputMDVal"></div>
			</div>
			<el-row>
				<el-col :span="8">
					<el-button type="primary" class="submit-btn mt20" @click="submit">提交文章</el-button>
					<el-button type="primary" @click="get">获取文章</el-button>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	//https://www.npmjs.com/package/showdown
	import showdown from 'showdown'

	const options = {
		parseImgDimensions : true,
		simplifiedAutoLink :true,
		strikethrough :true,
		tables :true,
		simpleLineBreaks :true,
		ghMentions :true,
		openLinksInNewWindow :true,
		emoji: true
	};
	const converter = new showdown.Converter(options);
	// let defaultOptions  = showdown.getDefaultOptions();

	/**
	 * parseImgDimensions 设置图片大小 default=false
	 * simplifiedAutoLink 自动将一些链接链接到网址 default=false
	 * strikethrough default=false 删除线启用
	 * tables default=false 启用表格
	 * simpleLineBreaks default=false 解析换行符
	 * ghMentions default=false 启用github@XXXX
	 * openLinksInNewWindow default=false 默认在新窗口打开所有链接
	 */
	import {addPost,getPostLists} from '@/api/api_post.js';

	export default {
		name: 'addPost',
		data () {
			return {
				mdVal: ''
			};
		},
		methods: {
			submit () {
				let val = this.mdVal, self = this;
				addPost({
					title: 'test',
					content: val
				}).then((res) => {
					if(res.errorCode == 0){
						alert('success')
					}else{
						alert(res.errorMsg);
					}
				})
			},

			get () {
				getPostLists({
					pid: 13
				}).then((res) => {
					if(res.errorCode == 0){
						console.log(res.result);
					}else{
						alert(res.errorMsg);
					}
				})
			}
		},
		computed: {
			outputMDVal () {
				let str = !this.mdVal ? '' : converter.makeHtml(this.mdVal);
				return str;
			}
		}
	}
</script>

<style lang="less" scope>
	@import '../../assets/css/markdown.css';

	.post-md-box{
		width: 100%;
		height: 700px;
		box-shadow : 0 0 10px 3px rgba(0,0,0,.1);
	}
	.post-md-item{
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		padding: 10px;
		font-size: 14px;
		&:first-child{
			border-right: solid 1px #ccc;
		}
		textarea{
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			resize: none;
		}
	}
	.submit-btn{

	}
</style>