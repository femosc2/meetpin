import React, { Component } from 'react';
import styled from 'styled-components';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import APIkeys from '../../config.js';
import { NONAME } from 'dns';
import { isAbsolute } from 'path';

const StyledMapsMap = styled.div`
        background-color: red;
    `;

export class MapsMap extends Component {
  constructor(props) {
    super(props)
    this.checkProps = this.checkProps.bind(this)
    this.state = {
      ...this.props
    }
  }
  checkProps() {
    console.log(this.state)
    this.forceUpdate()
  }
  render() {

const styleButton = {
  zIndex: 8000,
  position: "absolute",
}

    return ( 
      <div>
        <Map google={this.props.google} zoom={1}>
          {this.props.addressList.map(address => {
            return (
              <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={address.address}
                position={address.coordinates}
                />
            )
          })}
        </Map>
        <button onClick={this.checkProps} style={styleButton} >Hej</button>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: (APIkeys.googleMaps) })(MapsMap);