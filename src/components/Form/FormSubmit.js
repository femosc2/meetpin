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
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 5vw;
margin-top: 15px;

@media only screen and (max-width: 768px) {
   top: 8vh;
   left: 84%;
   width: 14vw;
   background: white;
}

&:hover {
   background: #78e08f;
   transition: .8s;
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