import en from './lang_en.json';
import bn from './lang_bn.json';

export const translate = (text) => {
  const lang = localStorage.getItem('lang');

  if (!lang || lang === 'en') {
    return en[text] ? en[text] : text;
  }

  if (lang === 'bn') {
    return bn[text] ? bn[text] : text;
  }
};

export const setDeviceLang = (lang) => {
  localStorage.setItem('lang', lang);
};

export const langs = {
  en: 'English',
  bn: 'Bengali',
};
