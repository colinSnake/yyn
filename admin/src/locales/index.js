import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next';
import { languages } from './language.js'; //先引入多语言配置函数
const defaultLanguage = 'zh'; 

i18n.use(LanguageDetector) // 获取当前浏览器语言
.use(initReactI18next)
.init({
    resources: languages,
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
        escapeValue: false,
    },
}).then(t => {
    console.log('18n ready');
});

export default i18n;