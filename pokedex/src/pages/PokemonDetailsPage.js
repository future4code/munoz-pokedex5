import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import { goToPokedexPage } from '../routes/coordinator';

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const Header = styled.header`
    width: 100vw;
    height: 8vh;
    align-items: center;
    display: flex;
    background-color: orange;
    justify-content: space-between;
`

const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 16vh;
`

function PokemonDetailsPage() {

    const history = useHistory();

    return(
        <FullPage>
            <>
                <Header>
                  <BotoesDiv> 
                  <button onClick = {() => goToHomePage(history)}>Voltar para home</button>
                  </BotoesDiv>
                  

                  <BotoesDiv>
                  <button onClick = {() => goToPokedexPage(history)}>Ir para pokedex</button>
                  </BotoesDiv>
                </Header>
                               
            </>
        </FullPage>
    );
}

export default PokemonDetailsPage;
