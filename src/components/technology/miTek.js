import React from "react"
import {I18n} from "react-i18next"

export class MiTek extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div className="container">
                            <div className="row center">
                                <h3>{t("technology.mi-tek.title")}</h3>
                            </div>
                            <div className="row">
                                <h4>{t("technology.mi-tek.caption-1")}</h4>
                                <h5>{t("technology.mi-tek.text-1")}</h5>
                                <h5>{t("technology.mi-tek.text-2")}</h5>
                            </div>
                            <div className="row">
                                <h4>{t("technology.mi-tek.caption-2")}</h4>
                                <h5>{t("technology.mi-tek.text-3")}</h5>
                                <h5>{t("technology.mi-tek.text-4")}</h5>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}