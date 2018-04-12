import React from "react"
import {I18n} from "react-i18next"

export class Gallery extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="gallery-page App-page">
                            <h1>Gallery page</h1>
                        </main>
                    )
                }
            </I18n>
        )
    }
}