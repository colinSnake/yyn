import * as actionTypes from '../constants';

export const switchLanguage = data => ({
    type: actionType.SWITCH_LANGUAGE,
    data
}); 

export const loading = data => {
    type: actionType.LOADING_STATUS,
    data
}
