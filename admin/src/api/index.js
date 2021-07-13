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

