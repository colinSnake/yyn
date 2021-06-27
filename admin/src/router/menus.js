const menus = [
	{
		path: '/dashboard',
		title: 'dashboard',
		icon: 'DashboardOutlined'
	},
	{
		path: '/publish',
		title: 'publish',
		icon: 'ProjectOutlined',
		children: [
			{
				path: '/publish/publishNews',
				title: 'publishNews',
				icon: ''
			},
			{
				path: '/publish/publishJobs',
				title: 'publishJobs',
				icon: ''
			}
		]
	},
	{
		path: '/table',
		title: 'table_management',
		icon: 'PieChartOutlined',
		children: [
			{
				path: '/table/newsList',
				title: 'newsList',
				icon: ''
			},
			{
				path: '/table/jobsList',
				title: 'jobsList',
				icon: ''
			},
			{
				path: '/table/accountList',
				title: 'accountList',
				icon: ''
			}
		]
	},
	{
		path: '/chart',
		title: 'chart_management',
		icon: 'CodeSandboxOutlined',
		children: [
			{
				path: '/chart/lineChart',
				title: 'lineChart',
				icon: ''
			},
			{
				path: '/chart/pieChart',
				title: 'pieChart',
				icon: ''
			},
			{
				path: '/chart/histogramChart',
				title: 'histogramChart',
				icon: ''
			},
		]
	},
	{
		path: '/notification',
		title: 'notification',
		icon: 'NotificationOutlined',
	},
	{
		path: '/errorPage',
		title: 'errorPage',
		icon: 'WarningOutlined',
		children: [
			{
				path: '/errorPage/error404',
				title: 'error404',
				icon: ''
			},
			{
				path: '/errorPage/error500',
				title: 'error500',
				icon: ''
			}
		]
	},
	{
		path: '/account',
		title: 'account_management',
		icon: 'UserOutlined',
		children: [
			{
				path: '/account/peronal',
				title: 'personal',
				icon: ''
			},
			{
				path: '/account/addAccount',
				title: 'addAccount',
				icon: ''
			}
		]
	},
	{
		path: '/about',
		title: 'about',
		icon: 'CopyrightOutlined'
	},
];

export default menus;
