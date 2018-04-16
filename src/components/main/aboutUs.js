import React from "react"
import {I18n} from "react-i18next"
import {backgroundImg} from "../../App"
import {Files} from "../../App"

export class AboutUs extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="about-us-screen App-page" style={backgroundImg(Files.aboutUsBg)}>
                            <div className="container about-us-content row">
                                <p className="text flow-text white-text col s7 left-align">{t("about-us.caption")}</p>
                                <img
                                    src="../../img/awful-logo.png"
                                    alt={"Alternative logo with caption"}
                                    className="responsive-img col s3 push-s1"/>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}