/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-13 18:07:19
 * @LastEditors: Magic
 * @LastEditTime: 2021-05-05 11:00:43
 */
import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import './index.scss'

export default class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                {
                    id: '#home',
                    name: '首页',
                    url: '/home',
                    offsetTop: 0
                },
                {
                    id: '#about',
                    name: '平台介绍',
                    url: '/home',
                    offsetTop: 0
                },
                {
                    id: '#experience',
                    name: '产品体验',
                    url: '/home',
                    offsetTop: 0
                },
                {
                    id: '#merchant',
                    name: '诚信商家',
                    url: '/home',
                    offsetTop: 0
                },
                {
                    id: '',
                    name: '加入我们',
                    url: '/job',
                    offsetTop: 0
                },
                {
                    id: '',
                    name: '媒体报道',
                    url: '/media',
                    offsetTop: 0
                }
            ],
            navIndex: 0,
        }
    }
    onChangeNav(item, index) {
        this.setState({
            navIndex: index
        })
        if (item.id) {
            let offsetTop = item.id === '#home' ? 0 : item.offsetTop ? item.offsetTop : document.querySelector(item.id).offsetTop;
            const newNavList = this.state.navList.map((current, cIndex) => {
                if (current.id === item.id) {
                    item.offsetTop = offsetTop;
                }
                return current;
            })
            this.setState({
                navList: newNavList
            })
            window.scrollTo({
                top: index > 3 ? 0 : offsetTop,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
    render() {
        const listItem = this.state.navList.map((item, index) => {
            return (<li key={index} className={this.state.navIndex === index ? 'active' : ''} onClick={() => this.onChangeNav(item, index)}>
                <Link to={item.url}>{item.name}</Link>
            </li>)
        })
        return (
            <div className="nav">
                <ul>
                    {listItem}
                </ul>
            </div>
        )
    }
}
