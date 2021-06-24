import { combineReducers } from 'redux';
import { showHeader, showBreadCrumb, themeColor, themeStyle } from './setting';
export default combineReducers({ showHeader, showBreadCrumb, themeColor, themeStyle })
