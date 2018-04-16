import React from "react"
import {I18n} from "react-i18next"
import * as M from "materialize-css"
import * as $ from "jquery"
import {Files} from "../App"

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        M.Carousel.init($(".carousel"), {
            indicators: true,
            fullWidth: true
        });
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="gallery-page App-page section container row">
                            <div className="carousel carousel-slider col s12 m8 offset-m2 white-text">
                                <span className="carousel-item"><img className="responsive-img" src={Files.smartHouseBg}/></span>
                                <span className="carousel-item"><img className="responsive-img" src={Files.mainBg}/></span>
                                <span className="carousel-item"><img className="responsive-img" src={Files.aboutUsBg}/></span>
                                <span className="carousel-item"><img className="responsive-img" src={Files.sipPg}/></span>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}