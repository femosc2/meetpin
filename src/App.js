import React, { Component } from 'react';
import SavedLocation from './components/SavedLocation/SavedLocation.js';
import Maps from './components/Maps/Maps.js';
import Form from "./components/Form/Form.js";
import AddressList from "./components/AddressList/AddressList.js";
import MessageBox from "./components/MessageBox/MessageBox.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      submittedValues: []
    }
    this.getSubmittedValue = this.getSubmittedValue.bind(this)
    this.getNewAddressList = this.getNewAddressList.bind(this)
    this.getErrorMessage = this.getErrorMessage.bind(this)
  }
  getSubmittedValue(submittedValue) {
    let values = [...this.state.submittedValues]
    values.push(submittedValue)
    this.setState({
      submittedValues: values
    })
  }

  getNewAddressList(addresses) {
    let addressArray = []
    addresses.map(address => addressArray.push(address.address))
    this.setState({
      submittedValues: addressArray
    }, () => {
    })
  }

  getErrorMessage(errorMessage) {
    this.setState({
      ...this.state,
      errorMessage
    })
  }

  render() {
    return (
      <div>
        <Maps addresses={this.state.submittedValues} onRequest={this.getNewAddressList} badAddress={this.getErrorMessage} />
        <Form gotSubmittedValue={this.getSubmittedValue} />
        <SavedLocation addresses={this.state.submittedValues} onRequest={this.getNewAddressList}  />
        <AddressList addresses={this.state.submittedValues} />
        <MessageBox errorMessage={this.state.errorMessage} />
      </div>
    );
  }

}

export default App;
