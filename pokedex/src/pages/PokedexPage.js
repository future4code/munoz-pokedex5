import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';

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
    background-color: red;
    justify-content: center;
    padding-right: 150px;
`
const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 26vh;

`
const TituloDiv = styled.div`
   display: flex;
   justify-content: center;
   flex-grow: 1;
`

function PokedexPage() {

    const history = useHistory();

    return(
        <FullPage>
            <>
                <Header>
                  <BotoesDiv> 
                  <button onClick = {() => goToHomePage(history)}>Voltar para lista de pokemons</button>
                  </BotoesDiv>

                  <TituloDiv> 
                      <h1>Pokedex</h1>
                  </TituloDiv>

                </Header>
                               
            </>
        </FullPage>
    );
}

export default PokedexPage;



{/* <button onClick = {() => goToHomePage(history)}>HOME PAGE</button>
<button onClick = {() => goToPokemonDetailsPage(history)}>DETAILS PAGE</button> */}