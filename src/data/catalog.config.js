export default {
	catalogLists : [
		{
			path: '/tools',
			name: '工具体系',
	    	icon: 'el-icon-location',
			sub: [
				{ 
					path: '/tools/sublime', 
					name: 'sublime',
					icon: 'el-icon-caret-right',
					subpath: 'sublime', //配置路由的children的path
					componentname:'Sublime' //组件名称
				},
				{ path: '/tools/xshell', name: 'xshell',icon: 'el-icon-caret-right',subpath: 'xshell',componentname:'Xshell'}
			]
		},
	  	{
		    path: '/prod',
		    name: '作品体系',
		    icon: 'el-icon-star-on',
		    sub: [
		      { path: '/prod/xmindmap', name: '思维导图',icon: 'el-icon-caret-right',subpath: 'xmindmap',componentname:'Xmindmap' }
		    ]
	  	},
	  	{
		    path: '/resource',
		    name: '资源体系',
		    icon: 'el-icon-picture',
		    sub: [
		      { path: '/resource/res-img', name: '图片资源',icon: 'el-icon-caret-right',subpath: 'res-img',componentname:'Resimg' }
		    ]
	  	},
	  	{
		    path: '/task',
		    name: '任务体系',
		    icon: 'el-icon-picture',
		    sub: [
		      { path: '/task/index', name: '任务主页',icon: 'el-icon-caret-right',subpath: 'index',componentname:'TaskIndex' }
		    ]
	  	}
  	]
}