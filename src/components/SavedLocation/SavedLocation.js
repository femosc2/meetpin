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
top: 19%;
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
    this.getLocalStorageLocations = this.getLocalStorageLocations.bind(this)
    this.submitToLocalStorage = this.submitToLocalStorage.bind(this)
  }

  getLocalStorageLocations() {
  let savedLocations = localStorage.getItem("locations")
// Kontrollera om det finns några locations i localStorage
  if (savedLocations == null) {
    localStorage.setItem("locations", JSON.stringify([]));
    return [];
// Finns det inget i localStorage, skapas en tom lista
  }
  else {
		// Returnerar alla locations som en sträng
		return JSON.stringify(savedLocations);
  }
};

  submitToLocalStorage() {
    let savedLocations = this.getLocalStorageLocations()
    savedLocations = savedLocations.push(JSON.stringify(this.props.locations))
    localStorage.setItem("locations", JSON.stringify(savedLocations));
  }

  render() {


  return(
    <div>
    <StyledButton onClick={this.getLocalStorageLocations}>Save Locations</StyledButton>
    <SavedLocationList locations={this.props.locations} />
    </div>
  );
  }
}

//hämtar in state från App.js ( submittedvalues)
//fläska in locations till localStorage
//skicka ner locations till barnet SavedLocationList

//TODO
//När sidan laddas ska jag hämta in vad som är sparat i localStorage
//När/om nya adresser skrivs in ska de ERSÄTTA de nuvarande localStorage adresserna
//Skapa en printfunktion från localStorage så att användaren kan se vad som är sparat som slängs in i dropdownlistan
//


export default SavedLocation;
