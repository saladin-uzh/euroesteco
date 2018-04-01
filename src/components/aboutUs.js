import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../App"
import {Files} from "../App"
import * as M from "materialize-css"
import * as $ from "jquery"

export class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        M.Collapsible.init($(".collapsible"));
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="about-us-page App-page" style={backgroundImg(Files.aboutUsBg)}>
                            <div className="container about-us-content row">
                                <ul className="collapsible popout col l6">
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">av_timer</i>{t("about-us.header.first")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.first")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="icons">☺</i>{t("about-us.header.second")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.second")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="icons">☻</i>{t("about-us.header.third")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.third")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="icons">♥</i>{t("about-us.header.fourth")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.fourth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">account_balance</i>{t("about-us.header.fifth")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.fifth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">broken_image</i>{t("about-us.header.sixth")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.sixth")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="icons">♦</i>{t("about-us.header.seventh")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.seventh")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">home</i>{t("about-us.header.eights")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.eights")}</div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header"><i className="material-icons">euro_symbol</i>{t("about-us.header.ninth")}</div>
                                        <div  className="collapsible-body">{t("about-us.body.ninth")}</div>
                                    </li>
                                </ul>
                                <p className="text white-text col xl5 push-xl1 left-align">{t("about-us.caption")}</p>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}