<template>
	<el-main>
		<el-header>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item v-for="list in getBreadcrumb" :to="{ path: list.title }">{{list.key}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-header>
		<div style="padding: 0 20px;flex: 1;">
			<router-view></router-view>
		</div>
	</el-main>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'appmain',
		data () {
			return {}
		},
		computed: {
			...mapGetters(['getBreadcrumb'])
		}
	}
</script>

<style lang="less">
	.el-main{
		display: flex;
    	flex-direction: column;
		padding: 0;
		.el-header{
			border-bottom: solid 1px #ccc;
			.el-breadcrumb{
				line-height: 60px;
			}
		}
	}
</style>