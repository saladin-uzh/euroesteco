import React from "react"
import {I18n} from "react-i18next"

export class ContactUs extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="contact-us-page App-page">
                            <h1>ContactUs Page</h1>
                        </main>
                    )
                }
            </I18n>
        )
    }
}