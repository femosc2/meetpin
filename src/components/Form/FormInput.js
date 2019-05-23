import React, { Component } from "react";
import styled from "styled-components";

class FormInput extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this) // allows this handleChange function to access state and props
    }
    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        }, () => {
            this.props.onInputChange(this.state.searchValue); //on input change, add the user's input to state
        })
    }
    render() {
        return (
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} /> //returns the user's seach input

        )
    }
}

export default FormInput;