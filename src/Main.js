import React, { Component } from 'react';
import Card from './Card';
import FormGroup from './FormGroup'
import Button from './Button';
import Error from './Error';
import {calculateNoOfBananas, calculateOptimumCamels} from './api'

export default class Main extends Component {

  state = {
    bananas: '',
    camels: '',
    market: '',
    eats: '',
    error: false,
    errorMsg: '',
    loading: false
  }

  _validateInputFields(){
    let {bananas, camels, market, eats} = this.state;
    console.log(typeof parseInt(bananas))
    if(typeof parseInt(bananas) !== 'number' || typeof parseInt(camels) !== 'number' || typeof parseInt(market) !== 'number' || typeof parseInt(eats) !== 'number'){
      this.setState({error: true, errorMsg: 'All Form Fields must be number'});
      return false;
    }
    if(!bananas || !camels || !market || !eats){
      this.setState({error: true, errorMsg: 'Please fill ot all form fields'});
      return false;
    }
    return true;
  }

  _calculateLeftOver(){
    this.setState({loading: false})
    let ret = this._validateInputFields();
    if(!ret) return;

    let {bananas, camels, market, eats} = this.state;
    let response = calculateNoOfBananas(bananas, camels, market, eats);
    console.log({response})
    
  }

  onChangeText(key, value){
    this.setState({
      [key]: value
    })
  }

  
  render() {
    return (
      <Card>
        <form className="form">
            <Error error={this.state.error} errorMsg={this.state.errorMsg}/>
            <FormGroup>
                <label htmlFor="bananas">No of Bananas</label>
                <input id="bananas" onChange={(e) => this.onChangeText('bananas',e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="camels">No of Camels</label>
                <input id="camels" onChange={(e) => this.onChangeText('camels',e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <label htmlFor="market">How far is the market (km)</label>
                <input id="market" onChange={(e) => this.onChangeText('market',e.target.value)} />
            </FormGroup>
            <FormGroup>
                <label htmlFor="eats">How many banana does a camel eat</label>
                <input id="eats" onChange={(e) => this.onChangeText('eats',e.target.value)}/>
            </FormGroup>
            <div className="btn-container">
            <Button label={"Calculate"} onPress={() => this._calculateLeftOver()} isDisabled={this.state.loading}/>
            <Button label={"Find Optimum Camels"}/>
            </div>
        </form>
      </Card>
    );
  }
}
