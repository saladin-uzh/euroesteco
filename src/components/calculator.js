import React from "react"

let styles = {
    width: '300px',
    height: '300px',
    border: '3px solid black'
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
    render() {
        return (
            <div className="calculator" style={styles}>
                <h1>Calc</h1>
                <button className="prev-stage-btn" type="button">prev stage</button>
                <button className="next-stage-btn" type="button">next stage</button>
            </div>
        )
    }
}