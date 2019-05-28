import React, { Component } from 'react';
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

const StyledListItem = styled.li`
    text-align: center;
    list-style: none;
    padding: .5rem;
    animation: ${slideInTop} 1s;

    @media screen and (max-width: 768px) {
     padding: 0;
}
    @media screen and (max-width: 1024px) {
      padding: 1.5%;
}

`

class AddressListItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <StyledListItem key={Math.floor(Math.random())}> {this.props.address} </StyledListItem>
        )
    }
}

export default AddressListItem;
