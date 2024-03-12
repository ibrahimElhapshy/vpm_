import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
// import { useEffect } from "react";
import cookies from "js-cookie";

const I18next = () => {
  //start i18next language
  cookies.get("i18next") || "ar";

  window.document.dir = i18n.dir();

  i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
      fallbackLng: "en",
      detection: {
        order: [
          "localStorage",
          "cookie",
          "htmlTag",
          "sessionStorage",
          "navigator",
          "path",
          "subdomain",
        ],
        caches: ["localStorage", "cookie"],
      },
      backend: {
        loadPath: "/locale/{{lng}}/translation.json",
      },
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
  //end i18next language
};

export default I18next;
