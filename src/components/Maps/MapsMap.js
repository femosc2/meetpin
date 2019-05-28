import React, { Component } from 'react';
import styled from 'styled-components';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import APIkeys from '../../config.js';
import { NONAME } from 'dns';
import { isAbsolute } from 'path';
import { tsConstructorType } from '@babel/types';

const StyledMapsMap = styled.div`
        background-color: red;
    `;

export class MapsMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
    }
  }
  render() {
    const google = window.google;
    // Centers the map where the submitted addresses are located.
     // For each address in the addressList, returns a pin on the map with name details of the address
    return (
      <div>
        <Map google={this.props.google}
             zoom={this.props.zoom}
             center={this.props.avgCoordinates}>
          {this.props.addressList.map(address => {
            return (

              <Marker
                title={address.address}
                name={address.address}
                position={address.coordinates}
                icon={{
                  url: "https://image.flaticon.com/icons/svg/1511/1511107.svg",
                  anchor: new google.maps.Point(20, 20),
                  scaledSize: new google.maps.Size(40, 40)
                }}
          />
      )
    })}
    {this.props.avgCoordinates !== undefined && // If there is an average to calculate - return a pin with the average coordinates which indicates the ultimate meeting point!
            <Marker
            title={'Meet here!'}
            name={"meet"}
            position={this.props.avgCoordinates}
            icon={{
                  url: "https://image.flaticon.com/icons/svg/551/551559.svg",
                  anchor: new google.maps.Point(25, 25),
                  scaledSize: new google.maps.Size(50, 50)
                }}
          />
          }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: (APIkeys.googleMaps) })(MapsMap);
