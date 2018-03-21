import React from "react";

export const UnderDevelopmentPage = () => {
    return (
        <div className="page">
            <nav className="green darken-4">
                <div className="nav-wrapper">
                    <a className="brand-logo center valign-wrapper" href="_index.html">
                        <img width="125px" className="responsive-img" src="img/logo.png" alt="EuroEstEco logo"/>
                    </a>
                </div>
            </nav>
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center green-text text-darken-4">Euro EstEco</h1>
                    <div className="row center">
                        <h5 className="header col s12">Web site is currently being under development.</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};