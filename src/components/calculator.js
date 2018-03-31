import React from "react"
import {I18n} from "react-i18next"
import PropTypes from "prop-types"
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
                                    <CalcStage stage={this.state.stage} t={t}/>
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

const CalcStage = (props) => {
    const s = props.stage.toString();
    const t = props.t;
    const cardStyles = {
        cursor: "pointer"
    };
    return <div className={"row section container stage-" + s}>
        <p className="flow-text col s12">{t("calc.stage-" + s + ".caption")}</p>
        <label className="col s4 offset-s1 card-panel small hoverable" style={cardStyles}>
            <img className="responsive-img" src="../img/awful-logo.png" alt="test"/>
            <input name={"stage-" + s} type="radio" checked="checked"/>
            <span className="grey-text text-darken-3 flow-text">{t("calc.stage-" + s + ".option-1")}</span>
        </label>
        <label className="col s4 offset-s1 card-panel small hoverable grey-text text-darken-3" style={cardStyles}>
            <img className="responsive-img" src="../img/awful-logo.png" alt="test"/>
            <input name={"stage-" + s} type="radio"/>
            <span className="grey-text text-darken-3 flow-text">{t("calc.stage-" + s + ".option-2")}</span>
        </label>
    </div>
};

CalcStage.propTypes = {
    stage: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired
};