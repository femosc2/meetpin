import React, { Component } from "react";
import SavedLocationListItem from './SavedLocationListItem.js';
import styled, { keyframes } from "styled-components";


const slideInSide = keyframes`
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0%);
	}		
}
`

const StyledUl = styled.ul`
  position: absolute;
  top: 23%;
  padding: 0;
  -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
  background-color: rgba(255, 255, 255, 0.8);
  max-height: 57vh;
  overflow-y: scroll;
  padding: .5rem;
  z-index: 8500;
  animation: ${slideInSide} 1s;

  @media screen and (max-width: 768px) {
    max-height: 100vh;
    top: 0%;
    margin: 0;
} `

class SavedLocationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledUl>
        <h1>History</h1>
      {this.props.addresses !== null && this.props.addresses.map(address => {
        return (
          <SavedLocationListItem address={address} />
        )
    })}
    </StyledUl>
    );
  }
  //borde hämta från localstorage (Skapa ett state i SavedLocation). Just nu hämtas det från App.
}

export default SavedLocationList;
