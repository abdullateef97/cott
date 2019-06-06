import React, { Component } from 'react';
import Card from './Card';
import FormGroup from './FormGroup'
import Button from './Button';
import Error from './Error';
import Response from './Response'
import {calculateNoOfBananas, calculateOptimumCamels} from './api'

export default class Main extends Component {

  state = {
    bananas: '',
    camels: '',
    market: '',
    eats: '',
    error: false,
    errorMsg: '',
    loading: false,
    responseError: false,
    responseErrorMessage: '',
    isResponseActive: false,
    responseMessage: ''
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

    if(bananas < 3000){
      this.setState({error: true, errorMsg: 'Number of Bananas should be greater than 3000'})
      return false;
    }

    if(camels <= 1 || camels >= 10){
      this.setState({error: true, errorMsg: 'Number of Camels should be between 1 and 10'})
      return false;
    }

    if(eats <= 1 || eats >= 10){
      this.setState({error: true, errorMsg: 'A Camel can only eat between 1 to 10 bananas per km'})
      return false;
    }

    if(market <= 1000 || market >= 10000){
      this.setState({error: true, errorMsg: 'Distance to market should be between 1000k to 10000km'})
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

    if(response.error){
      this.setState({
        responseError: true,
        responseErrorMessage: response.message
      })
      return;
    }

    this.setState({
      isResponseActive: true,
      error: false,
      responseError: false,
      responseMessage: `The farmer will have ${response.data} bananas left on getting to the market`
    })
  }

  _calculateOptimum(){
    this.setState({loading: false})
    let ret = this._validateInputFields();
    if(!ret) return;

    let {bananas, camels, market, eats} = this.state;
    let response = calculateOptimumCamels(bananas);

    if(response.error){
      this.setState({
        responseError: true,
        responseErrorMessage: response.message
      })
      return;
    }

    this.setState({
      isResponseActive: true,
      error: false,
      responseError: false,
      responseMessage: `The optimum number of camels required is ${response.data}`
    })
  }

  _closeModal = (modal) => {
    if(modal === 'left'){
      this.setState({
        leftOverModal: false
      })}
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
            <span style={{marginTop: '10px'}}></span>
            <Error error={this.state.responseError} errorMsg={this.state.responseErrorMessage}/>

            <span style={{marginTop: '10px'}}></span>
            <Response active={this.state.isResponseActive} message={this.state.responseMessage}/>
            <div className="btn-container">
            <Button label={"Calculate"} onPress={() => this._calculateLeftOver()} isDisabled={this.state.loading}/>
            <Button label={"Find Optimum Camels"} onPress={() => this._calculateOptimum()} isDisabled={this.state.loading}/>
            </div>
        </form>
      </Card>
    );
  }
}
