import React, { Component } from 'react';
import styled from 'styled-components';

    const StyledMapsMap = styled.div`
        background-color: red;
    `;

class MapsMap extends Component {
    constructor() {
        super()

        this.state = {

        }
    }


    render() {

        //console.log(APIkeys)

        return (
            <StyledMapsMap>
                <div id="map">  
                
                </div>
            </StyledMapsMap>
        )
    }
}

export default MapsMap;