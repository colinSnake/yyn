/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Magic
 * @Date: 2021-06-03 16:04:49
 * @LastEditors: Magic
 * @LastEditTime: 2021-06-04 22:45:54
 */
import React, { PureComponent, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Avatar, Image, Menu, Dropdown } from 'antd';
// 引入uuid用于生成随机字符串
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18next';
import { MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';
import BasicDrawer from '@/components/basicDrawer';
import Icon from '@/components/icon';
import FullScreen from '@/components/fullScreen';
import '@/assets/css/pages/header.scss';
import themeStyle from '../../components/Setting/themeStyle';

const MenuItem = Menu.Item;

class Header extends PureComponent {
    state = {
        visible: false,
        menuList: [
            {
                id: uuidv4(),
                title: translate('notification'),
                type: 'notification'
            },
            {
                id: uuidv4(),
                title: translate('logout'),
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
        ],
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
            localStorage.setItem('language', type);
        }
    }

    checkHaveAvatar = () => {
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        const { avatar, nickName } = userInfo;
        if(avatar) {
            return (<Avatar src={ avatar } size={ 36 } /> );
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
        this.props.history.push('/notification');
    }

    goLogout(){
        localStorage.removeItem('userInfo');
        localStorage.removeItem('i18nextLng');
        localStorage.removeItem('themeColor');
        this.props.history.push('/login');
    }

    getDropList = () => {
        const { menuList } = this.state;
        return (<Menu>{ menuList.length > 0 && menuList.map(item => (<MenuItem key={ item.id } title={ item.title } onClick={ this.handleClick(item.type)  }>{ item.title }</MenuItem>)) }</Menu>);
    }

    getLanguageList = () => {
        const { languages } = this.state;
        const selectLanguage = localStorage.getItem('i18nextLng') || 'zh'; 
        return (<Menu defaultSelectedKeys={ [ selectLanguage ] }>{ languages.length > 0 && languages.map(item => (<MenuItem key={ item.type } title={ item.title } onClick={ this.onSwitchLanguage(item.type)  }>{ item.title }</MenuItem>)) }</Menu>);
    }

    render(){
        const { showHeader, toggleCollapsed, collapsed, themeStyle } = this.props;
        const { visible } = this.state;
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        const { nickName } = userInfo;
        const classHeader = showHeader ? collapsed ? 'yyn-header header_fixed header_fixed_collapsed' : 'yyn-header header_fixed header_fixed_normal' : 'yyn-header';
        const headerStyle = { background: themeStyle === 'light' ? '#fff' : '#001529' };
        const iconColorStyle = { color: themeStyle === 'light' ? '#001529' : '#fff' };
        return (
            <div className={ classHeader } style={ headerStyle }>
                <div className="header-left">
                    <span className="fold-btn" onClick={ toggleCollapsed }>
                        { collapsed ? <MenuUnfoldOutlined style={ iconColorStyle } /> : <MenuFoldOutlined style={ iconColorStyle } /> }
                    </span>    
                </div>
                <div className="header-right">
                    <div className="yyn-toolbar">
                        <FullScreen />
                        <SettingOutlined style={ iconColorStyle } onClick={ this.openDrawer } />
                    </div>
                    <div className="yyn-avatar">
                        <Dropdown overlay={ this.getDropList() }>
                            { this.checkHaveAvatar() }
                        </Dropdown>
                        <p>{ nickName }</p>
                    </div>
                    <div className="yyn-language">
                        <Dropdown overlay={ this.getLanguageList() }>
                            <span><Icon iconName="#icontranslate" hasColor={ true } /></span>
                        </Dropdown>
                    </div> 
                    <BasicDrawer visible={ visible } closeDrawer={ this.closeDrawer } />
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(Header));
