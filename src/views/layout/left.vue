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
			      <i class="el-icon-location"></i>
			      <span slot="title">{{item.name}}</span>
			    </template>
			    <el-menu-item-group>
			      <el-menu-item :index="list.path" v-for="list in item.sub">{{list.name}}</el-menu-item>
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
        		sub: [
        			{ path: '/tools/sublime', name: 'sublime' },
        			{ path: '/tools/xshell', name: 'xshell' }
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