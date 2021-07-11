/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-14 07:29:57
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-14 08:19:49
 */
import React, { Component } from 'react'

import './index.scss'

export default class tengyun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: [
                {
                    name: '公共事务',
                    url: ''
                },
                {
                    name: '平台运营',
                    url: ''
                },
                {
                    name: '产品技术',
                    url: ''
                },
                {
                    name: '商务拓展',
                    url: ''
                },
                {
                    name: '市场品牌策划',
                    url: ''
                },
                {
                    name: '电商运营',
                    url: ''
                },
                {
                    name: '设计师',
                    url: ''
                }
            ]
        }
    }
    goDetail(url) {

    }
    render() {
        const listItem = this.state.jobs.map((item, index) => {
            return (<li key={index} onClick={() => this.goDetail(item.url)}>{item.name}</li>)
        })
        return (
            <div className="yyn-tengyun">
                <div className="tengyun-title">
                    <h1>腾云之上，方见浩瀚</h1>
                    <p>立即加入腾云！</p>
                </div>
                <ul className="tengyun-block">
                    {listItem}
                </ul>
                <button>岗位详情</button>
            </div>
        )
    }
}
