import React, { Component } from "react";
import styled from "styled-components";

class FormInput extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        }, () => {
            this.props.onInputChange(this.state.searchValue);
        })
    }
    render() {
        return (
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
        )
    }
}

export default FormInput;