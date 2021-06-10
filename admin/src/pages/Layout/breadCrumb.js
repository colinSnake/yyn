import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb, Icon} from 'antd';
import menus from '@/router/menus';
class BreadCrumb extends Component {
    makeBreadCrumbData = (location, list) => {
        let result = [];
        if(list && list.length > 0){
            if(location && location.pathname)
            // console.log(this.getRouteArray(location.pathname, list, result))
            this.getRouteArray(location.pathname, list, result);
            if(result) return result;
        }
    }

    getRouteArray = (pathName, data, routesList) => {
        data.forEach(item => {
            if(pathName && pathName.indexOf(item.path) > -1){
                routesList.push(item);
                if(item.children && item.children.length > 0){
                    this.getRouteArray(pathName, item.children, routesList);
                }else{
                    console.log(routesList)
                    return routesList;
                }
            }
        })
    }

    renderBreadCrumb = (route, params, routes, paths) => {
        console.log(route, params, routes, paths, 999)
        return <span>{route.path}</span>
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps, nextState, '8848')
        if(nextProps !== nextState){
            return false
        }else{
            return true
        }
        
    }

    // componentDidMount(){
    //     const { location } = this.props;
    //     this.makeBreadCrumbData(location, menus);
    //     console.log(routesList, 999)
    // }
    
    render(){
        const { location } = this.props;
        const routes = this.makeBreadCrumbData(location, menus);
        console.log('render--', routes)
        if(!routes || routes.length === 0) return null;
        const itemRender = (route, params, routes, paths) => {
            console.log(route, params, routes, paths, 999)
            return <span>{route.path}</span>
        }
        return (
            <div className="yyn-breadCrumb">
                <BreadCrumb routes={ routes } itemRender={ itemRender } />
            </div>
        )
    }
}

export default withRouter(BreadCrumb);
