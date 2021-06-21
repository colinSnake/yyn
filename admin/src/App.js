import React, {translate} from 'react';
import { Provider } from 'react-redux';
import Router from './router/index';
import store from './redux/store';
import { notification } from 'antd';
import './assets/css/index.scss';
import '@/assets/iconfont/iconfont.css';

// 引入多语言
import { useTranslation } from 'react-i18next';
import './locales/index';


function App() {
  const { t } = useTranslation();
  const notice = (params, type) => { // 消息通知
    const basicMessage = { 
        top: 24,
        placement: 'topRight',
        message: translate('notice_title'), 
        duration: 3 
    };

    const args = Object.assign({}, basicMessage, params);
    notification[type || 'open'](args);
  }
  React.translate = t;
  React.notice = notice;
  return (
    <Provider store={ store }>
      <Router />
    </Provider>
  )
}
export default App;
