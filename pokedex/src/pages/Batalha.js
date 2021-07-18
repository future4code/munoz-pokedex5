import React, { useState } from 'react'
import Header from '../Components/Header'
import styled from 'styled-components';
import { useGlobalContext } from '../global/GlobalContext'
import { useHistory } from 'react-router';
import { goToHomePage, goToPokedexPage, goToPokemonDetailsPage } from '../routes/coordinator'
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
`;



const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 10px;
  margin: 20px 10px 10px 0px;
  width: 15%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
`

const ContainerCardPoke = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: rgb(240, 238, 238);
  width: 90%;
`

const ImagemContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  align-items: center; 
`


function Batalha (props) {

  const [arrayPokeBattle, setArrayPokeBattle] = useState([])

  const {states} = useGlobalContext()

  const funcaoTeste = (poke) => {
    const newArrayPokemon = [...arrayPokeBattle.splice(0, 0), poke, ...arrayPokeBattle.splice(0, 1)]


    setArrayPokeBattle(newArrayPokemon)
  }

  const history = useHistory()
  
 

  console.log(arrayPokeBattle)

  return (
      <FullPage>
        <Header
          titlePage='POKE BATTLE'
          leftButton='VOLTAR PARA HOME'
          leftIcon={<HomeIcon />}
          rightButton='POKEDEX'
          rightIcon={<FormatListBulletedIcon/>}
          onClickLeftButton={() => goToHomePage(history)}
          onClickRightButton={() => goToPokedexPage(history)}
        ></Header>
        

      <div className="cont"> 
        <ContainerCard>

        {states.pokedex.map((poke) => {
                     return <>
                        <ContainerCardPoke key={poke.name} onClick={() => funcaoTeste(poke)} >    
                            <ImagemContainer>
                                <Img src={poke.sprites.front_default}></Img>
                            </ImagemContainer>
                        </ContainerCardPoke> 
                
                    </>
        
                })}
        </ContainerCard>        

      
        <div className="divlado">
          
           {arrayPokeBattle.map((poke) => {
                     return <>
                        <div className="contUm" key={poke.name} onClick={() => funcaoTeste(poke)} >    
                            <div className="contDo">
                                <img className="contTre" src={poke.sprites.front_default}></img>
                            </div>
                        </div> 
                
                    </>
                })}
        </div>    

      </div>      
       

      
      </FullPage>
  )
}

export default Batalha;