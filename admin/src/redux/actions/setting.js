import * as actionType from '../constants/index';

export const fixHeader = data => ({
    type: actionType.FIX_HEADER,
    data  
});

export const switchBreadCrumb = data => ({
    type: actionType.SWITCH_BREADCRUMB,
    data
});

export const switchThemeStyle = data => ({
    type: actionType.SWITCH_THEMESTYLE,
    data
});

export const switchThemeColor = data => ({
    type: actionType.SWITCH_THEMECOLOR,
    data
});
