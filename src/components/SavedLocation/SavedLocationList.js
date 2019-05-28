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
    margin: 0;
    position: absolute;
    font-family: 'Roboto Condensed', sans-serif;
    position: absolute;
    top: 18vh;
    left: 1vw;
    width: 18%;
    border-radius: .5rem;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.5);
    overflow-y: scroll;
    padding-inline-start: 0;

@media screen and (max-width: 1024px) {
    top: 10vh;
    width: 22%;
    padding: 0.5%;

}


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
