import React, { Component } from 'react'
import { connect } from 'react-redux';
import UserInfo from '@/components/userInfo';
import CardItem from '@/components/card';
import DateItem from '@/components/date';
import { v4 as uuidv4 } from 'uuid';
import '@/assets/css/pages/dashboard.scss';
class Dashboard extends Component {
    state = {
        cardWidth: 300,
        cardList: [
            {
                id: uuidv4(),
                icon: '#iconhtml', 
                title: 'HTML',
                desc: '超文本标记语言是一种用于创建网页的标准标记语言。'
            },
            {
                id: uuidv4(),
                icon: '#iconCSS',
                title: 'CSS',
                desc: '层叠样式表是一种用来表现HTML或XML等文件样式的计算机语言。'
            },
            {
                id: uuidv4(),
                icon: '#iconjs',
                title: 'JavaScript',
                desc: 'JavaScript是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。'
            },
            {
                id: uuidv4(),
                icon: '#iconicon-vue',
                title: 'Vue',
                desc: 'Vue是一套用于构建用户界面的渐进式框架。'
            },
            {
                id: uuidv4(),
                icon: '#iconreact',
                title: 'React',
                desc: 'React 是一个用于构建用户界面的 JAVASCRIPT 库。'
            },
            {
                id: uuidv4(),
                icon: '#iconantd',
                title: 'Antd',
                desc: '基于Ant Design 设计体系的 React UI 组件库,用于研发企业级中后台产品。'
            },
        ]
    }
    render () {
        const { cardWidth ,cardList } = this.state;
        return (
            <div className="yyn-dashboard">
                <div className="dashboard-top">
                    <UserInfo />
                    <DateItem />
                </div> 
                <div className="dashboard-content">
                    <div className="content-left">
                        <div className="content-head">
                            <h3>学习以下知识</h3>
                            <span>全部技术栈</span>
                        </div>
                        <div class="content-card">
                            { cardList && cardList.length > 0 && cardList.map(item => (<CardItem { ...{cardWidth, item}} />))}
                        </div>
                    </div>
                    <div className="content-right">
                        
                    </div>
                </div>
                <div className="dashboard-footer">
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
