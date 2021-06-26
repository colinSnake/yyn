import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter }  from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom'; 
import routes from '@/router/routes.js';
import BreadCrumb from './breadCrumb';
import TagItem from './tags';
import CopyRight from '@/components/copyRight';
const { Content } = Layout;

const MainContent = props => {
    const { location, showBreadCrumb, showMultiTab } = props;

    const handleFilter = permission => {
        if(!permission){
            return true;
        }
        return false;
    }
    return (
        <div className="yyn-mainContent">
            { showBreadCrumb ? <BreadCrumb /> : null}
            { showMultiTab ? <TagItem /> : null }
            <TransitionGroup>
                <CSSTransition classNames="fade" key={ location.pathname} timeout={ 500 }>
                    <Content style={{ height: '100%' }}>
                        <Switch location={ location }>
                            {routes.map(item => handleFilter(item.permission) && <Route render={() => <item.component />} key={ item.path}  path={ item.path } />)}
                            <Redirect from="/" exact to="/dashboard" />
                            <Redirect to="/errorPage/404" />
                        </Switch>
                        <CopyRight />
                    </Content>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        showBreadCrumb: state.showBreadCrumb,
        showMultiTab: state.showMultiTab
    }
}

export default connect(mapStateToProps)(withRouter(MainContent));
