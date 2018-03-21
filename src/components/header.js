import React from "react"
import {Link} from "react-router-dom"
import {I18n} from "react-i18next"

const logo = "img/logo.png";

export const Header = () => {
    return (
        <I18n>
            {
                (t, {i18n}) => (
                    <nav className="grey darken-3">
                        <div className="nav-wrapper container">
                            <a className="brand-logo" href="/">
                                <img width="110px" className="responsive-img" src={logo} alt="EuroEstEco logo"/>
                            </a>
                            <ul className="right">
                                <li><Link to="/">Main</Link></li>
                                <li><Link to="/about-us">AboutUs</Link></li>
                                <li><Link to="/sip-technology">SIP</Link></li>
                                <li><Link to="/contact-us">ContactUs</Link></li>
                                <li>
                                    <a id="ru" className="btn-small waves-light waves-effect light-green darken-3" onClick={() => i18n.changeLanguage('ru')}>Russian</a>
                                    <a id="sp" className="btn-small waves-light waves-effect light-green darken-3" onClick={() => i18n.changeLanguage('sp')}>Spanish</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )
            }
        </I18n>
    )
};