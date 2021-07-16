import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const HeaderContainer = styled.header`
    width: 100%;
    height: 8%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        height: 18vh;
    };
    
`;

const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
`;

/* const Button = styled.button`
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
`; */

function Header(props) {

    return (
        
        
        
        <AppBar position="static">
            <Toolbar>
                <HeaderContainer>
                    <Fab variant="extended" size="medium"  onClick={props.onClickLeftButton}>
                        <HomeIcon />
                            HOME
                    </Fab>
                    <Typography variant="h4" >
                        POKEMONS
                    </Typography>
            
                    <Fab variant="extended" size="medium"  onClick={props.onClickRightButton}>
                        <FormatListBulletedIcon />
                            POKEDÉX
                    </Fab>
                </HeaderContainer>
            </Toolbar>
            
                
        </AppBar>
            
           /*  <BotoesDiv>
                <Button onClick={props.onClickLeftButton}>{props.leftButton}</Button>
            </BotoesDiv> */
            
            /* <BotoesDiv>
                <Button onClick={props.onClickRightButton}>{props.rightButton}</Button>
            </BotoesDiv> */
        
        )
};

export default Header;