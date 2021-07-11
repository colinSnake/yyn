/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-14 07:29:34
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-14 23:44:06
 */
import React, { Component } from 'react'

import './index.scss'

export default class merchant extends Component {
    constructor(props) {
        super(props)
        this.state = {
            business: [
                {
                    title: '政府指导背书，更放心',
                    content: '由政府指导，通过诚信验证意味着服务质量经过层层筛选，并得到认可，消费者更放心',
                    icon: require('../../assets/images/yyn-star.png'),
                    status: 1
                },
                {
                    title: '整合流量资源，更赚钱',
                    content: '通过渠道合作等运营手段，为整个平台补充线上流量资源，和您共享互联网流量，赚取更多利益',
                    icon: require('../../assets/images/yyn-book.png'),
                    status: 0
                },
                {
                    title: '统一支付方式，更方便',
                    content: '通过诚信认证，商家可获得诚信二维码用以支持线下用户扫码支付，资金由富滇银行托管，安全方便',
                    icon: require('../../assets/images/yyn-money.png'),
                    status: 0
                },
            ]
        }
    }

    render() {
        const listItem = this.state.business.map((item, index) => {
            return (<li key={index}>
                <dl>
                    <dt><img src={item.icon} alt="图标" className={item.status ? 'star' : ''} /></dt>
                    <dd>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                    </dd>
                </dl>
            </li>)
        })
        return (
            <div className="yyn-merchant" id="merchant">
                <div className="merchant-title">
                    <h1>诚信商家</h1>
                    <p>成为诚信商家，打造游客信任品牌</p>
                </div>
                <ul>
                    {listItem}
                </ul>
                <button>申请入驻</button>
            </div>
        )
    }
}
