import React, { Component } from 'react';
import AddressListItem from "./AddressListItem.js";
import styled from 'styled-components';

const StyledList = styled.ul`
    position: absolute;
    font-family: 'Roboto Condensed', sans-serif;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    width: 30%;
    border-radius: .5rem;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.25);
    background-color: rgba(255, 255, 255, 0.5);
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