import React from 'react';
import { Layout } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter }  from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom'; 
import routes from '@/router/routes.js';
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
                    <Content style={{ padding: '10px' }}>
                        <Switch location={ location }>
                            {routes.map(item => handleFilter(item.permission) && <Route render={() => <item.component />} key={ item.path}  path={ item.path } />)}
                            <Redirect from="/" exact to="/dashboard" />
                            <Redirect to="/error/404" />
                        </Switch>
                    </Content>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default withRouter(MainContent);
