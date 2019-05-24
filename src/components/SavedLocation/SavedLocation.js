import React, { Component } from 'react';
import SavedLocationList from './SavedLocationList.js';
import SavedLocationListItem from './SavedLocationListItem.js';
import styled from 'styled-components';

class SavedLocation extends Component {
  render() {
    const StyledSavedLocation = styled.savedlocation`
    background-color: purple;
    `;

  return(
    <StyledSavedLocation>
      <h2>Din plats: </h2>
      //SavedLocationList
    </StyledSavedLocation>
  );
  }
}


//hämtar in state från App.js ( submittedvalues)
//så skapa ett state och spara submittedvalues där.
//skicka ner submittedvalues till barnet SavedLocationList




export default SavedLocation;
