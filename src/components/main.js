import React, {Fragment} from "react"
import {I18n} from "react-i18next"
import {Files} from "../App"
import * as M from "materialize-css"
import * as $ from "jquery"

export class Main extends React.Component {
    componentDidUpdate() {
        M.Collapsible.init($(".collapsible"));
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <Fragment>
                            <main className="App-page">
                                <div className="container">
                                    <div className="row">
                                        <h1 className="main-caption white-text col l8 pull-l4 left">{t("test.font")}</h1>
                                        <h1 className="name white-text col l8 pull-l4 right-align">Euro EstEco</h1>
                                        <p className="sub-caption grey-text text-lighten-2 col l8 pull-l4 left">{t("main.about-us.caption")}</p>
                                        <img
                                            className="main-background responsive-img"
                                            src={Files.mainBg}
                                            alt="Main background"/>
                                    </div>
                                </div>
                            </main>
                        </Fragment>
                    )
                }
            </I18n>
        )
    }
}