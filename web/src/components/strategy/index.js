/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 22:45:14
 * @LastEditors: Magic
 * @LastEditTime: 2020-09-15 07:12:45
 */
import React, { Component } from 'react'

import './index.scss'

export default class strategy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            strategyList: [
                {
                    title: '引进来',
                    content: `引进诚信商家，打造信赖品牌，<br/>
                            疏通多种渠道，创建人文、自然高价值，<br/>
                            方便游客出行，促进旅游生态发展。`,
                    bgUrl: require('../../assets/images/yyn-s1.png')
                },
                {
                    title: '走出去',
                    content: `统一政府管理，输出云南旅游新形象，<br/>
                            丰富传播渠道、创造人文、特产高价值、<br/>
                            深化产业联动，反哺旅游生态发展。`,
                    bgUrl: require('../../assets/images/yyn-s2.png')
                }
            ]
        }
    }

    render() {
        const listItem = this.state.strategyList.map((item, index) => {
            const divStyle = {
                background: `url(${item.bgUrl}`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: `100% 100%`
            }
            return (<li key={index} style={divStyle}>
                <div className="item-block">
                    <h3>{item.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                </div>
            </li>)
        })
        return (
            <div className="yyn-strategyWrapper" >
                <h1>两大策略-促进产业发展</h1>
                <ul className="yyn-strategy">
                    {listItem}
                </ul>
            </div>
        )
    }
}
