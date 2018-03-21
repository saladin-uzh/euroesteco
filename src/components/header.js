import React from "react"
import {Link} from "react-router-dom"
import {I18n} from "react-i18next"

export const Header = () => {
    return (
        <I18n>
            {
                (t, {i18n}) => (
                    <nav className="grey darken-4">
                        <div className="nav-wrapper">
                            <a className="brand-logo center valign-wrapper" href="_index.html">
                                <img width="125px" className="responsive-img" src="img/logo.png" alt="EuroEstEco logo"/>
                            </a>
                            <ul>
                                <li><Link to="/">Main</Link></li>
                                <li><Link to="/about-us">AboutUs</Link></li>
                                <li><Link to="/sip-technology">SIP</Link></li>
                                <li><Link to="/contact-us">ContactUs</Link></li>
                                <li onClick={() => i18n.changeLanguage("ru")}>Russian</li>
                                <li onClick={() => i18n.changeLanguage("sp")}>Spanish</li>
                            </ul>
                        </div>
                    </nav>
                )
            }
        </I18n>
    )
};