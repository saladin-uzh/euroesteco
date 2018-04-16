import React from "react"
import {I18n} from "react-i18next"

export class MythBusters extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="technology-page App-page">
                            <div className="
                        tech-block
                        mythbuster-screen
                        section">
                                <div className="container">
                                    <div className="row">
                                        <h3 className="
                                    caption
                                    flow-text
                                    grey-text
                                    text-darken-4
                                    col m4
                                    push-m4
                                    center-align">
                                            {t("technology.myth-busters.title")}
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <ul className="collapsible col m12 s12">
                                            <li>
                                                <div className="collapsible-header valign-wrapper z-depth-3">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-1")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-1a")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-1b")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-1c")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-1d")}: <a href="http://www.egger.com/downloads/bildarchiv/126000/1_126693_PP_Eurostrand-OSB-4-TOP_RU.pdf">EGGER</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header valign-wrapper">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-2")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-2a")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-2b")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-2c")}</p>
                                                    <p className="row">
                                                        <img className="responsive-img col s12 m4" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb3.jpg" width="210" height="165"/>
                                                        <img className="responsive-img col s12 m4" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb2.jpg" width="210" height="165"/>
                                                        <img className="responsive-img col s12 m4" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb1.jpg" width="210" height="165"/>
                                                    </p>
                                                    <p className="flow-text">
                                                        <b>{t("technology.myth-busters.body-2d")}</b>
                                                        <span>{t("technology.myth-busters.body-2e")}</span>
                                                        <b>{t("technology.myth-busters.body-2f")}</b>
                                                        <span>{t("technology.myth-busters.body-2g")}</span>
                                                    </p>
                                                    <p>{t("technology.myth-busters.body-2j")}: <a href="http://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%B8%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%BB">WIKIPEDIA</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header valign-wrapper">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-1")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-3a")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-3b")}<b>{t("technology.myth-busters.body-3c")}</b>.</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-3d")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-3e")}</p>
                                                    <p>{t("technology.myth-busters.body-2j")}: <a href="http://hotwell.ru/">hotwell.ru</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header valign-wrapper">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-4")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-4")}</p>
                                                    <p className="row">
                                                        <img class="responsive-img col s12 m4" alt="проект Ямайка" src="https://servus.ua/wp-content/uploads/2012/11/Yamajka2_thumb.jpg" width="200" height="150"/>
                                                        <img class="responsive-img col s12 m4" alt="проект Пастораль" src="https://servus.ua/wp-content/uploads/2012/11/pastoral_thumb.jpg" width="200" height="150"/>
                                                        <img class="responsive-img col s12 m4" alt="проект Прага" src="https://servus.ua/wp-content/uploads/2012/11/praga_thumb.jpg" width="200" height="150"/>
                                                    </p>
                                                    <p>{t("technology.myth-busters.body-2j")}: <a href="http://hotwell.ru/" target="_blank">hotwell.ru</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header valign-wrapper">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-5")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-5a")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-5b")}</p>
                                                    <p className="flow-text">
                                                        {t("technology.myth-busters.body-5c")}<br/>
                                                        {t("technology.myth-busters.body-5d")}</p>
                                                    <p>{t("technology.myth-busters.body-2j")}: <a href="http://hotwell.ru/" target="_blank">hotwell.ru</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header valign-wrapper">
                                                    <i className="material-icons">+</i>
                                                    <span>{t("technology.myth-busters.header-6")}</span>
                                                </div>
                                                <div className="collapsible-body">
                                                    <p className="flow-text">{t("technology.myth-busters.body-6a")}</p>
                                                    <p className="flow-text">{t("technology.myth-busters.body-6b")}</p>
                                                    <p className="row">
                                                        <a className="col s12 m4" href="https://servus.ua/wp-content/uploads/2012/11/mythThumb6.jpg">
                                                            <img className="responsive-img" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb6.jpg" width="210" height="165"/>
                                                        </a>
                                                        <a className="col s12 m4" href="https://servus.ua/wp-content/uploads/2012/11/mythThumb5.jpg">
                                                            <img className="responsive-img" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb5.jpg" width="210" height="165"/>
                                                        </a>
                                                        <a className="col s12 m4" href="https://servus.ua/wp-content/uploads/2012/11/mythThumb4.jpg">
                                                            <img className="responsive-img" src="https://servus.ua/wp-content/uploads/2012/11/mythThumb4.jpg" width="210" height="165"/>
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </main>
                    )
                }
            </I18n>
        )
    }
}