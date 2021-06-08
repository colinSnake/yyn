const menus = [
	{
		path: '/dashboard',
		title: 'dashboard',
		icon: 'DashboardOutlined'
	},
	{
		path: '/article',
		title: 'article',
		icon: 'BarsOutlined',
		children: [
			{
				path: '/article/publishNews',
				title: 'publishNews',
				icon: 'FormOutlined'
			},
			{
				path: '/article/publishJobs',
				title: 'publishJobs',
				icon: 'DollarOutlined'
			}
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
				icon: 'ExclamationCircleOutlined'
			},
			{
				path: '/errorPage/500',
				title: 'error_500',
				icon: 'CloseCircleOutlined'
			}
		]
	},
	{
		path: '/about',
		title: 'about',
		icon: 'WhatsAppOutlined'
	},
];

export default menus;
