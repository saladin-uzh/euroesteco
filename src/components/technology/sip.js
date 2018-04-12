import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../../App"
import {Files} from "../../App"

export class Sip extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="sip-page App-page" style={backgroundImg(Files.sipPg)}>
                            <div className="container">
                                <div className="row">
                                    <div>
                                        First card
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        Second card
                                    </div>
                                </div>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}