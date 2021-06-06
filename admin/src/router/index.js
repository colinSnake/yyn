import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthRoute from './oauthRouter.js';
import Login from '@/pages/Login/index';
import Layout from '@/pages/Layout';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={ Login } exact />
                <AuthRoute path="/" component={ Layout } />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;
