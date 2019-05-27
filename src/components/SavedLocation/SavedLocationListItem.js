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
        <StyledP>{this.props.location}</StyledP>
      </div>
      );
    }
  }


export default SavedLocationListItem;
