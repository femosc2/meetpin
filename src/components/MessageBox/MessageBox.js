import React, { Component } from "react";
import styled, { keyframes } from "styled-components"

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
    
@media screen and (max-width: 768px) {
    width: 80%;
    left: 10%;
}
`

const StyledButton = styled.button`
z-index: 8000;
position: absolute;
bottom: 0;
background: orangered;
color: white;
width: 5%;
left: 50%;
bottom: 20px;
@media screen and (max-width: 768px) {
    bottom: 40px;
}
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

