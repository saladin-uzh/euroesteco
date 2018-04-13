import React from "react"
import {I18n} from "react-i18next"

export class MythBusters extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div className="
                        tech-block
                        mythbuster-screen
                        section">
                            <div className="container">
                                <div className="row">
                                    <h3 className="
                                    caption
                                    flow-text
                                    grey-text
                                    text-darken-4
                                    col m4
                                    push-m4
                                    center-align">
                                        {t("technology.myth-busters.title")}
                                    </h3>
                                </div>

                                <div className="row">
                                    <ul className="collapsible col m8 s12">
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-1")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-1")}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-2")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-2")}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-3")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-3")}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-4")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-4")}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-5")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-5")}</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">
                                                <i className="material-icons">+</i>
                                                {t("technology.myth-busters.header-6")}</div>

                                            <div className="collapsible-body">
                                                <span>{t("technology.myth-busters.body-6")}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}