import React, { Component } from "react";
import { Col } from 'react-grid-system';
import NumericInput from 'react-numeric-input';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './App.css';



class SetDice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false

        }


    }


    render() {

        return (
            <Col xs={5} offset={{ xs: 1 }} sm={4} md={3} lg={1}>

                <Form
                //  onSubmit={event => event.preventDefault}
                >
                    <FormGroup check className="col__main">
                        <Input type="checkbox" checked={this.props.amount} id={this.props.type} readOnly />
                        <Label className={`dice ` + this.props.type + ` ` + this.props.setting} htmlFor={this.props.type} check> </Label>
                        <NumericInput min={0} max={20} mobile={true} size={3} placeholder={0} value={this.props.amount}


                            onChange={
                                value => {

                                    const type = this.props.type
                                    const list = Array(value).fill(this.props.type)
                                    this.props.setAmount(type, value, list)
                                    this.props.reset(false)

                                }

                            }

                        />

                    </FormGroup>
                </Form>

            </Col>
        )
    }
}

export default SetDice  