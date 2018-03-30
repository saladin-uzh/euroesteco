import React from "react"
import {I18n} from "react-i18next"

export class Footer extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <footer className="page-footer grey darken-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col l6 s12">
                                        <h5 className="white-text">{t("footer.second")}</h5>
                                        <address className="grey-text text-lighten-4">
                                            17200 Palafrugell, Girona,<br/>
                                            Marcal De La Trinxeria 48a 4-3
                                        </address>
                                    </div>
                                    <div className="col l4 offset-l2 s12">
                                        <h5 className="white-text">{t("footer.first")}</h5>
                                        <ul>
                                            <li className="grey-text text-lighten-3">+34 678 20 77 40</li>
                                            <li className="grey-text text-lighten-3">+421 (91) 140 57 77</li>
                                            <li className="grey-text text-lighten-3">+380 (50) 432 32 02</li>
                                            <li className="grey-text text-lighten-3">admin@euroesteco.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-copyright">
                                <div className="container">
                                    © 2014 Copyright Text
                                    <a className="blue-text right" href="#!">Developed by<br/>Jonco Lab</a>
                                </div>
                            </div>
                        </footer>
                    )
                }
            </I18n>
        )
    }
}

