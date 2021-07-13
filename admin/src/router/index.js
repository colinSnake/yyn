import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthRouter from '@/pages/Auth/authRouter.js';
import Login from '@/pages/Login/index';
import Layout from '@/pages/Layout';
import Loading from '@/components/loading';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                {/* 路由未加载出来显示loading页 */}
                <Suspense fallback={ <Loading /> }>
                    <Route path="/login" component={ Login } exact />
                    <AuthRouter path="/" component={ Layout } />
                </Suspense>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;
