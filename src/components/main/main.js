import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../../App"
import {Files} from "../../App"

export class Main extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="main-screen App-page" style={backgroundImg(Files.mainBg)}>
                            <div className="container content">
                                <div className="row">
                                    <h1 className="main-caption white-text col l8 pull-l4 left">{t("main.introduction")}</h1>
                                    <h1 className="name white-text col l8 pull-l4 right-align">Euro EstEco</h1>
                                    <p className="sub-caption grey-text text-lighten-2 col l8 pull-l4 left">{t("main.slogan")}</p>
                                </div>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}