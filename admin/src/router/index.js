import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/index';
import Main from '../pages/layout/index';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Main } />
                <Route path="/login" component={ Login } exact />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;
