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
left: 0.8%;
top: 12%;
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
width: 11%;
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
    super()
    this.state = {
      savedAddresses: []
    }
    this.getLocalStorageLocations = this.getLocalStorageLocations.bind(this)
  }

  getLocalStorageLocations() {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses"))
    this.setState({
      savedAddresses
    })
};

componentDidMount() {
  this.getLocalStorageLocations()
}

  render() {
  return(
    <div>
    {this.props.addresses !== null &&
    <SavedLocationList addresses={this.state.savedAddresses} />
    }
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
