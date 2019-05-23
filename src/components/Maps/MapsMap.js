import React, { Component } from 'react';
import styled from 'styled-components';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import APIkeys from '../../config.js';

const StyledMapsMap = styled.div`
        background-color: red;
    `;

export class MapsMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (APIkeys.googleMaps)
})(MapsMap);