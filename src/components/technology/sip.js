import React from "react"
import {I18n} from "react-i18next"
import * as M from "materialize-css"
import * as $ from "jquery"

export class Sip extends React.Component {
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
                        <main className="technology-page App-page">
                            <div className="sip-page App-page tech-block section">
                                <div className="container">

                                    <div className="row center">
                                        <h3 className="caption flow-text grey-text text-darken-4 col m4 push-m4 center-align">{t("technology.sip.title")}</h3>
                                    </div>

                                    <div className="row">
                                        <div className="card col m3 grey lighten-4 z-depth-2">
                                            <div className="card-image waves-effect waves-block waves-light">
                                                <img className="activator" src="../../img/List_03_1.png"/>
                                            </div>
                                            <div className="card-content">
                                                <span className="card-title activator grey-text text-darken-4 flow-text">{t("technology.sip.img")}<i className="material-icons right">more_vert</i></span>
                                            </div>
                                            <div className="card-reveal">
                                                <span className="card-title grey-text text-darken-4 flow-text">{t("technology.sip.img")}<i className="material-icons right">close</i></span>
                                                <p className="flow-text">{t("technology.sip.img-text-1")}</p>
                                                <p className="flow-text">{t("technology.sip.img-text-2")}</p>
                                            </div>
                                        </div>
                                        <h4 className="flow-text col m8 push-m1 grey-text text-darken-3">{t("technology.sip.caption")}</h4>
                                        <p className="flow-text col m8 push-m1 grey-text text-darken-3">{t("technology.sip.text-1")}</p>
                                    </div>

                                    <div className="row">
                                        <h5 className="flow-text col s12 grey-text text-darken-3">{t("technology.sip.text-2")}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="section row">
                                <ul className="collapsible popout col s12 l6 offset-l3">
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
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}