import React, { Component } from "react";
import styled from "styled-components";

class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.submitSearch = this.submitSearch.bind(this) //allows submitSearch function to access state and props
    }
    submitSearch() {
        this.props.onInputSubmit(this.props.searchValue); //
    }
    render() {
        return (
            <button onClick={this.submitSearch}> Submit </button> //returns a button that when clicked, submits the user's search input (requested address)
        )
    }
}

export default FormSubmit;