import React from "react"
import {I18n} from "react-i18next"

export const Test = () => {
    return (
        <I18n ns="translations">
            {
                (t) => (
                    <div id="test">
                        Test
                    </div>
                )
            }
        </I18n>
    )
};