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
                            <div className="container">
                                <div className="row">
                                    <h1 className="main-caption white-text col l8 pull-l4 left">{t("test.font")}</h1>
                                    <h1 className="name white-text col l8 pull-l4 right-align">Euro EstEco</h1>
                                    <p className="sub-caption grey-text text-lighten-2 col l6 pull-l6 left flow-text">
                                        Yellow perch banjo catfish goosefish: triplefin blenny greenling scorpionfish.
                                        Redfish minnow, Black mackerel pompano dolphinfish.
                                    </p>
                                    <img
                                        className="main-background responsive-img"
                                        src={Files.mainBg}
                                        alt="Main background"/>
                                </div>
                            </div>
                        </Fragment>
                    )
                }
            </I18n>
        )
    }
}