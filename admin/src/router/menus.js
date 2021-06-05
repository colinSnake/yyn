const menus = [
	{
		path: '/dashboard',
		title: 'dashboard',
		icon: 'AppstoreOutlined'
	},
	{
		path: '/icon',
		title: 'form',
		icon: 'MenuUnfoldOutlined',
		children: [
			{
				path: '/form/editor',
				title: 'editor',
				icon: 'EditOutlined'
			},
		]
	},
];

export default menus;