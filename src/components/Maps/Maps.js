import React, { Component } from 'react';
import MapsMap from './MapsMap.js';
import APIkeys from '../../config.js';
import axios from "axios";


class Maps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addresses: []
        }

        // Allows requestData() function to accsess adresses from the App component
        this.requestData = this.requestData.bind(this)
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
                    addresses: addressesArray
                })
                console.log(this.state)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
            });
           }
    }
    


    render() {
        const styleButton = {
  zIndex: 8000,
  position: "absolute",
}
        return (
            <div>
                <MapsMap addressList={this.state.addresses} />
                <button onClick={this.requestData} style={styleButton}>Click menibba</button>
            </div>
        )
    }
}


export default Maps;