import React from "react"
import {I18n} from "react-i18next"

export class Footer extends React.Component {
    render() {
        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <footer className="container row white-text">
                            <div className="contacts col l4 push-l1">
                                <h3>Contact Us:</h3>
                                <ul className="flow-text">
                                    <li className="">+34 678 20 77 40</li>
                                    <li className="">+421 911 405 777</li>
                                    <li className="">+380 50 432 32 02</li>
                                    <li className="">admin@euroesteco.com</li>
                                </ul>
                            </div>
                            <address className="addr col l4 pull-l1 white-text right-align right">
                                17200 Palafrugell. Girona.<br/>
                                Marcal De La Trinxeria 48a 4-3
                            </address>
                        </footer>
                    )
                }
            </I18n>
        )
    }
}

