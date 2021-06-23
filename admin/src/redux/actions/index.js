import * as actionType from '../constants/index';

export const switchLanguage = data => ({
    type: actionType.SWITCH_LANGUAGE,
    data
}); 

export const loading = data => {
    type: actionType.LOADING_STATUS,
    data
}
