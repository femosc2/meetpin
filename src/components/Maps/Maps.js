import React, { Component } from 'react';
import MapsMap from './MapsMap.js';
import APIkeys from '../../config.js';
import axios from "axios";
import styled, { keyframes } from "styled-components"

const slideInTop = keyframes`
	0% {
		transform: translateY(-100%);
	}
	50%{
		transform: translateY(8%);
	}
	65%{
		transform: translateY(-4%);
	}
	80%{
		transform: translateY(4%);
	}
	95%{
		transform: translateY(-2%);
	}
	100% {
		transform: translateY(0%);
	}
}
`

const StyledButton = styled.button`
margin-top: 16px;
text-transform: uppercase;
outline: none;
position: absolute;
z-index: 8000;
text-align: center;
right: 6vw;
border: none;
background-color: rgba(255, 255, 255, 1);
font-size: 2rem;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1.5s;
width: 16%;
animation: ${slideInTop} 1s;

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

@media only screen and (max-width: 768px) {
   width: 3.5rem;
   height: 3.5rem;
   top: 16.5%;
   right: 2%;
   font-size: 1rem;
   text-align: center;

}
@media screen and (max-width: 1024px) {
    right: 17%;
    width: 5rem;
    height: 5rem;
}
`

class Maps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addresses: [],
            zoom: 2.5
        }

        // Allows requestData() function to access adresses from the App component
        this.requestData = this.requestData.bind(this)
        this.coordinatesCalculation = this.coordinatesCalculation.bind(this)
    }

    setLocalStorage(address) {
        let existing = JSON.parse(localStorage.getItem("addresses"));
      if (existing == null) {
        existing = [];
      }
      console.log(existing)
      existing.push(address);
      console.log(existing)
      existing = JSON.stringify(existing);
      console.log(existing)
      localStorage.setItem("addresses", existing);
    }

    requestData() {

        let addressesArray = []
        this.setState({
            addresses: []
        })

        for (let i = 0; i < this.props.addresses.length; i++) {
        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.google.com/maps/api/geocode/json?address=${this.props.addresses[i]}&key=${APIkeys.googleMaps}`)
            .then((response) => {
                try {
                let geoLocation = {
                        address: response.data.results[0].formatted_address,
                        coordinates: response.data.results[0].geometry.location
                    }
                this.setLocalStorage(geoLocation.address)
                addressesArray.push(geoLocation);
                } catch(error) {
                    addressesArray.filter(address => address.address !== this.props.addresses[i]) //Error -if the name of the address is not legit, or couldn't be found with the google maps request
                    this.props.badAddress("One or more of your addresses did not return any results")
                }
            })
           }
           this.setState({
            addresses: addressesArray
            }, () => {
                this.props.onRequest(this.state.addresses) //Passes the new addresses (to the parent App)
            })
           setTimeout(() => {
               this.coordinatesCalculation()
           }, 1000)

        }

    coordinatesCalculation() {
        let latCoords = []
        let lngCoords = []
        try {
            for (let i = 0; i < this.state.addresses.length; i++) {
                latCoords.push(this.state.addresses[i].coordinates.lat)
                lngCoords.push(this.state.addresses[i].coordinates.lng)
            }

            let latSum = latCoords.reduce((previous, current) => current += previous);
            let latAvg = latSum / latCoords.length; //Calculate the total latitude sum and divide it by the same amount of addresses submitted

            let lngSum = lngCoords.reduce((previous, current) => current += previous);
            let lngAvg = lngSum / lngCoords.length; //Calculate the total longitude sum and divide it by the same amount of addresses submitted

            this.setState({
                zoom: 10,
                avgCoordinates: {
                    lat: latAvg,
                    lng: lngAvg
                }
            })//The meeting point is created

        } catch {
            this.props.badAddress("None of your inputs returned an address, please try again.")
        }

    }



    render() {
      //Pass the calculated addresses and coordinates to MapsMap to display them.
      // Requires atleast 2 addresses for the "Meet up" button to be displayed
        return (
            <div>
                <MapsMap addressList={this.state.addresses} avgCoordinates={this.state.avgCoordinates} zoom={this.state.zoom} />
                {this.props.addresses.length > 1 && <StyledButton onClick={this.requestData}>Meet</StyledButton>}
            </div>
        )
    }
}


export default Maps;
