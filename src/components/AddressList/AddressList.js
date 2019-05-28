import React, { Component } from 'react';
import AddressListItem from "./AddressListItem.js";
import styled, { keyframes } from "styled-components";

const slideInTop = keyframes`
	0% {
		transform: translateY(-100%);
	}
	50%{
		transform: translateY(8%);
	}
	65%{
		transform: translateY(-4%);
	}
	80%{
		transform: translateY(4%);
	}
	95%{
		transform: translateY(-2%);
	}			
	100% {
		transform: translateY(0%);
	}		
}
`



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
    animation: ${slideInTop} .5s;

    @media screen and (max-width: 768px) {
       margin: auto;
        width: 90%;
        top: 20vh;
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