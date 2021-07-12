import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToPokedexPage } from '../routes/coordinator';
import PokemonCard from '../Components/PokemonCards';
import {BASE_URL} from '../constantes/urls'
import axios from 'axios'


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

function HomePage(props) {    

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
     
   const funcaoteste = (poke) =>{

    const newArrayPokemon = [...props.pokedex, poke]
    props.setPokedex(newArrayPokemon)


  }
 
  const listaDePokemons = pokemons && pokemons.map((poke) => {
    return <PokemonCard key={poke.id} Add={() => funcaoteste(poke)} PokePhoto={poke.sprites.front_default}/>

  })

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

                  {listaDePokemons}
                   
                </ContainerCard>
                      
            </>
        </FullPage>
    );
}

export default HomePage;

 {/* {listaDePokemons.filter((poke) => {
                  if(poke.id !== props.pokedex){
                    return console.log(poke)
                  }
                })} */}