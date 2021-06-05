/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Magic
 * @Date: 2021-06-03 16:04:49
 * @LastEditors: Magic
 * @LastEditTime: 2021-06-04 22:45:54
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import '@/assets/css/header.scss';

class Header extends Component {
    state = {
        collapsed: false
    }

    toggleCollapsed = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    }

    render(){
        return (
            <div className="yyn-header">
                <div className="header-left">
                    <span class="fold-btn" onClick={ this.toggleCollapsed }>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                    </span>    
                </div>
                <div className="header-right">
                </div>
            </div>
        )
    }
} 

export default Header;
