import React from "react"
import {I18n} from "react-i18next"

export class News extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div>
                            <h1>News</h1>
                        </div>
                    )
                }
            </I18n>
        )
    }
}