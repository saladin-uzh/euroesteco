import React from "react"
import {I18n} from "react-i18next"
import * as M from "materialize-css";
import * as $ from "jquery";

const containerStyles = {
    position: "fixed",
    bottom: 30,
    right: 30
};

const captionStyles = {
    padding: 7.5
};

const footerStyles = {
    marginBottom: 0
};

export class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.maxStage = 7;

        this.state = {
            stage: 1,
            inited: false
        };

        this.calculatorRender = this.calculatorRender.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }
    calculatorRender() {
        this.setState({
            inited: true
        });

        // M.Carousel.init($(".carousel"), {
        //     fullWidth: true,
        //     indicators: false
        // });
    }
    prev() {
        this.setState({
            stage: this.state.stage <= 1 ?
                1 :
                --this.state.stage
        })
    }
    next() {
        this.setState({
            stage: this.state.stage >= this.maxStage ?
                this.maxStage :
                ++this.state.stage
        })
    }
    componentDidUpdate() {
        M.Modal.init($(".to-modal"), {
            onOpenStart: this.calculatorRender
        });
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <div className="calculator" style={containerStyles}>
                            <button data-target="calc" className="btn-floating btn-large pulse green darken-3 modal-trigger">
                                <i className="icons">♣</i>
                            </button>
                            <div id="calc" className={this.state.inited ? "modal" : "to-modal modal"}>
                                <div className="modal-content">
                                    <h4 style={captionStyles} className="green darken-3 white-text text-darken-3">
                                        {t("calc.first")}
                                        <small className="right">{
                                            t("calc.second")
                                                .replace("step_count", this.state.stage.toString())
                                                .replace("step_max", this.maxStage.toString())
                                        }</small>
                                    </h4>
                                    <div className="stage-1 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-1.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-1.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-1.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-2 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-2.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-2.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-2.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-3 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-3.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-3.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-3.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-4 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-4.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-4.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-4.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-5 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-5.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-5.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-5.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-6 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-6.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-6.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-6.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                    <div className="stage-7 row section container">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-7.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-7.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img width={150} src="../img/awful-logo.png" alt="test"/>
                                            <figcaption>{t("calc.stage-7.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="modal-footer" style={footerStyles}>
                                    <button type="button" className="prev-stage-btn btn-flat left" onClick={this.prev}>
                                        <i className="material-icons">arrow_back</i>
                                    </button>
                                    <button type="button" className="btn-flat modal-action modal-close left">
                                        <i className="material-icons">close</i>
                                    </button>
                                    <button type="button" className="next-stage-btn btn right green darken-3" onClick={this.next}>
                                        <i className="material-icons">arrow_forward</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}