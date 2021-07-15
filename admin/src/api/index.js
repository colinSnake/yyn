import axios from './request';

/*
* @param username [String]
* @param password [String or Number]
* @return [Object] Promise
* @description: 登录接口
*/

export const getUserInfo = (username, password) => {
    const data = { username, password }
    return axios.post('admin/login', data);
}

/*
* @param param [Object]
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const publishJobs = (param) => {
    return axios.post('admin/jobs/insert', param);
}

/*
* @return [Object] Promise
* @description: 发布招聘信息接口
*/

export const getJobList = () => {
    return axios.get('admin/jobs/list');
}

