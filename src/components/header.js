import React from "react"
import {Link} from "react-router-dom"
import {I18n} from "react-i18next"
import i18n from "i18next"
import {Files} from "../App"
import classSet from "react-classset"

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            langBtn: false
        };

        this.handleLangChange = this.handleLangChange.bind(this);
    }
    handleLangChange(e) {
        let newLanguage = e.target.id;
        console.log(e.target.id);
        i18n.changeLanguage(newLanguage)
        this.setState({
            langBtn: this.langBtn !== this.langBtn
        })
    }
    render() {
        const btnClass = classSet({
            'center-align grey-text text-darken-3': true,
            'disabled': this.state.langBtn
        });
        return (
            <I18n>
                {
                    (t) => (
                        <header className="App-header">
                            <nav className="grey darken-3">
                                <div className="nav-wrapper container">
                                    <a className="brand-logo" href="/">
                                        <img width="110px" className="responsive-img" src={Files.logo} alt="EuroEstEco logo"/>
                                    </a>
                                    <ul className="right">
                                        <li><Link to="/">Main</Link></li>
                                        <li><Link to="/about-us">AboutUs</Link></li>
                                        <li><Link to="/sip-technology">SIP</Link></li>
                                        <li><Link to="/contact-us">ContactUs</Link></li>
                                        <li>
                                            <a className="dropdown-trigger btn waves-light waves-effect light-green darken-3"
                                               data-target="dropdown-lang">Language</a>
                                            <ul id="dropdown-lang" className="dropdown-content">
                                                <li
                                                    id="ru"
                                                    onClick={this.handleLangChange}>
                                                    <span className={btnClass}>Russian</span>
                                                </li>
                                                <li className="divider" tabIndex="-1"/>
                                                <li
                                                    id="sp"
                                                    onClick={this.handleLangChange}>
                                                    <span className={btnClass}>Spanish</span>
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