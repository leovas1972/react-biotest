import i18n, { init } from "i18next";
import {initReactI18next} from 'react-i18next';
import languagedetector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18n
.use(backend)
.use(languagedetector)
.use(initReactI18next)
init({
    debug: true,
    fallbackLang: 'ru',
})

export default i18n;