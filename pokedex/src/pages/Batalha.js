import React, { useState } from 'react'
import Header from '../Components/Header'
import styled from 'styled-components';
import { useGlobalContext } from '../global/GlobalContext'
import { useHistory } from 'react-router-dom';
import {goToHomePage, goToPokemonDetailsPage, goToBattlePage  } from '../routes/coordinator';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';


const FullPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

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

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    position: relative;
    border: 1px solid black;
    border-radius: 25px;
    @media (max-width: 375px) {
        width: 60vw;
        align-items: center;
        height: 45vh;
    };
    font-family: roboto;
`;

const PokeName = styled.div`
    margin-top: 1em;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 375px) {
        font-size: 22px;
    };
`;

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
    flex-direction: column;
    position: absolute;
    bottom: 0%;
    justify-content: space-between ;
    width: 85%;
    height: 10.2vh;
    margin-bottom: 0.5em;
    @media (max-width: 375px) {
        flex-direction: column;
        align-items: center;
        height: 12vh;
    };
`;

const Botoes = styled.button`
    width: 100%;
    height: 6vh;
    padding: 0px 10px 0px 10px;
`


const ContainerCardPoke = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 10px;
  column-gap: 35px;
  margin: 10px 10px 10px 0px;
  @media(max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  };
`




function Batalha () {

  

  const history = useHistory();

  const [arrayPokeBattle, setArrayPokeBattle] = useState([])

  const {states, setters} = useGlobalContext()

  const funcaoTeste = (poke) => {
    const newArrayPokemon = [...arrayPokeBattle, poke]

    setArrayPokeBattle(newArrayPokemon)
  }

  const goToBack = () => {
    history.goBack()
  }
 

  console.log(arrayPokeBattle)

  return (
      <FullPage>

        <>
                <AppBar position="static">
                    <Toolbar>
                        <HeaderContainer>
                            <Fab variant="extended" size="medium" onClick = {goToBack} >
                                <KeyboardReturnIcon />
                                    VOLTAR PARA POKEDEX
                            </Fab>
                            <Typography variant="h4" >
                                POKE BATTLE
                            </Typography>

                            <Fab variant="extended" size="medium" onClick = {() => goToBattlePage(history)}>
                                BATALHA
                            </Fab>
                        </HeaderContainer>
                    </Toolbar>               
                </AppBar>
               

                <ContainerCardPoke>                
                     {states.pokedex.map((poke) => {
                        return <ContainerCard key={poke.name}>
                            <PokeName>{poke.name}</PokeName>
                                <ImagemContainer>
                                    <Img src={poke.sprites.front_default}></Img>
                                </ImagemContainer>
                                        
                                <ContainerBotoes>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="medium"                
                                        startIcon={<DeleteIcon />}
                                        
                                        >EXCLUIR</Button>
                                        
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="medium"                
                                        startIcon={<InfoIcon />}
                                        onClick={() => goToPokemonDetailsPage(history, poke.name)}
                                        >VER DETALHES</Button>                
                                </ContainerBotoes>
                            </ContainerCard>        
                                    })}
                </ContainerCardPoke> 
                

            </>
        

      
      </FullPage>
  )
}

export default Batalha;

{/* <HeaderContainer>
          <h1>Olá eae</h1>
        </HeaderContainer>

   
        <ContainerCard>

        {states.pokedex.map((poke) => {
                     return <>
                        <ContainerCardPoke key={poke.name} onClick={() => funcaoTeste(poke.name)} >    
                            <ImagemContainer>
                                <Img src={poke.sprites.front_default}></Img>
                            </ImagemContainer>
                        </ContainerCardPoke> 
                
                    </>
        
                })}
        </ContainerCard>     */}    