import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToPokedexPage } from '../routes/coordinator';
import PokemonCard from '../components/PokemonCards';


const FullPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    width: 100%;
    height: 8vh;
    align-items: center;
    display: flex;
    background-color: aqua;
    justify-content: center;
`

const TituloDiv = styled.div`
   display: flex;
   justify-content: center;
   flex-grow: 1;
   padding-right: 100px;
`

const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 16vh;
`

const ContainerCard = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-row-gap: 10px;
   column-gap: 35px;
   margin: 10px 10px 10px 0px;
`

function HomePage() {    
    const history = useHistory();

   
    return(
        <FullPage>
            <>
                <Header>
                  <BotoesDiv> 
                  <button className="buttonPokedexPage" onClick = {() => goToPokedexPage(history)}>Ir para Pokedex</button>
                  </BotoesDiv>
                 
                  <TituloDiv>
                  <h1>Lista de Pokémons</h1>
                  </TituloDiv>
                </Header>

                <ContainerCard>

                   <PokemonCard />
                   
                   
                   {/* Repeti os cards para poder testar a ordem/espaço dos cards
                   Quando usarmos a API a gente passa o map e etc. */}
                </ContainerCard>
                      
            </>
        </FullPage>
    );
}

export default HomePage;

