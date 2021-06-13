import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import menus from '@/router/menus';
import '@/assets/css/pages/breadCrumb.scss';
class BreadCrumb extends Component {
    makeBreadCrumbData = (location, list) => {
        let routesList = [];
        if(list && list.length > 0){
            if(location && location.pathname)
                this.getRouteArray(location.pathname, list, routesList);
        }
        return routesList;
    }

    getRouteArray = (pathName, data, routesList) => {
        data.forEach(item => {
            if(pathName && pathName.indexOf(item.path) > -1){
                routesList.push(item);
                if(item.children && item.children.length > 0){
                    this.getRouteArray(pathName, item.children, routesList);
                }else{
                    return routesList;
                }
            }
        })
    }
    
    render(){
        const { location } = this.props;
        const routes = this.makeBreadCrumbData(location, menus);
        if(!routes || routes.length === 0) return null;
        const itemRender = (route, params, routes, paths) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last ? (<span>{ React.translate(route.title) }</span>) : (<Link to={ route.path }>{ React.translate(route.title) }</Link>);
        }
        return (
            <div className="yyn-breadCrumb">
                <Breadcrumb routes={ routes } itemRender={ itemRender } />
            </div>
        )
    }
}

export default withRouter(BreadCrumb);
