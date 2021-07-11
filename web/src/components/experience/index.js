/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-14 07:23:39
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 07:12:00
 */
import React, { Component } from 'react'

import './index.scss'

export default class experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            downloadList: [
                {
                    title: '一部手机游云南',
                    icon: require('../../assets/images/yyn-android.png'),
                    code: [
                        require('../../assets/images/yyn-downloadCode.png')
                    ],
                    desc: 'Android下载',
                    from: '前往应用宝下载体验'
                },
                {
                    title: '一部手机游云南',
                    icon: require('../../assets/images/yyn-apple.png'),
                    code: [
                        require('../../assets/images/yyn-downloadCode.png')
                    ],
                    desc: 'iPhone下载',
                    from: '前往App Store下载体验'
                },
                {
                    title: '游云南直播',
                    icon: require('../../assets/images/yyn-apple.png'),
                    code: [
                        require('../../assets/images/yyn-ec1.png'),
                        require('../../assets/images/yyn-ec2.png'),
                        require('../../assets/images/yyn-ec3.png'),
                        require('../../assets/images/yyn-ec4.png'),
                        require('../../assets/images/yyn-ec5.png')
                    ],
                    desc: '小程序体验',
                    from: '扫码体验'
                }
            ]
        }
    }

    render() {
        const listItem = this.state.downloadList.map((item, index) => {
            return (<li key={index}>
                <div className="item-block">
                    <h3>{item.title}</h3>
                    <img className="item-icon" src={item.icon} alt="图标" />
                    <div className="item-code">
                        <img src={item.code[0]} alt="二维码" />
                    </div>
                </div>
                <div className="item-download">
                    <h2>{item.desc}</h2>
                    <p>{item.from}</p>
                </div>
            </li>)
        })
        return (
            <div className="yyn-experience" id="experience">
                <div className="experience-title">
                    <h1>产品体验</h1>
                    <p>多渠道体验，一部手机游云南</p>
                </div>
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}
