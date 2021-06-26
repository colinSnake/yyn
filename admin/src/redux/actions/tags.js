import * as actionType from '../constants';

// 添加tag
export const addTag = data => ({
    type: actionType.ADD_TAG,
    data
})

// 删除tag
export const removeTag = data => ({
    type: actionType.REMOVE_TAG,
    data
})

// 重置tag
export const clearTag = data => ({
    type: actionType.CLEAR_TAG,
    data
})
