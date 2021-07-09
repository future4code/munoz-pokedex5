import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import '../pages/StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom'
import { goToPokemonDetailsPage } from '../routes/coordinator'
import axios from 'axios'
import {BASE_URL} from '../constantes/urls'


/*Componente de cards de Pokemons */

const ContainerCard = styled.div`
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
const Img = styled.img`
 height: 60%;
 align-items: center; 
 margin-bottom: 40px;
`

function PokemonCard() {

  const [pokeNomes, setPokeNomes] = useState([])
  const [pokemons, setPokemons] = useState([])
  const history = useHistory();

  useEffect(() => {
    getPokeNomes();
  }, []);

  useEffect(() => {
    const novoArray = [];
    pokeNomes.forEach((poke) => {
      axios
        .get(`${BASE_URL}/pokemon/${poke.name}`)
        .then((response) => {
          novoArray.push(response.data);
          if(novoArray.length === 20) {
            const orderedList = novoArray.sort((a, b) => {
              return a.id - b.id;
            })
            setPokemons(orderedList)
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [pokeNomes]);


  const getPokeNomes = () => {
    axios
      .get(`${BASE_URL}/pokemon?limit=20`)
      .then((response) => {
        setPokeNomes(response.data.results);
      })
      .catch((error) => console.log(error.message));
  };


    return(
        
      <>
        {pokemons && pokemons.map((poke) => {
          return <ContainerCard>    
                    <ImagemContainer>
                      <Img src={poke.sprites.front_default}></Img>
                    </ImagemContainer>
                    <ContainerBotoes>
                        <Botoes>Adicionar a Pokédex</Botoes>
                        <Botoes  onClick = {() => goToPokemonDetailsPage(history)} >Ver detalhes</Botoes>
                    </ContainerBotoes>
                  </ContainerCard> 
        })}
      </>
      
        
             

           
        
    );
}

export default PokemonCard;