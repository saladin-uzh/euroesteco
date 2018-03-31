import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../App"
import {Files} from "../App"

export class SmartHouse extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="smart-house-page App-page" style={backgroundImg(Files.smartHouseBg)}>
                            <div className="container content white-text">
                                <p className="caption flow-text">{t("smart-house.caption")}</p>
                                <p className="sub-caption flow-text">{t("smart-house.sub-caption")}</p>
                                <p className="text flow-text">{t("smart-house.text-1")}</p>
                                <p className="text flow-text">{t("smart-house.text-2")}</p>
                                <p className="text flow-text">{t("smart-house.text-3")}</p>
                                <p className="caption-conclusion flow-text">{t("smart-house.caption-conclusion")}</p>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}