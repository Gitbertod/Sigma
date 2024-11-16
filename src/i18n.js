import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Carga las traducciones desde archivos JSON
  .use(LanguageDetector) // Detecta automáticamente el idioma
  .use(initReactI18next) // Vincula i18next con react-i18next
  .init({
    fallbackLng: 'en', // Idioma por defecto si no se detecta o configura el idioma
    interpolation: {
      escapeValue: false, // React ya escapa los valores por defecto
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Ruta para cargar los archivos de traducción
    },
  });

export default i18n;
