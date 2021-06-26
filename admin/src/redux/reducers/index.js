import { combineReducers } from 'redux';
import { showHeader, showBreadCrumb, showMultiTab, themeColor, themeStyle } from './setting';
import tagList from './tags';
export default combineReducers({ showHeader, showBreadCrumb, showMultiTab, themeColor, themeStyle, tagList })
