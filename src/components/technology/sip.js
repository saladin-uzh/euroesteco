import React from "react"
import {I18n} from "react-i18next"

export class Sip extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div className="sip-page App-page">
                            <div className="container">
                                <div className="row center">
                                    <h3 className="caption">{t("technology.sip.title")}</h3>
                                </div>
                                <div className="row ">
                                    <div className="card">
                                        <div className="card-image waves-effect waves-block waves-light">
                                            <img className="activator" src="../../img/List_03_1.png"/>
                                        </div>
                                        <div className="card-content">
                                            <span className="card-title activator grey-text text-darken-4">{t("technology.sip.img")}<i className="material-icons right">more_vert</i></span>
                                            <p><a href="#">This is a link</a></p>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4">{t("technology.sip.img")}<i className="material-icons right">close</i></span>
                                            <p>{t("technology.sip.img-text-1")}</p>
                                            <p>{t("technology.sip.img-text-2")}</p>
                                        </div>
                                    </div>
                                    <h4>{t("technology.sip.caption")}</h4>
                                    <h5>{t("technology.sip.text-1")}</h5>
                                </div>
                                <div className="row">
                                    <h5>{t("technology.sip.text-2")}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}