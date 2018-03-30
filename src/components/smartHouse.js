import React from "react"
import {I18n} from "react-i18next"
import {Files} from "../App"

export class SmartHouse extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="smart-house-page App-page">
                            <div className="container content">

                            </div>
                            <img
                                className="smart-house-bg responsive-img"
                                src={Files.smartHouseBg}
                                alt="Smart House example"/>
                        </main>
                    )
                }
            </I18n>
        )
    }
}