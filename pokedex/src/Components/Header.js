import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    height: 8%;
    align-items: center;
    display: flex;
    background-color: orange;
    justify-content: space-evenly;
`;

const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
`;

const Button = styled.button`
    padding: 0.5em 0.8em;
    border-radius: 0.6em;
    font-size: 18px;
    background-color: white;
    border: 1px solid black;
    @media (max-width: 375px) {
        font-size: 14px;
    };
    @media (max-width: 1300px) {
        font-size: 16px;
    };
    &: hover {
        cursor: pointer;
        background-color: black;
        border: 1px solid white;
        color: whitesmoke;
    };
`;

function Header(props) {

    return (
        <HeaderContainer>
            <BotoesDiv>
                <Button onClick={props.onClickLeftButton}>{props.leftButton}</Button>
            </BotoesDiv>
            <BotoesDiv>
                <Button onClick={props.onClickRightButton}>{props.rightButton}</Button>
            </BotoesDiv>
        </HeaderContainer>
        )
};

export default Header;