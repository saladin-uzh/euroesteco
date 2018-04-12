import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../../App"
import {Files} from "../../App"

export class SmartHouse extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="smart-house-page App-page" style={backgroundImg(Files.smartHouseBg)}>
                            <div className="container content white-text">
                                <div className="row">
                                    <p className="caption col xl12">
                                        {t("technology.smart-house.caption")}<br/>
                                        <p className="sub-caption col xl11 push-xl1">{t("technology.smart-house.sub-caption")}</p>
                                    </p>
                                </div>
                                <div className="row text-card"><p className="text card-panel col xl4 l4">{t("technology.smart-house.text-1")}</p></div>
                                <div className="row text-card"><p className="text card-panel col xl4 push-xl4 l4">{t("technology.smart-house.text-2")}</p></div>
                                <div className="row text-card">
                                    <p className="text card-panel col xl4 l4">{t("technology.smart-house.text-3")}</p>
                                    <p className="caption-conclusion col xl6 push-xl2">{t("technology.smart-house.caption-conclusion")}</p>
                                </div>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}