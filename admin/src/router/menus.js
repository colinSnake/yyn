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
				path: '/table/news',
				title: 'newsList',
				icon: ''
			},
			{
				path: '/table/jobs',
				title: 'jobsList',
				icon: ''
			},
			{
				path: '/table/account',
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
				path: '/chart/line',
				title: 'line_chart',
				icon: ''
			},
			{
				path: '/chart/pie',
				title: 'pie_chart',
				icon: ''
			},
			{
				path: '/chart/histogram',
				title: 'histogram_chart',
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
				path: '/errorPage/404',
				title: 'error_404',
				icon: ''
			},
			{
				path: '/errorPage/500',
				title: 'error_500',
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
				path: '/account/add',
				title: 'add_child_account',
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
