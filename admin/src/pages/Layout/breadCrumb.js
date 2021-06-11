import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Breadcrumb, Icon} from 'antd';
import menus from '@/router/menus';
class BreadCrumb extends Component {
    state = {
        routes: []
    }
    makeBreadCrumbData = (location, list) => {
        if(list && list.length > 0){
            if(location && location.pathname)
            // console.log(this.getRouteArray(location.pathname, list, result))
            this.getRouteArray(location.pathname, list);
        }
    }

    getRouteArray = (pathName, data) => {
        data.forEach(item => {
            if(pathName && pathName.indexOf(item.path) > -1){
                this.setState({routes: [item]});
                if(item.children && item.children.length > 0){
                    this.getRouteArray(pathName, item.children);
                }else{
                    return true;
                }
            }
        })
    }

    renderBreadCrumb = (route, params, routes, paths) => {
        console.log(route, params, routes, paths, 999)
        return <span>{route.path}</span>
    }

    componentDidMount(){
        console.log('componentDidMount--')
        const { location } = this.props;
        this.makeBreadCrumbData(location, menus);
        

    }
    
    render(){
        const { routes } = this.state;
        console.log('render---', routes)
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
