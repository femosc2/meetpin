import React, { Component } from "react";
import styled, { keyframes } from "styled-components"

const slideInBottom = keyframes`
    0% {
        transform: translateY(200%);
        z-index: 8000;
    }
    50% {
        transform: translateY(0%);
        z-index: 8000;
    }
    100% {
        transform: translateY(200%);
        z-index: 8000;
    }
`

const StyledDiv = styled.div`
position: absolute;
color: white;
background-color: orangered;
z-index: 8000;
bottom: 0;
left: 25%;
width: 50%;
color: white;
text-align: center;
animation: ${slideInBottom} 5s 1;
`

const StyledButton = styled.button`
z-index: 8000;
position: absolute;
bottom: 0;
background: black;
color: white;
`

class MessageBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showBox: true
        }
        this.removeError = this.removeError.bind(this)
    }

    removeError() {
        this.setState({
            showBox: false
        })
    }

    render() {
        return (
            <div>
            {this.state.showBox &&
                <div>
                <StyledDiv> {this.props.errorMessage}</StyledDiv>
                <StyledButton onClick={this.removeError}> X </StyledButton>
                </div>
            }
            </div>
        )
    }    
}

export default MessageBox

