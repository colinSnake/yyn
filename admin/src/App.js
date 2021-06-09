import React from 'react';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from './redux/store';
import './assets/css/index.scss';
import '@/assets/iconfont/iconfont.css';

// 引入多语言
import { useTranslation } from 'react-i18next';
import './locales/index';

function App() {
  const { t } = useTranslation();
  React.translate = t;
  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  )
}
export default App;
