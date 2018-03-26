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
                                        <p className="sub-caption grey-text text-lighten-2 col l6 pull-l6 left">
                                            Yellow perch banjo catfish goosefish: triplefin blenny greenling scorpionfish.
                                            Redfish minnow, Black mackerel pompano dolphinfish.
                                        </p>
                                        <img
                                            className="main-background responsive-img"
                                            src={Files.mainBg}
                                            alt="Main background"/>
                                    </div>
                                </div>
                            </main>
                            <div className="container main-about-us">
                                <ul className="collapsible popup">
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">av_timer</i>{t("main.about-us.header.first")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.first")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons"></i>{t("main.about-us.header.second")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.second")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">i</i>{t("main.about-us.header.third")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.third")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">local_florist</i>{t("main.about-us.header.fourth")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.fourth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">account_balance</i>{t("main.about-us.header.fifth")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.fifth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">broken_image</i>{t("main.about-us.header.sixth")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.sixth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">ac_unit</i>{t("main.about-us.header.seventh")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.seventh")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">home</i>{t("main.about-us.header.eights")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.eights")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">euro_symbol</i>{t("main.about-us.header.ninth")}</div>
                                        <div className="collapsible-body">{t("main.about-us.body.ninth")}</div>
                                    </li>
                                </ul>
                            </div>
                        </Fragment>
                    )
                }
            </I18n>
        )
    }
}