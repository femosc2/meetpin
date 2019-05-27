import React, { Component } from "react";
import SavedLocationListItem from './SavedLocationListItem.js';
import styled from "styled-components";

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
    `

class SavedLocationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledUl>
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
