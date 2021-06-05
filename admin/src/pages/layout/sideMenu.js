import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from '@/pages/components/logo';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    EditOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

import menus from '@/router/menus';
import routes from '@/router/routes';

const MenuItem = Menu.Item;
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends Component {
    constructor(props){
        super(props);
    }
    state = {
        clientHeight: document.documentElement.clientHeight || document.body.clientHeight
    }

    checkPermission = permission => { // 获取permission认证通过的menu
        let userPermission = JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).type;
        if (!permission || permission === userPermission){
            return true;
        }
        return false;
    }

    handleToAddTag = (menuItem, parent) => {
        const { path, title } = menuItem;
        if (routes && routes.length > 0){
            routes.forEach(item => {
                if (item.path === path){
                    let obj = { path, title, component: item.component }
                    this.props.addTag(parent ? Object.assign({}, obj, { parent: parent.title }) : obj);
                }
            })
        }
    }

    getIcon = (iconName) => {
        switch(iconName){
            case 'AppstoreOutlined':
                return <AppstoreOutlined />;
            case 'MenuUnfoldOutlined':
                return <MenuUnfoldOutlined />;
            case 'EditOutlined':
                return <EditOutlined />;
            case 'MenuFoldOutlined':
                return <MenuFoldOutlined />;
            case 'PieChartOutlined':
                return <PieChartOutlined />;
            case 'DesktopOutlined':
                return <DesktopOutlined />;
            case 'ContainerOutlined':
                return <ContainerOutlined />;
            case 'MailOutlined':
                return <MailOutlined />;
            default: 
                return <AppstoreOutlined />;
        }
    }

    renderMenu = list => {
        if (list && list.length > 0){
            return list.map(item => {
                if (item.children && item.children.length > 0){
                    return (
                        this.checkPermission(item.permission) && (
                            <SubMenu key={ item.path } title={ React.translate(item.title) } icon={ this.getIcon(item.icon) }>
                                { this.renderMenu(item.children) }
                            </SubMenu>
                        )
                    )
                }
                return (
                    this.checkPermission(item.permission) && (
                        <MenuItem key={ item.path } icon={ this.getIcon(item.icon) }>
                            <Link to={ item.path } onClick={ (item) => this.handleToAddTag }>{ React.translate(item.title) }</Link>
                        </MenuItem>
                    )
                )
            })
        }
    }

    render(){
        // let defaultPathName = this.props.history.location.pathname;
        // let defaultMenuItem = [`/${defaultPathName.split('/')[1]}`];
        let defaultMenuItem = ['/dashboard'];
        return (
            <Sider style={ { height: this.state.clientHeight + 'px'} } trigger={ null } collapsible collapsed={ this.state.collapsed } theme="dark" className="yyn-sidebar">
                <Logo />
                <Menu
                    defaultSelectedKeys={ defaultMenuItem }
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={ this.props.collapsed }
                >
                    { this.renderMenu(menus) }
                </Menu>
            </Sider>
        )
    }
}

export default SideMenu;
