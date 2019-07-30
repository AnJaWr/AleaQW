import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';
import Divs from "./Divs"

class RecordsList extends Component {

    constructor(props) {
        super(props);


        this.state = {
            go: false,
            dicelist: [],


        }
    }


    handleClick = () => {
        this.props.resetGo(true);


    }


    render() {
        let list = []
        let dicelist = list.concat(this.props.k4list, this.props.k6list, this.props.k8list, this.props.k10list, this.props.k12list, this.props.k20list, this.props.k100list)

        if (this.props.k4 || this.props.k6 || this.props.k8 || this.props.k10 || this.props.k12 || this.props.k20 || this.props.k100) {

            return (
                <Container>
                    <Row justify="center">
                        <br /><br />
                        <Col xs={12} md={12} >
                            <div className="my_button roll" onClick={this.handleClick}><h3> R Z U C A J</h3></div>
                        </Col>
                    </Row>
                    <Divs

                        k4={this.props.k4}
                        k6={this.props.k6}
                        k8={this.props.k8}
                        k10={this.props.k10}
                        k12={this.props.k12}
                        k20={this.props.k20}
                        k100={this.props.k100}


                        diceList={dicelist}

                        resetGo={this.props.resetGo}
                        go={this.props.go}

                    />

                </Container>
            )

        }
        else {
            return (

                <div className="par__records"><p className="warning">Wybierz kości oraz ich ilość</p></div>
            )

        }

    }
}

export default RecordsList;

