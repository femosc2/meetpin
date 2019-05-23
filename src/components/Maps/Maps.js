import React, { Component } from 'react';
import MapsMap from './MapsMap.js';
import APIkeys from '../../config.js';
import axios from "axios";


class Maps extends Component {
    constructor() {
        super()

        this.state = {
            // Lista med alla angivna adresser
            adress: []
        }
    }


    requestData() {

        // For loop för - gör 1 request för varje list item / adress som är angiven

        axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=${APIkeys.googleMaps}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }


    render() {
        return (
            <div>
                <MapsMap adressList={this.adress} />
                <button onClick={this.requestData}>Click menibba</button>
            </div>
        )
    }
}


export default Maps;