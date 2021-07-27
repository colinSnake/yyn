import axios from './request';

/*
* @param [String] username
* @param [String or Number] password
* @return [Object] Promise
* @description: 登录接口
*/

export const getUserInfo = (username, password) => {
    const data = { username, password }
    return axios.post('admin/login', data);
}

/*
* @param [String] username
* @param [String or Number] password
* @return [Object] Promise
* @description: 登录接口
*/

export const uploadFile = file => {
    return axios.post('admin/upload', file);
}

/***** 表单 *****/ 
/*
* @param [Object] param
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const publishNews = param => {
    return axios.post('admin/news/insert', param);
}

/*
* @param [Object] param
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const publishJobs = param => {
    return axios.post('admin/jobs/insert', param);
}

/*
* @param [Object] param
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const addAccount = param => {
    return axios.post('admin/account/insert', param);
}

/***** 表格 *****/
/*
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const getJobList = () => {
    return axios.get('admin/jobs/list');
}
