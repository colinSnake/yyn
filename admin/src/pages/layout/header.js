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
import { Avatar, Image } from 'antd';
import i18n from 'i18next';
import { MenuUnfoldOutlined, MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';
import BasicDrawer from '@/components/basicDrawer';
import { switchLanguage } from '@/redux/actions/index'; 
import '@/assets/css/header.scss';

class Header extends Component {
    state = {
        visible: false,
        checked: false,
        user: 'Ming'
    }

    openDrawer = () => {
        const { visible } = this.state;
        this.setState({ visible: true });
    }

    closeDrawer = () => {
        const { visible } = this.state;
        this.setState({ visible: false });
    }

    onSwitchLanguage = (status) => {
        const { checked } = this.state;
        this.setState({checked: status});
        i18n.changeLanguage(status ? 'en' : 'zh');
    }

    checkHaveAvatar = () => {
        const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
        const { avatar } = userInfo;
        if(avatar) {
            return (<Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} /> );
        }else{
            return (<Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size="large" gap={ 4 }>
                { this.state.user }
            </Avatar>);
        }
    }

    render(){
        return (
            <div className="yyn-header">
                <div className="header-left">
                    <span className="fold-btn" onClick={ this.props.toggleCollapsed }>
                        {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </span>    
                </div>
                <div className="header-right">
                    <div className="yyn-toolbar">
                        <SettingOutlined onClick={ this.openDrawer } />
                    </div>
                    <div className="yyn-avatar">
                        { this.checkHaveAvatar() } 
                    </div>
                    <BasicDrawer visible={ this.state.visible } closeDrawer={ this.closeDrawer } curLanguage={ this.state.checked } onSwitchLanguage={ this.onSwitchLanguage } />
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
