import React from "react"
import {Link} from "react-router-dom"
import {I18n} from "react-i18next"
import {Navbar, NavItem, Button, Dropdown} from "react-materialize"

const logo = "img/logo.png";

export const Header = () => {
    return (
        <I18n>
            {
                (t, {i18n}) => (
                    <header className="App-header">
                        <Navbar className="grey darken-3" right brand={
                            <img width="110px" className="responsive-img" src={logo} alt="EuroEstEco logo"/>
                        }>
                            <Link to="/">Main</Link>
                            <Link to="/about-us">AboutUs</Link>
                            <Link to="/sip-technology">SIP</Link>
                            <Link to="/contact-us">ContactUs</Link>
                            <Dropdown trigger={
                                <Button waves="light" large className="darken-3 light-green">Language</Button>
                            }>
                                <NavItem onClick={() => i18n.changeLanguage('ru')}>Russian</NavItem>
                                <NavItem divider />
                                <NavItem onClick={() => i18n.changeLanguage('sp')}>Spanish</NavItem>
                            </Dropdown>
                        </Navbar>
                    </header>
                )
            }
        </I18n>
    )
};