<template>
	<el-main>
		<h3 class="tac fz18 lh24">{{post.p_title}}</h3>
		<div class="content" v-html=""></div>
	</el-main>
</template>

<script>
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

	export default {
		name: 'postpage',
		props: ['post'],
		data () {
			return {};
		},
		computed: {
			content () {
				return this.analysis(post.p_content);
			}
		},
		mounted () {
			this.init();

		},
		methods: {
			init () {
				let pid = this.$router.currentRoute.query.pid;
				//TODO /world/postpage?pid=
			},
			analysis (str) {
				return converter.makeHtml(str);
			}
		}
	}
</script>

<style scope lang="less">
	
</style>