import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import SavedLocation from './components/SavedLocation/SavedLocation.js';
import Footer from './components/Footer/Footer.js';
import Form from "./components/Form/Form.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      submittedValues: ["value1", "value2", "value3"]
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
        <Form gotSubmittedValue={this.getSubmittedValue} />
        <Footer />
      </div>
    );
  }
    
}

export default App;
