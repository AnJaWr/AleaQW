import React, { Component } from "react";
import './App.css';
import { Container, Row, Col } from 'react-grid-system';

import Setting from "./Settings/Setting"

import SetDice from "./SetDice"

import QWLogo from "./Logo"
import RecordsList from "./Rolling/RecordsList";



class Rolling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setting: "classic",

            setK4Amount: 0,
            setK6Amount: 0,
            setK8Amount: 0,
            setK10Amount: 0,
            setK12Amount: 0,
            setK20Amount: 0,
            setK100Amount: 0,

            k4list: [],
            k6list: [],
            k8list: [],
            k10list: [],
            k12list: [],
            k20list: [],
            k100list: [],

            diceList: [],
        
            go: false
        };

    }

    

    setAmount = ( type, value, list) => {

        if (type === "k4") { 
            this.setState({ setK4Amount: value });
            this.setState({k4list : list })}
        if (type === "k6") {
            this.setState({ setK6Amount: value });
            this.setState({ k6list: list})}
        if (type === "k8") {
            this.setState({ setK8Amount: value });
            this.setState({ k8list: list })
        } if (type === "k10") {
            this.setState({ setK10Amount: value });
            this.setState({ k10list: list })
        } if (type === "k12") {
            this.setState({ setK12Amount: value });
            this.setState({ k12list: list })
        } if (type === "k20") {
            this.setState({ setK20Amount: value });
            this.setState({ k20list: list })
        } if (type === "k100") {
            this.setState({ setK100Amount: value });
            this.setState({ k100list: list })
        }
        }
    changeSetting = newSetting => {
        try {
            this.setState({ setting: newSetting });
            console.log(newSetting);
        }
        catch (error) {
            this.setState({
                setting: "classic"
            });
        }
    }

    resteGo = (newState) => {
        this.setState({ go: newState });
    }


    reset = () => {
        this.setState({ setK4Amount: 0 })
        this.setState({ setK6Amount: 0, })
        this.setState({ setK8Amount: 0, })
        this.setState({ setK10Amount: 0, })
        this.setState({ setK12Amount: 0, })
        this.setState({ setK20Amount: 0, })
        this.setState({ setK100Amount: 0, })
        this.setState({ go: false })

    }
    
    render() {
        return (
            <Container>
                <Row justify="center" align="center">
                    <Col xs={10} md={12} lg={12} >
                        <Setting
                            changeSetting={this.changeSetting}
                        />
                    </Col>
                </Row>

                <Row justify="center">
                  
                        <Col>

                            <SetDice
                                setAmount={this.setAmount}
                                setting={this.state.setting}
                                amount={this.state.setK4Amount}
                                type="k4"
                                reset={this.resteGo}
                            />

                        </Col>
                    <Col>

                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK6Amount}
                            type="k6"
                            reset={this.resteGo}
                        />

                    </Col>

                    <Col>

                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK8Amount}
                            type="k8"
                            reset={this.resteGo}
                        />

                    </Col>

                    <Col>
                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK10Amount}
                            type="k10"
                            reset={this.resteGo}
                        />
                    </Col>

                    <Col>
                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK12Amount}
                            type="k12"
                            reset={this.resteGo}
                        />
                    </Col>

                    <Col>
                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK20Amount}
                            type="k20"
                            reset={this.resteGo}
                        />
                    </Col>

                    <Col>
                        <SetDice
                            setAmount={this.setAmount}
                            setting={this.state.setting}
                            amount={this.state.setK100Amount}
                            type="k100"
                            reset={this.resteGo}
                        />
                    </Col>

                    <Col >
                        <QWLogo />
                    </Col>

                </Row>
                <Row align="center" justify="between">
                    <Col>
                        <RecordsList
                            k4={this.state.setK4Amount}
                            k6={this.state.setK6Amount}
                            k8={this.state.setK8Amount}
                            k10={this.state.setK10Amount}
                            k12={this.state.setK12Amount}
                            k20={this.state.setK20Amount}
                            k100={this.state.setK100Amount}

                            diceList={this.state.diceList}


                            resetGo={this.resteGo}

                            go={this.state.go}

                            k4list={this.state.k4list}
                            k6list={this.state.k6list}
                            k8list={this.state.k8list}
                            k10list={this.state.k10list}
                            k12list={this.state.k12list}
                            k20list={this.state.k20list}
                            k100list={this.state.k100list}
                            setAmount={this.setAmount}






                        />

                    </Col>
                </Row>
                <Row justify="center">
           

                    <Col xs={12} md={12} >


                        <div className="my_button reset" onClick={this.reset}><h3> R E S E T</h3></div>
                    </Col>

                </Row>
            </Container>
        )
    }
}
export default Rolling
