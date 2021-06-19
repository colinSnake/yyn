import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Avatar, Tag, Divider } from 'antd';
import TabItem from '@/components/List/tabs';
import { ContactsOutlined, ControlOutlined, HomeOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { getRandomColor, getRandomLetter } from '@/utils';
import '@/assets/css/pages/personal.scss';
class Personal extends PureComponent {
    state = {
        userInfo: {},
        tagList: ['爱旅行', '散步遛狗', '偶尔恰一顿火锅', 'Coding','四川小伙', '我不辣～', '多读书', 'Music'],
        teamList: [
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '高大上逼格天团'
            },
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '大家都是吴彦祖'
            },
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '计算机真好玩'
            },
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '低调奢华有内涵'
            },
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '一人一狗一世界'
            },
            {
                id: uuidv4(),
                bgColor: getRandomColor(),
                iconTitle: getRandomLetter(),
                content: '日常搬砖二块五'
            }
        ],
        tabList: [
            { id: '1', title: '项目' },
            { id: '2', title: '应用' }
        ]
    }

    componentDidMount(){
        this.getUserInfo();
    }

    getUserInfo() {
        let userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
        userInfo && this.setState({ userInfo });
    }

    render(){
        const { userInfo, tagList, teamList, tabList } = this.state;
        const { themeColor } = this.props;
        return (
            <div className="yyn-personal">
                <div className="personal-left">
                    <div className="personal-info">
                        <Avatar size={ 80 } src={ userInfo.avatar || require('@/assets/image/defaultAvatar.jpg').default } /> 
                        <h2>{ userInfo.nickName }</h2>
                        <p className="motto">{ userInfo.motto }</p>
                        <div className="basic-info">
                            <p><ContactsOutlined />{ userInfo.position }</p>
                            <p><ControlOutlined />{ userInfo.department }</p>
                            <p><HomeOutlined />{ userInfo.address }</p>
                        </div>
                    </div>
                    <div className="personal-tags">
                        <Divider>个性标签</Divider>
                        <div className="tagList">
                            { tagList && tagList.map(item => (<Tag key={ uuidv4() } style={ { marginBottom: '8px' } } color={ themeColor }>{ item }</Tag>)) }
                        </div>
                    </div>
                    <div className="personal-teams">
                        <Divider>团队</Divider>
                        <div className="team-info">
                            { teamList.length > 0 && teamList.map(item => (
                                <dl key={ item.id }>
                                    <dt style={ { background: item.bgColor } }>{ item.iconTitle }</dt>
                                    <dd>{ item.content }</dd>
                                </dl>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="personal-right">
                    <TabItem tabList={ tabList }/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
}


export default connect(mapStateToProps)(Personal);
