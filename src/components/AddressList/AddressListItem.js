import React, { Component } from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
    text-align: center;
    list-style: none;
    `

class AddressListItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
                <StyledListItem key={this.props.address}> {this.props.address} </StyledListItem>
        )
    }
}

export default AddressListItem;