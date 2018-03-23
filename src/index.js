import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {BrowserRouter} from "react-router-dom"
import i18n from "i18next"
import {reactI18nextModule} from "react-i18next"
import Backend from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import * as $ from "jquery"

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        callbackLng: 'ru',
        ns: ['translations'],
        defaultNs: 'translations',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root"),
);

registerServiceWorker();