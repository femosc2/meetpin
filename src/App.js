import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import SavedLocation from './components/SavedLocation/SavedLocation.js';
import Footer from './components/Footer/Footer.js';
import Maps from './components/Maps/Maps.js';
import Form from "./components/Form/Form.js";
import AddressList from "./components/AddressList/AddressList.js";

class App extends Component {
  constructor() {
    super()
    this.state = {
      submittedValues: ["Finalgatan 9 Lund", "Lilla varvsgatan 41g", "Lantmannagatan 3b malmö"]
    }
    this.getSubmittedValue = this.getSubmittedValue.bind(this)
  }
  getSubmittedValue(submittedValue) {
    let values = [...this.state.submittedValues]
    values.push(submittedValue)
    this.setState({
      submittedValues: values
    }, () => {
      console.log(this.state.submittedValues)
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Maps addresses={this.state.submittedValues} />
        <Form gotSubmittedValue={this.getSubmittedValue} />
        <SavedLocation locations={this.state.submittedValues} />
        <AddressList addresses={this.state.submittedValues} />
        <Footer />
      </div>
    );
  }

}

export default App;
