import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
  render() {
    const StyledHeader = styled.header`
    background-color: blue;
    `;

    return (
      <StyledHeader>
        <h1>Google maps FAV</h1>
      </StyledHeader>
    )

  }
}


export default Header
