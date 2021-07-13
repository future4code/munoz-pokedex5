import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import { goToPokemonDetailsPage } from '../routes/coordinator';

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
const ContainerCardPoke = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    background-color: rgb(240, 238, 238);
    width: 100%;
    position: relative;
`

const ImagemContainer = styled.div`
    width: 17vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    height: 60%;
    align-items: center; 
    margin-bottom: 40px;
`

const ContainerBotoes = styled.div`
    display: flex;
    position: absolute;
    bottom: 0%;
    width: 100%;
    justify-content: center;
`

const Botoes = styled.button`
    width: 100%;
    height: 6vh;
    padding: 0px 10px 0px 10px;
`


function PokedexPage(props) {

    const history = useHistory();

    const excluirDaPokedex = (pok) => {
        const arrayExcluir = props.pokedex.filter((poke) => {
            if (poke.name === pok) {
              return false;
            } else {
              return true;
            }
          })
          props.setPokedex(arrayExcluir)
      }

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
                     return <>
                        <ContainerCardPoke key={poke.name} >    
                            <ImagemContainer>
                                <Img src={poke.sprites.front_default}></Img>
                            </ImagemContainer>
                            <ContainerBotoes>
                                    <Botoes onClick={() => excluirDaPokedex(poke.name)}>Remover da Pokédex</Botoes>
                                    <Botoes onClick={() => goToPokemonDetailsPage(history, poke.name)}>Ver detalhes</Botoes>
                            </ContainerBotoes>
                        </ContainerCardPoke> 
                
                    </>
        
                })}

            </ContainerCard>
                

            </>
        </FullPage>
    );
}

export default PokedexPage;
