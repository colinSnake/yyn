import { combineReducers } from 'redux';
import { showHeader, showBreadCrumb, showMultiTab, themeColor, themeStyle } from './setting';
export default combineReducers({ showHeader, showBreadCrumb, showMultiTab, themeColor, themeStyle })
