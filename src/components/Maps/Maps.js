import React, { Component } from 'react';
import MapsMap from './MapsMap.js';
import APIkeys from '../../config.js';
import axios from "axios";


class Maps extends Component {
    constructor() { 
        super()

        this.state = {
            adress: ''
        }
     }


    requestData() {
        console.log(APIkeys)
        return axios.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyA1tm9TYnrK19DFi87OzdjgzKqZQdQVnJ8')
    }


    render() {
        return (
            <div>
                <MapsMap />
            </div>
        )
    }
}

export default Maps;