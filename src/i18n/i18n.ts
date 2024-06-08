import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import CommonsFr from './locales/fr/Commons.json';
import CommonsEn from './locales/en/Commons.json';

export const ns = ['Commons'];
export const supportedLngs = ['fr', 'en'];

const resources = {
  fr: {
    Commons: CommonsFr
  },
  en: {
    Commons: CommonsEn
  }
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'fr',
    defaultNS: 'Commons',
    ns,
    keySeparator: '.',
    interpolation: {escapeValue: false},
    supportedLngs,
    resources
  });

export default i18n;
