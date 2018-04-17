import React from "react"
import {I18n} from "react-i18next"

export class Price extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <div className="price-page App-page">
                            <div className="container section">
                                <div className="row">
                                    <ul id="tabs-swipe-demo" className="tabs col s12 grey lighten-4">
                                        <li className="tab col s3"><a className="active grey-text text-darken-2" href="#test-swipe-1"><b>{t("price.products.econom.title")}</b></a></li>
                                        <li className="tab col s3"><a className="grey-text text-darken-2" href="#test-swipe-2"><b>{t("price.products.standard.title")}</b></a></li>
                                        <li className="tab col s3"><a className="grey-text text-darken-2" href="#test-swipe-3"><b>{t("price.products.standard-servus.title")}</b></a></li>
                                        <li className="tab col s3"><a className="grey-text text-darken-2" href="#test-swipe-4"><b>{t("price.products.euro-servus.title")}</b></a></li>
                                    </ul>
                                    <div id="test-swipe-1" className="col s12 grey lighten-3">
                                        <ul>
                                            <li>{t("price.products.econom.li-1")}</li>
                                            <li>{t("price.products.econom.li-2")}</li>
                                            <li>{t("price.products.econom.li-3")}</li>
                                            <li>{t("price.products.econom.li-4")}</li>
                                            <li>{t("price.products.econom.li-5")}</li>
                                            <li>{t("price.products.econom.li-6")}</li>
                                            <li>{t("price.products.econom.li-7")}</li>
                                        </ul>
                                    </div>
                                    <div id="test-swipe-2" className="col s12 grey lighten-3">
                                        <ul>
                                            <li>{t("price.products.standard.li-1")}</li>
                                            <li>{t("price.products.standard.li-2")}</li>
                                            <li>{t("price.products.standard.li-3")}</li>
                                            <li>{t("price.products.standard.li-4")}</li>
                                            <li>{t("price.products.standard.li-5")}</li>
                                            <li>{t("price.products.standard.li-6")}</li>
                                            <li>{t("price.products.standard.li-7")}</li>
                                        </ul>
                                    </div>
                                    <div id="test-swipe-3" className="col s12 grey lighten-3">
                                        <ul>
                                            <li>{t("price.products.standard-servus.li-1")}</li>
                                            <li>{t("price.products.standard-servus.li-2")}</li>
                                            <li>{t("price.products.standard-servus.li-3")}</li>
                                            <li>{t("price.products.standard-servus.li-4")}</li>
                                            <li>{t("price.products.standard-servus.li-5")}</li>
                                            <li>{t("price.products.standard-servus.li-6")}</li>
                                            <li>{t("price.products.standard-servus.li-7")}</li>
                                        </ul>
                                    </div>
                                    <div id="test-swipe-4" className="col s12 grey lighten-3">
                                        <ul>
                                            <li>{t("price.products.euro-servus.li-1")}</li>
                                            <li>{t("price.products.euro-servus.li-2")}</li>
                                            <li>{t("price.products.euro-servus.li-3")}</li>
                                            <li>{t("price.products.euro-servus.li-4")}</li>
                                            <li>{t("price.products.euro-servus.li-5")}</li>
                                            <li>{t("price.products.euro-servus.li-6")}</li>
                                            <li>{t("price.products.euro-servus.li-7")}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}