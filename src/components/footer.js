import React from "react"
import {I18n} from "react-i18next"
import {Files} from "../App"
// import {GoogleMap} from "../stateless/googleMap"
// import * as M from "materialize-css";
// import * as $ from "jquery";

export class Footer extends React.Component {
    render() {
        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <footer className="page-footer">
                            <div className="container">
                                <div className="row col l12">
                                    <div className="col l7">
                                        <h3 className="grey-text text-lighten-3 left-align">Have some questions?</h3>
                                        <p className="col l10 offset-l1 right grey-text text-lighten-2 right-align">
                                            Sawtooth eel Atlantic herring Asian carps scorpionfish, koi lake trout sea toad.
                                            Yellow perch; lemon sole yellowtail sardine</p>
                                    </div>
                                    <div className="col l5">
                                        <h3 className="white-text left-align">Contact Us:</h3>
                                        <ul className="row col l12">
                                            <li className="col l2 center-align"><i className="material-icons">call</i></li>
                                            <li className="col l2 center-align"><i className="material-icons">near_me</i></li>
                                            <li className="col l2 center-align"><i className="material-icons">email</i></li>
                                            <li className="col l2 center-align">
                                                <i
                                                    className="material-icons modal-trigger"
                                                    data-target="modal1">
                                                    location_on</i>
                                            </li>
                                        </ul>
                                        <address className="addr col l12 right-align">
                                            Varosh, Transkarpatia, Ukraine<br/>
                                            Straight outta Vatutina & New District
                                        </address>
                                    </div>
                                </div>
                                <div className="row">
                                    <form method="POST">
                                        <input type="tel" id="tel" name="tel" placeholder="Phone number" required={true}/>
                                        <button id="submit" type="submit">Submit</button>
                                    </form>
                                    <div className="footer-copyright">
                                        <span>Dev'ed by:</span>
                                        <a href="#!">Jonco Lab<br/>Web Development</a>
                                    </div>
                                </div>
                                <img
                                    className="footer-background responsive-img"
                                    src={Files.footerBg}
                                    alt="Modern house"/>
                            </div>
                        </footer>
                    )
                }
            </I18n>
        )
    }
}