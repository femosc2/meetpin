import React, { Component } from 'react';
import SavedLocationList from './SavedLocationList.js';
import SavedLocationListItem from './SavedLocationListItem.js';
import styled from 'styled-components';

const StyledButton = styled.button`
position: absolute;
left: 0;
right: 0;
z-index: 8000;
text-align: center;
left: 0;
top: 20%;
padding: 0.5%;
border: none;
background-color: rgba(255, 255, 255, 0.5);
font-size: 20px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 12%;
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

class SavedLocation extends Component {
  constructor(props) {
    super(props)
    this.submitToLocalStorage = this.submitToLocalStorage.bind(this)
  }


  submitToLocalStorage() {
    localStorage.setItem("locations", JSON.stringify(this.props.locations));

  }

  render() {


  return(
    <StyledButton onClick={this.submitToLocalStorage}>Save Locations</StyledButton>
    //<SavedLocationList locations ={this.props.locations} />
  );
  }
}

//hämtar in state från App.js ( submittedvalues)
//fläska in locations till localStorage
//skicka ner locations till barnet SavedLocationList




export default SavedLocation;
