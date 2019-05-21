import React, { Component } from "react";
import styled from "styled-components";
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
        this.getSearchValue = this.getSearchValue.bind(this)
        this.getSubmittedValue = this.getSubmittedValue.bind(this)
    }
    getSearchValue(searchValue) {
        this.setState({
            searchValue
        })
    }
    getSubmittedValue(submittedValue) {
        this.props.gotSubmittedValue(submittedValue)
        console.log("den blev skickaed till form.js")
    }
    render() {
        return (
            <section>
                <FormInput onInputChange={this.getSearchValue}/>
                <FormSubmit searchValue={this.state.searchValue} onInputSubmit={this.getSubmittedValue} />
            </section>
        )
    }
}

export default Form;