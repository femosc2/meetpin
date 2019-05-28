import React, { Component } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
    text-align: center;
    list-style: none;
    padding: .5rem;

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
