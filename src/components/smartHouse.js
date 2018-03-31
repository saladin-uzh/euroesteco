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
                            <div className="container content">

                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}