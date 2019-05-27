import React, { Component } from "react";
import styled from "styled-components";

const StyledP = styled.p`

`

class SavedLocationListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <StyledP>{this.props.address}</StyledP>
      </div>
      );
    }
  }


export default SavedLocationListItem;
