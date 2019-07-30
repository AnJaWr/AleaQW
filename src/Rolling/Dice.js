import React, { Component } from 'react'
import { Col } from 'react-grid-system';

class Dice extends Component {

    render() {
        // debugger
        let type;
        if (this.props.type === "k4") type = 4
        else if (this.props.type === "k6") type = 6
        else if (this.props.type === "k8") type = 8
        else if (this.props.type === "k10") type = 10
        else if (this.props.type === "k12") type = 12
        else if (this.props.type === "k20") type = 20
        else if (this.props.type === "k100") type = 100;

        let score = Math.floor(Math.random() * type - 1 + 1) + 1;
        let max = 'dice green'
        let min = 'dice red'

        let dice = 'dice'
        const setColor = () => {
            if (score === 1) return min
            else if (score === type) return max
            else return dice
        }



        if (this.props.go) {
            return (
                <React.Fragment>
                    <Col xs={3} md={1} className={`one-record  k` + type + ' ' + setColor(score)} onClick={() => {
                        if (score === type) {
                            this.setState({
                                score: score,
                            })
                        }
                    }
                    }>
                        <h3>{score}</h3>

                    </Col>
                </React.Fragment>
            )
        } else return null;
    }
}
export default Dice