import React, { Component } from 'react';
import SavedLocationList from './SavedLocationList.js';
import SavedLocationListItem from './SavedLocationListItem.js';
import styled from 'styled-components';

const StyledButton = styled.button`
position: absolute;
left: 0;
right: 0;
z-index: 8000;
text-align: center;
left: 0.8%;
top: 12%;
padding: 0.5%;
border: none;
background-color: rgba(255, 255, 255, 0.5);
font-size: 20px;
border-radius: 35px;
text-align: center;
-webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
transition: 1s;
width: 11%;
@media only screen and (max-width: 768px) {
   width: 75%;
}
&:hover {
   background: rgba(255,126,119,1);
   filter: hue-rotate(180deg);
   transition: 1s;
   cursor: pointer;
}
&:active {
   background: #fff;
   transition 0.3s;
   box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.0);
}
`

class SavedLocation extends Component {
  constructor(props) {
    super()
    this.state = {
      savedAddresses: [],
      isHidden: true
    }
    this.getLocalStorageLocations = this.getLocalStorageLocations.bind(this)
    this.toggleLocalStorageMenu = this.toggleLocalStorageMenu.bind(this)
  }

  getLocalStorageLocations() {
    const savedAddresses = JSON.parse(localStorage.getItem("addresses"))
    this.setState({
      savedAddresses
    })
};

toggleLocalStorageMenu() {
  if (this.state.isHidden) {
    this.setState({
      ...this.state,
      isHidden: false
    })
  } else {
    this.setState({
      ...this.state,
      isHidden: true
    })
  }
}

componentDidMount() {
  setInterval(() => {
    this.getLocalStorageLocations()
  }, 1000)
}

  render() {
  return(
    <div>
    {!this.state.isHidden && this.props.addresses !== null &&
    <SavedLocationList addresses={this.state.savedAddresses} />
    }
    <StyledButton onClick={this.toggleLocalStorageMenu}>Toggle Menu</StyledButton>
    </div>
  );
  }
}


export default SavedLocation;
