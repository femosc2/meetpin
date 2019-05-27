import React, { Component } from "react";
import SavedLocationListItem from './SavedLocationListItem.js';
import styled from "styled-components";

const StyledUl = styled.ul`
  position: absolute;
  top: 23%;
  padding: 0;
  background-color: pink;
`

class SavedLocationList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StyledUl>
<<<<<<< HEAD
      {this.props.addresses.map(address => {
=======
      {this.props.locations.map(location => { //creates a new array with each element inside the locations variable. returns single element in list
>>>>>>> savedlocation
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
