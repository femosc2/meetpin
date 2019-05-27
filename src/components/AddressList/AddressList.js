import React, { Component } from 'react';
import AddressListItem from "./AddressListItem.js";
import styled from 'styled-components';

const StyledList = styled.ul`
    margin: 0;
    position: absolute;
    font-family: 'Roboto Condensed', sans-serif;
    position: absolute;
    top: 9vh;
    right: 6vw;
    width: 16%;
    border-radius: .5rem;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0;

    @media screen and (max-width: 768px) {
       margin: auto;
        width: 90%;
        top: 20vh;
}

    @media screen and (max-width: 1024px) {
      width: 40%;
      right: 30%;
      margin: auto;
      top: 15vh;
}

    `


class AddressList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <StyledList>
                    {this.props.addresses.map(address => {
                        return (

                            <AddressListItem address={address} />
                        )
                    })}
                </StyledList>
            </div>
        )
    }
}

export default AddressList;
