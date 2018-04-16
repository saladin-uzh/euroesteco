import React from "react"
import {I18n} from "react-i18next"
import PropTypes from "prop-types"
import * as M from "materialize-css";
import * as $ from "jquery";

const containerStyles = {
    position: "fixed",
    bottom: 30,
    right: 30,
    zIndex: 1
};

const captionStyles = {
    padding: 7.5
};

const footerStyles = {
    marginBottom: 0
};

const modalStyles = {
    maxHeight: "90%",
    transitionDuration: ".2s",
    transitionTimingFunction: "linear",
    outline: "none"
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
            onOpenStart: this.calculatorRender,
            startingTop: "7.5%",
            endingTop: "15%"
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
                            <div id="calc" className={this.state.inited ? "modal" : "to-modal modal"} style={modalStyles}>
                                <div className="modal-content" style={{
                                    padding: 0
                                }}>
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

class CalcStage extends React.Component {
    constructor(props) {
        super(props);

        this.t = props.t;

        this.renderLastStages = this.renderLastStages.bind(this);
        this.renderOption = this.renderOption.bind(this)
    }
    renderOption(n) {
        return <label key={this.props.stage + "00" + n} className={"col s" + (this.props.stage > 2 ? "3 push-s1" : "5") + " card-panel hoverable"} style={cardStyles}>
            <img className="responsive-img" src={"../img/c" + this.props.stage.toString() + n.toString() + ".jpg"} alt="Thumbnail" style={{

            }}/>{
            n === 1 ?
                <input name={"stage-" + this.props.stage.toString()} type="radio" defaultChecked={true}/> :
                <input name={"stage-" + this.props.stage.toString()} type="radio"/>
        }<span style={{
            display: "inline-block",
            padding: 0,
            paddingLeft: 30,
            margin: 10
        }}>
            <strong className="grey-text text-darken-3">{
                this.t("calc.stage-" + this.props.stage.toString() + ".option-" + n.toString())
            }</strong>
        </span>
        </label>
    }
    renderLastStages() {
        return this.props.stage === 6 ?
            <br/> :
            <br/>
    }
    render() {
        return <div className={"row section" + (this.props.stage < 3 ? " container " : " ") + "stage-" + this.props.stage.toString()}>
            <p className="flow-text col s12">{this.t("calc.stage-" + this.props.stage.toString() + ".caption")}</p>
            <div className="valign-wrapper col s12 options" style={{
                display: "flex",
                alignItems: "stretch"
            }}>
                {
                    this.props.stage <= 5 ?
                        this.props.stage <= 4 ?
                            this.props.stage <= 2 ?
                                [1, 2].map((i) => (
                                    this.renderOption(i)
                                )) :
                                [1, 2, 3].map((i) => (
                                    this.renderOption(i)
                                )) :
                            [1, 2, 3, 4].map((i) => {
                                this.renderOption(i)
                            }) :
                        this.renderLastStages()
                }
            </div>
        </div>
    }
}

const cardStyles = {
    cursor: "pointer",
    margin: "0 0 0 20px",
    padding: 0
};

CalcStage.propTypes = {
    stage: PropTypes.number.isRequired,
    t: PropTypes.func.isRequired
};