import * as actionTypes from '../constants/index';
const fixHeaderStatus = false;
const fixHeader = (state = fixHeaderStatus, action) => {
    switch (action.type) {
		case actionTypes.FIX_HEADER:
			return action.data;
		default:
			return state;
	}
}


export { fixHeader };
