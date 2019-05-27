import React, { Component } from "react";
import styled from "styled-components";


const StyledInput = styled.input`
outline: none;
border: none;
background-color: rgba(255, 255, 255, 0.5);
min-width: 50%;
font-size: 36px;
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
margin-top: 16px;

@media screen and (max-width: 768px) {
   width: 90%;
   top: 8vh;
   font-size: 1.2rem;
   height: 2.4rem;
}
`
class FormInput extends Component {
   constructor(props) {
       super(props)
       this.state = {
           searchValue: ""
       }
       this.handleChange = this.handleChange.bind(this) // allows this handleChange function to access state and props
       this.purgeInput = this.purgeInput.bind(this)
   }
   handleChange(event) {
       this.setState({
           searchValue: event.target.value,
       }, () => {
           this.props.onInputChange(this.state.searchValue); //on input change, add the user's input to state
       })
   }

   purgeInput() {
       console.log("fungar inte")
       this.setState({
           searchValue: ""
       })
       }

   render() {
       return (
           <StyledInput type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Address, stad"/> /* Renders an input field */

       )
   }
}

export default FormInput;
