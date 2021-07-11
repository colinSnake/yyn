/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 17:50:51
 * @LastEditors: Magic
 * @LastEditTime: 2021-05-05 10:17:46
 */
import React, { Component } from 'react'

import './index.scss'

import Platform from '../../components/platform'
import Strategy from '../../components/strategy'
import Experience from '../../components/experience'
import Merchant from '../../components/merchant'
import Tengyun from '../../components/tengyun'

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleNav(index) {
        console.log(index, 'home')
    }
    render() {
        return (
            <div className="yyn-wrapper">
                <div className="yyn-headerWrapper">
                    <div className="yyn-home">
                        <div className="yyn-title">
                            <h1>云南旅游权威平台</h1>
                            <p>提升游客旅行体验，规范旅游市场生态</p>
                            <button>立即体验</button>
                        </div>
                        <div className="yyn-swiper">

                        </div>
                        <div className="yyn-cloud">
                            <div className="cloud-big"></div>
                        </div>
                    </div>
                </div>
                <Platform />
                <Strategy />
                <Experience />
                <Merchant />
                <Tengyun />
            </div>
        )
    }
}
