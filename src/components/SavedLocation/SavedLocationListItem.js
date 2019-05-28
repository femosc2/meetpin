import React, { Component } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 0;
`

class SavedLocationListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <StyledP key={Math.floor(Math.random())}>{this.props.address}</StyledP>
        <hr></hr>
      </div>
      );
    }
  }


export default SavedLocationListItem;
