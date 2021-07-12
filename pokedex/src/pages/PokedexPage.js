import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import PokemonCard from '../Components/PokemonCards';


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
    background-color: red;
    justify-content: center;
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

const ContainerCard = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
   grid-row-gap: 10px;
   column-gap: 35px;
   margin: 10px 10px 10px 0px;
`


function PokedexPage(props) {

    const history = useHistory();

    console.log(props)

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

            <ContainerCard>

                {props.pokedex.map((poke) => {
                     return <PokemonCard key={poke.id} PokePhoto={poke.sprites.front_default}/>
        
                })}

            </ContainerCard>
                

            </>
        </FullPage>
    );
}

export default PokedexPage;
