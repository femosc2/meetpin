import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {


    render() {
        const StyledFooter = styled.footer`
        background-color: red;
        `;

        return (
            <StyledFooter>
                <p>Google Maps Project Copyright 2019</p>
            </StyledFooter>
        )
    }
}

export default Footer;