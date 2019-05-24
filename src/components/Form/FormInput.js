import React, { Component } from "react";
import styled from "styled-components";


const StyledInput = styled.input`
border: none;
background-color: rgba(255, 255, 255, 0.5);
min-width: 50%;
font-size: 35px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
font-family: 'Roboto Condensed', sans-serif;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
@media screen and (max-width: 768px) {
   width: 100%;
   border-radius: 0%;
}
`
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
           <StyledInput type="text" value={this.state.searchValue} onChange={this.handleChange} /> /* Renders an input filed */

       )
   }
}

export default FormInput;
