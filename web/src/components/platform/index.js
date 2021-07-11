/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 21:46:50
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 07:20:46
 */
import React, { Component } from 'react'

import './index.scss'

export default class platform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            features: [
                {
                    icon: require('../../assets/images/yyn-picon-1.png'),
                    title: '权威',
                    content: '一键投诉，无忧退货，政府服务无处不在'
                },
                {
                    icon: require('../../assets/images/yyn-picon-2.png'),
                    title: '全面',
                    content: '看16州市慢直播，订线路查攻略，玩透云南'
                },
                {
                    icon: require('../../assets/images/yyn-picon-3.png'),
                    title: '方便',
                    content: '刷脸入园，语音导览，拍照识花，体验自由自在'
                },
                {
                    icon: require('../../assets/images/yyn-picon-4.png'),
                    title: '优惠',
                    content: '景区门票特价，租车包车免异地换车费，真划算'
                }
            ]
        }
    }
    render() {
        const listItem = this.state.features.map((item, index) => {
            return (<li key={index}>
                <dl>
                    <dt><img src={item.icon} alt="图标" /></dt>
                    <dd>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </dd>
                </dl>
            </li>)
        })
        return (
            <div className="yyn-featuresWrapper" id="about">
                <h1>平台介绍</h1>
                <ul className="yyn-features">
                    {listItem}
                </ul>
            </div>
        )
    }
}
