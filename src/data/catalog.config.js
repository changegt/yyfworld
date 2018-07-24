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
		      { path: '/resource/res-img', name: '图片资源',icon: 'el-icon-caret-right',subpath: 'res-img',componentname:'Resimg' },
		      { path: '/resource/res-css', name: 'CSS资源',icon: 'el-icon-caret-right',subpath: 'res-css',componentname:'ResCss' },
		      { path: '/resource/res-css-common', name: '通用CSS',icon: 'el-icon-caret-right',subpath: 'res-css-common',componentname:'ResCssCommon', of: '/resource/res-css'}
		    ]
	  	},
	  	{
		    path: '/task',
		    name: '任务体系',
		    icon: 'el-icon-picture',
		    sub: [
		      { path: '/task/index', name: '任务主页',icon: 'el-icon-caret-right',subpath: 'index',componentname:'TaksIndex'}
		    ]
	  	},
	  	{
		    path: '/others',
		    name: '其他',
		    icon: 'el-icon-picture',
		    sub: [
		      { path: '/others/addPost', name: '添加帖子',icon: 'el-icon-caret-right',subpath: 'addPost',componentname:'addPost' },
		      { path: '/others/postLists', name: '帖子列表',icon: 'el-icon-caret-right',subpath: 'postLists',componentname:'postLists' },
		      { path: '/others/postpage/', name: '帖子列表',icon: 'el-icon-caret-right',subpath: 'postpage',componentname:'postpage',of: '/others/postLists'},
		    ]
	  	}
  	]
}