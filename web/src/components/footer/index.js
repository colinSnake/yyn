/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-14 07:32:15
 * @LastEditors: Magic
 * @LastEditTime: 2021-05-05 10:14:45
 */
import React, { Component } from 'react'

import './index.scss'

export default class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copyRight: 'Copyright ©  2020  ybsjyyn.com  All Rights Reserved.'
        }
    }

    render() {
        return (
            <div className="yyn-footer">
                <div className="yyn-admin">
                    运营登录：
                    <a className="yyn-op" href="/#">运营平台</a>
                    <a className="yyn-mp" href="/#">商户平台</a>
                </div>
                <div className="yyn-copyright">
                    <p>{this.state.copyRight}</p>
                    <p>腾云公司 版权所有&nbsp;&nbsp;客服电话：400-88-96301</p>
                </div>
                <div className="yyn-icp">
                    <p>
                        <img src={require('../../assets/images/yyn-icp.png')} alt="icp" />
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53011202000757">滇公网安备 53011202000757号</a>
                    </p>
                    <p><a href="http://www.beian.miit.gov.cn/">滇ICP备18000709号</a></p>
                </div>
            </div>
        )
    }
}
