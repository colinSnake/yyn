import React, { PureComponent, translate } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Logo from '@/components/logo';
import { addTag } from '@/redux/actions/tags';
import {
    DashboardOutlined,
    ProjectOutlined,
    BarChartOutlined,
    PieChartOutlined,
    CodeSandboxOutlined,
    NotificationOutlined,
    WarningOutlined,
    UserOutlined,
    CopyrightOutlined
} from '@ant-design/icons';

import menus from '@/router/menus';
import routes from '@/router/routes';

const MenuItem = Menu.Item;
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends PureComponent {
    checkPermission = permission => { // 获取permission认证通过的menu
        let userInfo = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};
        const { type } = userInfo;
        if (!permission || permission === type){
            return true;
        }
        return false;
    }

    handleToAddTag = (menuItem, parent) => {
        const { addTag } = this.props;
        return () => {
            const { path, title } = menuItem;
            console.log(path,title, 'sideMenu')
            if (routes && routes.length > 0){
                routes.forEach(item => {
                    if (item.path === path){
                        let obj = { path, title: translate(title) }
                        addTag(parent ? Object.assign({}, obj, { parent: parent.title }) : obj);
                    }
                })
            }
        }
    }

    getIcon = (iconName) => {
        switch(iconName){
            case 'DashboardOutlined':
                return <DashboardOutlined />;
            case 'ProjectOutlined':
                return <ProjectOutlined />;
            case 'BarChartOutlined': 
                return <BarChartOutlined />;
            case 'PieChartOutlined':
                return <PieChartOutlined />;
            case 'CodeSandboxOutlined':
                return <CodeSandboxOutlined />
            case 'NotificationOutlined':
                return <NotificationOutlined />;
            case 'WarningOutlined':
                return <WarningOutlined />
            case 'UserOutlined':
                return <UserOutlined />;
            case 'CopyrightOutlined':
                return <CopyrightOutlined />
            default: 
                return null;
        }
    }

    renderMenu = list => {
        if (list && list.length > 0){
            return list.map(item => {
                if (item.children && item.children.length > 0){
                    return (
                        this.checkPermission(item.permission) && (
                            <SubMenu key={ item.path } title={ translate(item.title) } icon={ this.getIcon(item.icon) }>
                                { this.renderMenu(item.children) }
                            </SubMenu>
                        )
                    )
                }
                return (
                    this.checkPermission(item.permission) && (
                        <MenuItem key={ item.path } icon={ this.getIcon(item.icon) }>
                            <Link to={ item.path } onClick={ this.handleToAddTag(item) }>{ translate(item.title) }</Link>
                        </MenuItem>
                    )
                )
            })
        }
    }

    render(){
        const { collapsed, history, themeStyle } = this.props;
        const menuSelected = history.location.pathname; // 导航栏地址
        const menuOpened = `/${menuSelected.split('/')[1]}`; // 默认展开tab
        return (
            <Sider trigger={ null } collapsible collapsed={ this.props.collapsed } theme={ themeStyle } className="yyn-sidebar">
                <Logo collapsed={ this.props.collapsed } />
                <Menu
                    defaultSelectedKeys={ [menuSelected] }
                    selectedKeys={ [menuSelected] }
                    defaultOpenKeys={ [menuOpened] }
                    theme={ themeStyle }
                    mode="inline"
                    collapsed={ collapsed.toString() }
                >
                    { this.renderMenu(menus) }
                </Menu>
            </Sider>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeStyle: state.themeStyle
    }
}

const mapDispatchToProps = dispatch => ({
    addTag: data => {
        dispatch(addTag(data));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideMenu));
