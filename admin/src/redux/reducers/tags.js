import * as actionType from '../constants';

const tagList = (state = [], action) => {
    let { type, data } = action;
    let arr = [];
    switch(type){
        case actionType.ADD_TAG:
            arr = [...state, data];
            const newArr = arr.reduce((prev, next) => {
                if(prev && prev.length > 0){
                    const isExist = prev.some(item => item.path === next.path);
                    !isExist && prev.push(next);
                }else{
                    prev.push(next);
                }
                return prev;
            }, []);
            return newArr && newArr.length > 0 ? newArr : arr;
        case actionType.REMOVE_TAG:
            arr = state.filter(item => item.path !== data.path);
            return arr;
        case actionType.CLEAR_TAG:
            return [];
        default:
            return state;
    }
}

export default tagList;
