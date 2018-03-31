import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import {BrowserRouter} from "react-router-dom"
import i18n from "i18next"
import {reactI18nextModule} from "react-i18next"
import Backend from "i18next-xhr-backend"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"



i18n
    .use(Backend)
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

if (i18n.language !== "es") i18n.changeLanguage("es");

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);

registerServiceWorker();