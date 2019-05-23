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
    this.checkProps = this.checkProps.bind(this)
  }
  checkProps() {
    console.log(this.state)
  }
  render() {
    const google = window.google;

    const styleButton = {
      zIndex: 8000,
      position: "absolute",
    }
    return (
      <div>
        <Map google={this.props.google}
             zoom={this.props.zoom} 
             center={this.props.avgCoordinates}>
          {this.props.addressList.map(address => {
            return (

              <Marker      
                title={'The marker`s title will appear as a tooltip.'}
                name={address.address}
                position={address.coordinates}
                icon={{
                  url: "https://svgur.com/i/DCs.svg",
                  anchor: new google.maps.Point(10, 10),
                  scaledSize: new google.maps.Size(20, 20)
                }}
          />
      )
    })}
          {this.props.avgCoordinates !== undefined &&<Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={"hej"}
            position={this.props.avgCoordinates}
          />
          }
        </Map>
        <button onClick={this.checkProps} style={styleButton} >Hej</button>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: (APIkeys.googleMaps) })(MapsMap);