/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Magic
 * @Date: 2021-06-03 16:04:49
 * @LastEditors: Magic
 * @LastEditTime: 2021-06-04 22:45:54
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Avatar, Image, Menu, Dropdown } from 'antd';
// 引入uuid用于生成随机字符串
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18next';
import { MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';
import BasicDrawer from '@/components/basicDrawer';
import { switchLanguage } from '@/redux/actions/index'; 
import Icon from '@/components/icon';
import '@/assets/css/header.scss';

const MenuItem = Menu.Item;

class Header extends Component {
    state = {
        visible: false,
        menuList: [
            {
                id: uuidv4(),
                title: React.translate('notification'),
                type: 'notification'
            },
            {
                id: uuidv4(),
                title: React.translate('logout'),
                type: 'logout'
            }
        ],
        languages: [
            {
                title: '简体中文',
                type: 'zh',
                icon: '',
            },
            {
                title: 'English',
                type: 'en',
                icon: '',
            },
        ]
    }

    openDrawer = () => {
        this.setState({ visible: true });
    }

    closeDrawer = () => {
        this.setState({ visible: false });
    }

    onSwitchLanguage = (type) => {
        return () => {
            i18n.changeLanguage(type);
        }
    }

    checkHaveAvatar = () => {
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        const { avatar, nickName } = userInfo;
        if(avatar) {
            return (<Avatar src={ <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={ 40 } />} /> );
        }else{
            return (<Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size={ 40 } gap={ 4 }>
                { nickName }
            </Avatar>);
        }
    }

    handleClick = (type) => {
        return () => {
            switch (type) {
                case 'notification':
                    this.goNotification();
                    break;
                case 'logout':
                    this.goLogout();
                    break;
                default:
                    break;
            }
        }
    }

    goNotification(){
        // this.props.history.push('/notification');
    }

    goLogout(){
        localStorage.removeItem('userInfo');
        this.props.history.push('/login');
    }

    getDropList = () => {
        const { menuList } = this.state;
        return (<Menu>{ menuList.length > 0 && menuList.map(item => (<MenuItem key={ item.id } title={ item.title } onClick={ this.handleClick(item.type)  }>{ item.title }</MenuItem>)) }</Menu>);
    }

    getLanguageList = () => {
        const { languages } = this.state;
        return (<Menu>{ languages.length > 0 && languages.map(item => (<MenuItem key={ item.type } title={ item.title } onClick={ this.onSwitchLanguage(item.type)  }>{ item.title }</MenuItem>)) }</Menu>);
    }

    render(){
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        const { nickName } = userInfo;
        return (
            <div className="yyn-header">
                <div className="header-left">
                    <span className="fold-btn" onClick={ this.props.toggleCollapsed }>
                        { React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined) }
                    </span>    
                </div>
                <div className="header-right">
                    <div className="yyn-toolbar">
                        <SettingOutlined onClick={ this.openDrawer } />
                    </div>
                    <div className="yyn-avatar">
                        <Dropdown overlay={ this.getDropList() }>
                            { this.checkHaveAvatar() }
                        </Dropdown>
                        <p>{ nickName }</p>
                    </div>
                    <div className="yyn-language">
                        <Dropdown overlay={ this.getLanguageList() }>
                            <span><Icon iconName="#icontranslate" /></span>
                        </Dropdown>
                    </div> 
                    <BasicDrawer visible={ this.state.visible } closeDrawer={ this.closeDrawer } curLanguage={ this.state.checked } />
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    switchLanguage: data => {
        dispatch(switchLanguage(data));
    }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(Header));
