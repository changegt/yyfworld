<template>
	<el-aside width="auto">
		<el-menu 
			:default-active="activePath" 
			background-color="#545c64" 
			active-text-color="#ffd04b"
			class="el-menu-vertical-demo" 
			text-color="#fff"
			router
			@open="handleOpen" 
			@close="handleClose" 
			:collapse="isCollapse">
		  	<el-submenu :index="item.path" v-for="item in barArr">
			    <template slot="title">
			      <i :class="item.icon"></i>
			      <span slot="title">{{item.name}}</span>
			    </template>
			    <el-menu-item-group>
			      <el-menu-item :index="list.path" :key="index" v-for="(list, index) in item.sub">
              <i :class="list.icon"></i>
              <span>{{list.name}}</span>
            </el-menu-item>
			    </el-menu-item-group>
		  	</el-submenu>
		</el-menu>
	</el-aside>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-aside{
  	height: 100%;
  	overflow: auto;
  }
  .el-menu{
  	min-height: 100%!important;
  }
</style>

<script>
  export default {
  	name: 'left',
    data() {
      return {
        isCollapse: false,
        barArr: [
        	{
        		path: '/tools',
        		name: '工具体系',
            icon: 'el-icon-location',
        		sub: [
        			{ path: '/tools/sublime', name: 'sublime',icon: 'el-icon-caret-right' },
        			{ path: '/tools/xshell', name: 'xshell',icon: 'el-icon-caret-right' }
        		]
        	},
          {
            path: '/prod',
            name: '作品体系',
            icon: 'el-icon-star-on',
            sub: [
              { path: '/prod/xmindmap', name: '思维导图',icon: 'el-icon-caret-right' }
            ]
          },
          {
            path: '/resource',
            name: '资源体系',
            icon: 'el-icon-picture',
            sub: [
              { path: '/resource/res-img', name: '图片资源',icon: 'el-icon-caret-right' }
            ]
          }
        ]
      };
    },
    computed: {
      activePath () {
        return this.$store.state.main.title || '';
      }
    },
    mounted (){

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>