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

const themeColor = (state = 'rgb(24, 144, 255)', action) => {
	switch (action.type) {
		case actionTypes.SWITCH_THEMECOLOR:
			return action.data;
		default:
			return state;	
	}
} 

export { showHeader, showBreadCrumb, themeColor };
