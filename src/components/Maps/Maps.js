import React, { Component } from 'react';
import MapsMap from './MapsMap.js';
import APIkeys from '../../config.js';
import axios from "axios";
import styled from "styled-components"


const StyledButton = styled.button`
position: absolute;
left: 0;
right: 0;
z-index: 8000;
text-align: center;
left: 40%;
top: 30%;
border: none;
background-color: rgba(255, 255, 255, 0.5);
font-size: 35px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 20%;
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

class Maps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addresses: [],
            zoom: 1
        }

        // Allows requestData() function to accsess adresses from the App component
        this.requestData = this.requestData.bind(this)
        this.coordinatesCalculation = this.coordinatesCalculation.bind(this)
    }

    requestData() {

        let addressesArray = [...this.state.addresses]

        for (let i = 0; i < this.props.addresses.length; i++) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.google.com/maps/api/geocode/json?address=${this.props.addresses[i]}&key=${APIkeys.googleMaps}`)
            .then((response) => {
                let geoLocation = {
                    address: response.data.results[0].formatted_address,
                    coordinates: response.data.results[0].geometry.location
                }
                addressesArray.push(geoLocation);
                this.setState({
                    addresses: addressesArray,
                })
                console.log(this.state)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            });
           }
           setTimeout(() => {
               this.coordinatesCalculation()
           }, 1000)

        }

    coordinatesCalculation() {
        let latCoords = []
        let lngCoords = []
        for (let i = 0; i < this.state.addresses.length; i++) {
            latCoords.push(this.state.addresses[i].coordinates.lat)
            lngCoords.push(this.state.addresses[i].coordinates.lng)
        }

        let latSum = latCoords.reduce((previous, current) => current += previous);
        let latAvg = latSum / latCoords.length;
        
        let lngSum = lngCoords.reduce((previous, current) => current += previous);
        let lngAvg = lngSum / lngCoords.length;

        this.setState({
            ...this.state,
            zoom: 10,
            avgCoordinates: {
                lat: latAvg,
                lng: lngAvg
            }
        })
        
    }
    


    render() {
        const styleButton = {
  zIndex: 8000,
  position: "absolute",
}
        return (
            <div>
                <MapsMap addressList={this.state.addresses} avgCoordinates={this.state.avgCoordinates} zoom={this.state.zoom} />
                <StyledButton onClick={this.requestData} style={styleButton}>Calculate Coordinates</StyledButton>
            </div>
        )
    }
}


export default Maps;