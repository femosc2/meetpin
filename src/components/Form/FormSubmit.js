import React, { Component } from "react";
import styled from "styled-components";

class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.submitSearch = this.submitSearch.bind(this) 
    }
    submitSearch() {
        this.props.onInputSubmit(this.props.searchValue);
    }
    render() {
        return (
            <button onClick={this.submitSearch}> Submit </button>
        )
    }
}

export default FormSubmit;