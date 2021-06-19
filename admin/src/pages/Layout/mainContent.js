import React from 'react';
import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter }  from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom'; 
import routes from '@/router/routes.js';
import CopyRight from '@/components/copyRight';
const { Content } = Layout;

const MainContent = props => {
    const { location } = props;

    const handleFilter = permission => {
        if(!permission){
            return true;
        }
        return false;
    }
    return (
        <div className="yyn-mainContent">
            <TransitionGroup key={ location.pathname}>
                <CSSTransition timeout={ 500 }>
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

export default withRouter(MainContent);
