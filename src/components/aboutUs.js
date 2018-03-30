import React from "react"
import {I18n} from "react-i18next"
import {Files} from "../App"
import * as M from "materialize-css"
import * as $ from "jquery"

export class AboutUs extends React.Component {
    componentDidUpdate() {
        M.Collapsible.init($(".collapsible"));
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="about-us-page App-page">
                            <div className="container about-us-content">
                                <ul className="collapsible popout">
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">av_timer</i>{t("main.about-us.header.first")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.first")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons"></i>{t("main.about-us.header.second")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.second")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">i</i>{t("main.about-us.header.third")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.third")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">local_florist</i>{t("main.about-us.header.fourth")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.fourth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">account_balance</i>{t("main.about-us.header.fifth")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.fifth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">broken_image</i>{t("main.about-us.header.sixth")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.sixth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">ac_unit</i>{t("main.about-us.header.seventh")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.seventh")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">home</i>{t("main.about-us.header.eights")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.eights")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">euro_symbol</i>{t("main.about-us.header.ninth")}</div>
                                        <div  className="collapsible-body">{t("main.about-us.body.ninth")}</div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                className="about-us-background responsive-img"
                                src={Files.footerBg}
                                alt="Modern house"/>
                        </main>
                    )
                }
            </I18n>
        )
    }
}