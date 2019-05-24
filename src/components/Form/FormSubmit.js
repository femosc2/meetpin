import React, { Component } from "react";
import styled from "styled-components";


const StyledButton = styled.button`
position: absolute;
left: 0;
right: 0;
z-index: 8000;
text-align: center;
left: 45%;
top: 20%;
border: none;
background-color: rgba(255, 255, 255, 0.5);
font-size: 35px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 10%;
@media only screen and (max-width: 768px) {
   width: 75%;
}
&:hover {
   background: rgba(255,126,119,1);
   filter: hue-rotate(180deg);
   transition: 1s;
   cursor: pointer;
}
&:active {
   background: #fff;
   transition 0.3s;
   box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.0);
}
`
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
           <StyledButton onClick={this.submitSearch}> Submit </StyledButton> //returns a button that when clicked, submits the user's search input (requested address)
       )
   }
}

export default FormSubmit;