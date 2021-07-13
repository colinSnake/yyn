import React from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';

const AuthRouter = ({ component: Component, ...rest }) => {
	const token = localStorage.getItem('token');
	return <Route {...rest} render={props => (token ? <Component {...props} /> : <Redirect to={'/login'} />)} />;
};

export default withRouter(AuthRouter);
