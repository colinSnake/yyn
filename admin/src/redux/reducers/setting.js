import * as actionTypes from '../constants/index';
// 是否固定头部
const showHeader = (state = false, action) => {
    switch (action.type) {
		case actionTypes.FIX_HEADER:
			return action.data;
		default:
			return state;
	}
}
// 是否显示面包屑
const showBreadCrumb = (state = false, action) => {
	switch (action.type) {
		case actionTypes.SWITCH_BREADCRUMB:
			return action.data;
		default:
			return state;	
	}
}

// 是否显示多页签
const showMultiTab = (state = false, action) => {
	switch (action.type) {
		case actionTypes.SWITCH_MULTITAB:
			return action.data;
		default:
			return state;	
	}
}

// 切换主题色
const themeColor = (state = 'rgb(24, 144, 255)', action) => {
	switch (action.type) {
		case actionTypes.SWITCH_THEMECOLOR:
			return action.data;
		default:
			return state;	
	}
} 

// 切换主题风格
const themeStyle = (state = 'light', action) => {
	switch (action.type) {
		case actionTypes.SWITCH_THEMESTYLE:
			return action.data;
		default:
			return state;	
	}
} 

export { showHeader, showBreadCrumb, showMultiTab, themeColor, themeStyle };
