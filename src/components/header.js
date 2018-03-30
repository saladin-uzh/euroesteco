import React from "react"
import {Link} from "react-router-dom"
import {I18n} from "react-i18next"
import i18n from "i18next"
import {Files} from "../App"
import * as $ from "jquery"

const languageStyles = {
    textTransform: "capitalize",
    letterSpacing: 1.25
};

const largeHeader = {
    minHeight: "12.5vh"
};

const logoStyles = {
    maxHeight: "100%",
    height: "100%",
    display: "block"
};

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.handleLangChange = this.handleLangChange.bind(this);
    }
    componentDidUpdate() {
        let currentLang = i18n.language;
        $(`#${currentLang}`).addClass("disabled");
    }
    handleLangChange(e) {
      let newLang = e.target.id;
      $("span.disabled").removeClass("disabled");
      i18n.changeLanguage(newLang);
      $(`#${newLang}`).addClass("disabled")
    }
    render() {
        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <header className="App-header">
                            <nav className="grey darken-3" style={largeHeader}>
                                <div className="nav-wrapper container">
                                    <a style={logoStyles} className="brand-logo" href="/">
                                        <img style={logoStyles} className="responsive-img" src={Files.logo} alt="EuroEstEco logo"/>
                                    </a>
                                    <ul className="right">
                                        <li><Link to="/">Main</Link></li>
                                        <li><Link to="/about-us">AboutUs</Link></li>
                                        <li><Link to="/sip-technology">SIP</Link></li>
                                        <li><Link to="/smart-house">Smart House</Link></li>
                                        <li>
                                            <a className="dropdown-trigger btn waves-light waves-effect light-green darken-3"
                                               data-target="dropdown-lang">Language</a>
                                            <ul id="dropdown-lang" className="dropdown-content">
                                                <li>
                                                    <span
                                                        style={languageStyles}
                                                        id="ru"
                                                        onClick={(e) => this.handleLangChange(e)}
                                                        className="center-align btn-flat grey-text text-darken-3"
                                                    >Russian</span>
                                                </li>
                                                <li className="divider" tabIndex="-1"/>
                                                <li>
                                                    <span
                                                        id="sp"
                                                        style={languageStyles}
                                                        onClick={(e) => this.handleLangChange(e)}
                                                        className="center-align btn-flat grey-text text-darken-3"
                                                    >Spanish</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                    )
                }
            </I18n>
        )
    }
}

export default Header
