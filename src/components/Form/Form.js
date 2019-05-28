import React, { Component } from "react";
import styled from "styled-components";
import FormInput from './FormInput';
import FormSubmit from './FormSubmit';

const StyledSection = styled.section`
text-align: "center"`
class Form extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            gotFile: false,
        }
        this.getSearchValue = this.getSearchValue.bind(this)
        this.getSubmittedValue = this.getSubmittedValue.bind(this)
        this.gotSubmittedValue = this.gotSubmittedValue.bind(this)
        this.onInputSubmitWrapper = this.onInputSubmitWrapper.bind(this)
    }
    getSearchValue(searchValue) {
        this.setState({
            searchValue
        })
    }
    getSubmittedValue(submittedValue) {
        this.props.gotSubmittedValue(submittedValue)
    }
    gotSubmittedValue() {
        console.log("got submitted value")
        this.setState({
            ...this.state,
            gotFile: true
        })
    }

    onInputSubmitWrapper() {
        this.getSubmittedValue()
        this.gotSubmittedValue()
    }
    render() {
        return (
            <StyledSection>
                <FormInput onInputChange={this.getSearchValue} />
                <FormSubmit searchValue={this.state.searchValue} onInputSubmit={this.getSubmittedValue} />
            </StyledSection>
        )
    }
}

export default Form;
