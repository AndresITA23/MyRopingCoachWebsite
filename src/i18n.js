import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Carga traducciones vía HTTP
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React ya se encarga de esto
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
