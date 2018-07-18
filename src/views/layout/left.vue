<template>
	<el-aside width="auto">
		<el-menu 
			:default-active="activePath" 
			background-color="#333744" 
			active-text-color="#fff"
			class="el-menu-vertical-demo" 
			text-color="#fff"
			router
			@open="handleOpen" 
			@close="handleClose" 
			:collapse="isCollapse">
		  	<el-submenu :index="item.path" v-for="item in barArr" :key="item.path">
			    <template slot="title">
			      <i :class="item.icon"></i>
			      <span slot="title">{{item.name}}</span>
			    </template>
			    <el-menu-item-group>
			      <el-menu-item :index="list.path" :key="index" v-for="(list, index) in item.sub" v-if="!list.of">
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
  .el-menu-item.is-active{
    background-color: #00c1de!important;
  }
  .el-submenu__title:hover{
    background-color: #00c1de!important;
  }
  .el-menu-item:hover{
    background-color: #00c1de!important; 
  }
</style>

<script>
  import data from '@/data/catalog.config.js'
  export default {
  	name: 'left',
    data() {
      return {
        isCollapse: false,
        barArr: data.catalogLists
      };
    },
    computed: {
      activePath () {
        return this.$store.state.main.routepath || '';
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