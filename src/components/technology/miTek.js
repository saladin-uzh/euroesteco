import React from "react"
import {I18n} from "react-i18next"

export class MiTek extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div>
                            <h1>Mitek</h1>
                        </div>
                    )
                }
            </I18n>
        )
    }
}