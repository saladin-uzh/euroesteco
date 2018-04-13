import React from "react"
import {I18n} from "react-i18next"

export class Sip extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div className="sip-page App-page section">
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
                    )
                }
            </I18n>
        )
    }
}