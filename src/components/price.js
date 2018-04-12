import React from "react"
import {I18n} from "react-i18next"

export class Price extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="price-page App-page">
                            <h1>Price Page</h1>
                        </main>
                    )
                }
            </I18n>
        )
    }
}