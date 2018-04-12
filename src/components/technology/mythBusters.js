import React from "react"
import {I18n} from "react-i18next"

export class MythBusters extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div>
                            <h1>MythBusters</h1>
                        </div>
                    )
                }
            </I18n>
        )
    }
}