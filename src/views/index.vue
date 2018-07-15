<template>
	<el-container>
		<left></left>
		<appmain></appmain>
	</el-container>
</template>

<script>
	import left from './layout/left.vue'
	import appmain from './layout/main.vue'

	export default {
		name: 'index',
		components: {
			left,
			appmain
		},
		data () {
			return {}
		}
	}
</script>

<style>
	.el-container{
		height: 100%;
	}
</style>