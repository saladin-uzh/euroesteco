import React from "react"
import {I18n} from "react-i18next"

export class Projects extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="projects-page App-page">
                            <h1>Projects page</h1>
                        </main>
                    )
                }
            </I18n>
        )
    }
}