import React, {Component} from "react"
import {I18n} from "react-i18next"
import {Calculator} from "./calculator"

export class Main extends Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div>
                            <h1>Hello Main page!</h1>
                            <h2>{t("test.hello")}</h2>
                            <Calculator/>
                        </div>
                    )
                }
            </I18n>
        )
    }
}