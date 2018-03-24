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
                            <div className="main-row row">
                                <h1 className="main-caption white-text col l7 pull-l5 left">{t("test.font")}</h1>
                                <h1 className="name white-text col l6 pull-l5 right-align">Euro EstEco</h1>
                                <h3 className="sub-caption grey-text text-lighten-2 col l6 pull-l6 left">
                                    Yellow perch banjo catfish goosefish: triplefin blenny greenling scorpionfish.
                                    Redfish minnow, Black mackerel pompano dolphinfish.
                                </h3>
                                <img
                                    className="main-background responsive-img"
                                    src={Files.mainBg}
                                    alt="Main background"/>
                            </div>
                            <div className="hello-world-row row">
                                <h1>Hello World!</h1>
                            </div>
                        </Fragment>
                    )
                }
            </I18n>
        )
    }
}