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
    }
    prev() {
        this.setState({
            stage: this.state.stage <= 0 ?
                0 :
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
                                        <small className="right">{t("calc.second").replace("step_count", this.state.stage.toString())}</small>
                                    </h4>
                                    <div className="section container stage-1 row">
                                        <p className="helper-text flow-text col s12">{t("calc.stage-1.caption")}</p>
                                        <figure className="col s4 offset-s1">
                                            <img src="/#!" alt="PISHOV NAH"/>
                                            <figcaption>{t("calc.stage-1.option-1")}</figcaption>
                                        </figure>
                                        <figure className="col s4 offset-s1">
                                            <img src="/#!" alt="PISHOV NAH"/>
                                            <figcaption>{t("calc.stage-1.option-2")}</figcaption>
                                        </figure>
                                    </div>
                                </div>
                                <div className="modal-footer row valign-wrapper" style={footerStyles}>
                                    <button type="button" className="prev-stage-btn btn-flat col s1" onClick={this.prev}>
                                        <i className="material-icons">arrow_back</i>
                                    </button>
                                    <span className="btn-flat modal-action modal-close center-align col s10">
                                        <i className="material-icons large">close</i>
                                    </span>
                                    <button type="button" className="next-stage-btn btn-flat col s1" onClick={this.next}>
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