import React from "react"
import {I18n} from "react-i18next"

export class MiTek extends React.Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <main className="technology-page App-page">
                            <div className="
                        tech-block
                        mitek-screen
                        section
                        grey
                        lighten-3">
                                <div className="container">
                                    <div className="row">
                                        <h3 className="
                                        caption
                                        flow-text
                                        grey-text
                                        text-darken-4
                                        col m4 push-m4
                                        center-align">
                                            {t("technology.mitek.title")}
                                        </h3>
                                    </div>

                                    <div className="row">
                                        <div className="col m7 text-block">
                                            <p className="flow-text grey-text text-darken-3">{t("technology.mitek.text-1")}</p>
                                            <p className="divider grey lighten-2 z-depth-1" tabIndex="-1"/>
                                            <p className="flow-text grey-text text-darken-3">{t("technology.mitek.text-2")}</p>
                                        </div>
                                        <div className="card col m4 push-m1">
                                            <div className="card-image">
                                                <img className="responsive-img" src="../../img/mitek-roof.jpg"/>
                                                <span className="card-title">Технология MiTek: нет ничего невозможного!</span>
                                            </div>
                                            <div className="card-content">
                                                <span className="flow-text">Технология MiTek с легкостью упрощает задачу по проектированию и просчету нагрузок на нестандартные формы крыши.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="card col m4">
                                            <div className="card-image">
                                                <img className="responsive-img" src="../../img/mitek-roof-2.jpg"/>
                                                <span className="card-title">Конструкция крыши</span>
                                            </div>
                                            <div className="card-content">
                                                <span className="flow-text">Как результат, технология MiTek с легкостью позволяет реализовать любую, даже самую смелую дизайнерскую идею для самой большой крыши.</span>
                                            </div>
                                        </div>

                                        <div className="col m7 push-m1 text-block">
                                            <p className="flow-text grey-text text-darken-3">{t("technology.mitek.text-3")}</p>
                                            <p className="divider grey lighten-2 z-depth-1" tabIndex="-1"/>
                                            <p className="flow-text grey-text text-darken-3">{t("technology.mitek.text-4")}</p>
                                        </div>
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