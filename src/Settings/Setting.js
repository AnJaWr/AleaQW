import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';


class Setting extends Component {


    render() {

        return (
           
                <Form>
                    <FormGroup>
                        <Label for="dicesSetting" />
                        <Input type="select" name="select" id="dicesSetting"
                            onChange={
                                (e) => {
                                    let value = e.target.value;
                                    this.props.changeSetting(value)
                                }}

                        >
                            <option value="classic">Kości klasyczne</option>
                            <option value="elvish">Kości elfickie</option>
                            <option value="dragon">Kości smocze</option>
                            <option value="vik">Kości wikińskie</option>
                            <option value="galaxy">Kości galaktyka</option>
                        </Input>
                    </FormGroup>
                </Form>
           )

    };
}


export default Setting;
