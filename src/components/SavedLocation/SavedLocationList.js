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
      //borde hämta från localstorage (Skapa ett state i SavedLocation). Just nu hämtas det från App.
      {this.props.locations.map(location => {
        return (
          <SavedLocationListItem location={location} />
        )
    })}
    </StyledUl>
    );
  }
}

export default SavedLocationList;
