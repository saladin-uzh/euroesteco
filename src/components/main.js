import React, {Component} from "react"
import {I18n} from "react-i18next"

export class Main extends Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="container">
                            <h1 className="main-caption">{t("test.font")}<br/><span className="name">Euro EstEco</span></h1>
                            <h3 className="sub-caption">Yellow perch banjo catfish goosefish: triplefin blenny greenling scorpionfish. Redfish minnow, Black mackerel pompano dolphinfish.</h3>
                            <img
                                className="main-image img-background"
                                src="../img/List_01.jpg"
                                alt="Main background"/>
                        </main>
                    )
                }
            </I18n>
        )
    }
}