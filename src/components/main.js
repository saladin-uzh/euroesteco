import React, {Fragment} from "react"
import {I18n} from "react-i18next"
import {Files} from "../App"

export class Main extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <Fragment>
                            <h1 className="main-caption">
                                {t("test.font")}
                                <br/>
                                <span className="name">Euro EstEco</span>
                            </h1>
                            <h3 className="sub-caption">
                                Yellow perch banjo catfish goosefish: triplefin blenny greenling scorpionfish.
                                Redfish minnow, Black mackerel pompano dolphinfish.
                            </h3>
                            <img
                                className="main-image img-background"
                                src={Files.mainBg}
                                alt="Main background"/>
                        </Fragment>
                    )
                }
            </I18n>
        )
    }
}