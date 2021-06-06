// 引入createStore用于创建store对象，applyMiddleware用于支持thunk
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk';
import reducers from './reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger();
const store = createStore(
    reducers,
    process.env.NODE_ENV === 'development' ? composeEnhancers(applyMiddleware(thunk, loggerMiddleware)) : composeEnhancers(applyMiddleware(thunk))
);

export default store;
