import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const OauthRouter = ({ component: Component, ...rest }) => {
	const isLogin = true;
	return <Route {...rest} render={props => (isLogin ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(OauthRouter);
