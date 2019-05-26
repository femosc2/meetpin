import React, { Component } from 'react';
import SavedLocation from './components/SavedLocation/SavedLocation.js';
import Maps from './components/Maps/Maps.js';
import Form from "./components/Form/Form.js";
import AddressList from "./components/AddressList/AddressList.js";

class App extends Component {
  constructor() {
    super()
    this.state = {
      submittedValues: []
    }
    this.getSubmittedValue = this.getSubmittedValue.bind(this)
    this.receivePropsFromChild = this.receivePropsFromChild.bind(this)
  }
  getSubmittedValue(submittedValue) {
    let values = [...this.state.submittedValues]
    values.push(submittedValue)
    this.setState({
      submittedValues: values
    })
  }

  receivePropsFromChild(addresses) {
    let addressArray = []
    console.log("submittedValues", this.state.submittedValues)
    addresses.map(address => addressArray.push(address.address))
    console.log(addressArray)
    this.setState({
      submittedValues: addressArray
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div>
        <Maps addresses={this.state.submittedValues} onRequest={this.receivePropsFromChild} />
        <Form gotSubmittedValue={this.getSubmittedValue} />
        <SavedLocation locations={this.state.submittedValues} />
        <AddressList addresses={this.state.submittedValues} />
      </div>
    );
  }

}

export default App;
