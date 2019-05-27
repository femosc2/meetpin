import React, { Component } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 1%;

@media screen and (max-width: 1024px) {
  font-size: 0.9em;
  padding: 1.5%;
}

`

class SavedLocationListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <StyledP key={Math.floor(Math.random())}>{this.props.address}</StyledP>
      </div>
      );
    }
  }


export default SavedLocationListItem;
