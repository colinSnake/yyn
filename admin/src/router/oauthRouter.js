import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const OauthRouter = ({ component: Component, ...rest }) => {
	const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};
	const { isLogin } = userInfo;
	return <Route {...rest} render={props => (isLogin ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(OauthRouter);
