import axios from './request';

/*
* @param username [String]
* @param password [String or Number]
* @description: 登录接口
*/

export const getUserInfo = (username, password) => {
    const data = { username, password }
    return axios.post('admin/login', data);
}

/*
* @param category [String]
* @param password [String or Number]
* @description: 上传工作招聘接口
*/

export const publishJobs = (param) => {
    return axios.post('admin/jobs/insert', param);
}

