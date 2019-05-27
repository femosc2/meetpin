import React, { Component } from "react";
import styled from "styled-components";

const ButtonImage = styled.img`
width: 2rem;
padding-top: .5rem;

`

const StyledButton = styled.button`
outline: none;
position: absolute;
z-index: 8000;
text-align: center;
left: 71%;
border: none;
border-radius: 35px;
text-align: center;
background-color: white;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 5vw;
@media only screen and (max-width: 768px) {

}

@media screen and (max-width: 1024px) {
width: 10%;
top: 9.2vh;
left: 70%;
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
           <StyledButton onClick={this.submitSearch}> <ButtonImage src="https://image.flaticon.com/icons/svg/166/166260.svg"></ButtonImage> </StyledButton> //returns a button that when clicked, submits the user's search input (requested address)
       )
   }
}

export default FormSubmit;
