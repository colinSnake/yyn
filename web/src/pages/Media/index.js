/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:27:35
 * @LastEditors: Magic
 * @LastEditTime: 2021-05-05 10:16:30
 */
import React, { Component } from 'react'

import './index.scss'

export default class media extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '云南只有一个景区叫云南',
            desc: `实现 “ 游客体验自由自在、政府服务无处不在 ”<br/>
                重构云南旅游新生态，引领和促进旅游产业转型升级`,
            newsList: [
                {
                    title: '“一部手机游云南” 云南旅游即将全面跨入智慧时代',
                    from: '人民网',
                    createDate: '2018年03月07日',
                    cover: require('../../assets/images/yyn-m1.png'),
                    content: '“一部手机游云南”依托“互联网+旅游服务”，通过游云南App、微信公众号和微信小程序，全面覆盖游客在云南的游前、游中、游后的各项需求，满足和提升游客吃住行游娱购的需求和体验，并通过诚信体系、投诉平台的建设，让游客全流程省心、安心、放心。',
                    original: `http://travel.people.com.cn/n1/2018/0307/c41570-29854165.html`
                },
                {
                    title: '“一部手机游云南”上线试运行 开创智慧旅游新时代',
                    from: '腾讯网',
                    createDate: '2018年03月02日',
                    cover: require('../../assets/images/yyn-m2.png'),
                    content: '“一部手机游云南”定位为“中国第一、世界一流”，由云南省省长阮成发牵头力推，旨在整治旅游行业乱象、推动旅游产业升级。',
                    original: `http://union.china.com.cn/txt/2018-03/09/content_40246947.htm`
                },
                {
                    title: '“一部手机游云南”10个试点景区各有特色',
                    from: '中国网',
                    createDate: '2018年03月09日',
                    cover: require('../../assets/images/yyn-m3.png'),
                    content: '通过手机，远程观看腾冲火山的实时直播，感受扑面而来的沸水翻滚；线上购票，线下不到1秒即可“刷脸”进入云南民族村，领略少数民族的风情；拿出手机扫一扫，除了照下云南旅途中的风景，还能识别风花雪月背后的故事。',
                    original: `http://union.china.com.cn/txt/2018-03/09/content_40246947.htm`
                },
                {
                    title: '“一部手机游云南”试运行 遇到旅游问题“一键投诉”',
                    from: '网易新闻',
                    createDate: '2018年03月09日',
                    cover: require('../../assets/images/yyn-m4.png'),
                    content: '云南，高寒雪山与热带雨林并存，少数民族人文景观独特，旅游资源十分丰富。这么多的玩场，来云南到底怎么玩？用“一部手机游云南”就够了！',
                    original: `http://news.163.com/18/0303/07/DBV4LBTP000187VG.html`
                }
            ]
        }
    }
    render() {
        const listItem = this.state.newsList.map((item, index) => {
            return (<li key={index}>
                <div className="news-item">
                    <h2>{item.title}</h2>
                    <div className="news-subTitle">
                        <span className="tag">{item.from}</span>
                        <span className="time">{item.createDate}</span>
                    </div>
                    <img src={item.cover} alt="封面图" />
                    <p>{item.content}</p>
                    <a href={item.original} target="_blank" rel="noopener noreferrer">查看原文 ></a>
                </div>
            </li>)
        })
        return (
            <div className="yyn-wrapper">
                <div className="yyn-banner yyn-mediabg">
                    <div className="yyn-bannerContent">
                        <h2>{this.state.title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: this.state.desc }}></p>
                    </div>
                </div>
                <ul className="yyn-news">
                    {listItem}
                </ul>
            </div>
        )
    }
}
