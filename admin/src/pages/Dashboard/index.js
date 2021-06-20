import React, { PureComponent, translate } from 'react'
import { connect } from 'react-redux';
import UserInfo from '@/components/userInfo';
import CardItem from '@/components/card';
import DateItem from '@/components/date';
import StandardList from '@/components/List/list';
import { v4 as uuidv4 } from 'uuid';
import '@/assets/css/pages/dashboard.scss';
class Dashboard extends PureComponent {
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
        ],
        listSource: [
            { 
                id: 1,
                avatar: require('@/assets/image/avatar/p1.png').default,
                title: '张三疯发布了一条新的招聘需求',
                desc: `${parseInt(Math.random() * 10 + 1)}天前`,
                loading: false
            },
            { 
                id: 2,
                avatar: require('@/assets/image/avatar/p2.png').default,
                title: '小蓝发布了一条新的新闻',
                desc: `${parseInt(Math.random() * 10 + 1)}天前`,
                loading: false
            },
            { 
                id: 3,
                avatar: require('@/assets/image/avatar/p3.png').default,
                title: '妮儿发布了一条新的招聘需求',
                desc: `${parseInt(Math.random() * 10 + 1)}天前`,
                loading: false
            },
            { 
                id: 4,
                avatar: require('@/assets/image/avatar/p4.png').default,
                title: '工藤新一发布了一条新的招聘新闻',
                desc: `${parseInt(Math.random() * 10 + 1)}天前`,
                loading: false
            },
            { 
                id: 5,
                avatar: require('@/assets/image/avatar/p5.png').default,
                title: '李华发布了一条新的招聘需求',
                desc: `${parseInt(Math.random() * 10 + 1)}天前`,
                loading: false
            }
        ]
    }
    render () {
        const { cardWidth ,cardList,listSource } = this.state;
        return (
            <div className="yyn-dashboard">
                <div className="dashboard-top">
                    <UserInfo />
                    <DateItem />
                </div> 
                <div className="dashboard-content">
                    <div className="content-left">
                        <div className="content-head">
                            <h2>{ translate('study_kownledge') }</h2>
                            <span>{ translate('all_technology') }</span>
                        </div>
                        <div className="content-card">
                            { cardList && cardList.length > 0 && cardList.map(item => (<CardItem key={ item.id } { ...{cardWidth, item}} />))}
                        </div>
                    </div>
                    <div className="content-right">
                        <h2>{ translate('dynamic') }</h2>
                        <StandardList { ...{listSource} }/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
