import React, { Component } from 'react';
import Card from './Card';
import FormGroup from './FormGroup'
import Button from './Button'

export default class Main extends Component {

  _calculate(){
    
  }

  render() {
    return (
      <Card>
        <form className="form">
            <FormGroup>
                <label htmlFor="bananas">No of Bananas</label>
                <input id="bananas" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="camels">No of Camels</label>
                <input id="camels"/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="market">How far is the market (km)</label>
                <input id="market" />
            </FormGroup>
            <FormGroup>
                <label htmlFor="eats">How many banana does a camel eat</label>
                <input id="eats"/>
            </FormGroup>
            <div className="btn-container">
            <Button label={"Calculate"}/>
            <Button label={"Find Optimum Camels"}/>
            </div>
        </form>
      </Card>
    );
  }
}
