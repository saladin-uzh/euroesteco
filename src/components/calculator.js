import React from "react"
import * as M from "materialize-css";
import * as $ from "jquery";

const containerStyles = {
    position: "fixed",
    bottom: 30,
    right: 30
};

export class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            stage: 0
        };

        this.calculatorRender = this.calculatorRender.bind(this)
    }
    calculatorRender() {

    }
    componentDidUpdate() {
        M.Modal.init($(".modal"), {
            onOpenStart: this.calculatorRender
        });
    }
    render() {
        return (
            <div className="calculator" style={containerStyles}>
                <button data-target="calc" className="btn-floating btn-large pulse green darken-3 modal-trigger">
                    <i className="material-icons">apps</i>
                </button>
                <div id="calc" className="modal">
                    <div className="modal-content">
                        <h4>Calc</h4>
                        <div className="section">A bunch of text</div>
                    </div>
                    <div className="modal-footer">
                        <button className="prev-stage-btn btn-flat" type="button">prev stage</button>
                        <button className="next-stage-btn btn-flat" type="button">next stage</button>
                    </div>
                </div>
            </div>
        )
    }
}