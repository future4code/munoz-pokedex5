import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import PokemonCard from '../Components/PokemonCards'
import styled from 'styled-components'
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom'
import { goToHomePage, goToPokedexPage, goToPokemonDetailsPage } from '../routes/coordinator'
import { BASE_URL } from '../constantes/urls'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination'
import { useGlobalContext } from '../global/GlobalContext'
import LinearProgress from '@material-ui/core/LinearProgress';


const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial;
`

const ContainerCard = styled.div`
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

const Paginacao = styled.div`
`

function HomePage() {

  const [pokeNomes, setPokeNomes] = useState([])
  const [pokemons, setPokemons] = useState([])
  const { states, setters } = useGlobalContext()
  const history = useHistory()
  const [numeroPagina, setNumeroPagina] = useState(1)
  const [loading, setLoading] = useState(false)


  const onChangePagina = (event, value) => {
    setNumeroPagina(value)
  }

  

 

  useEffect(() => {
    setLoading(true)
    getPokeNomes()
  }, [numeroPagina])

  useEffect(() => {
    const novoArray = []
    pokeNomes.forEach((poke) => {
      axios
        .get(`${BASE_URL}/pokemon/${poke.name}`)
        .then((response) => {
          novoArray.push(response.data)
          if (novoArray.length === 20) {
            const orderedList = novoArray.sort((a, b) => {
              return a.id - b.id
            })
            setPokemons(orderedList)
            setLoading(false)
          }
        })
        .catch((error) => console.log(error.message))
    })
  }, [pokeNomes])

  const getPokeNomes = () => {
    
    const offset = (numeroPagina - 1) * 20;
    axios
      .get(`${BASE_URL}/pokemon/?limit=20&offset=${offset}`)
      .then((response) => {
        setPokeNomes(response.data.results)
        setLoading(false)
      })
      
  
  }

  const pegaPokemonOnClick = (poke) => {

    const newArrayPokemon = [...states.pokedex, poke]
    setters.setPokedex(newArrayPokemon)

  }

 

  const filtered = pokemons.filter((poke) => {
    const estaNaPokedex = states.pokedex.find((mons) => {
      if (poke.id === mons.id) {
        return true
      } else {
        return false
      }
    })
    if (estaNaPokedex) {
      return false
    } else {
      return true
    }

  })

  return (
    
    <FullPage>
    
      <Header
        leftButton='HOME'
        rightButton='POKÉDEX'
        onClickLeftButton={() => goToHomePage(history)}
        onClickRightButton={() => goToPokedexPage(history)}
      />
      {loading ? <p>CARREGANDO...<LinearProgress size={40} thickness={10} variant="determinate"  /></p> :  
      <ContainerCard>
        {filtered.map((value) => {
          return (
            <PokemonCard
              key={value.id}
              Add={() => pegaPokemonOnClick(value)}
              pokeName={value.name}
              PokePhoto={value.sprites.front_default}
              goToPokemonDetailsPage={() => goToPokemonDetailsPage(history, value.name)}
            />)
        })}      
      </ContainerCard>}

      <Paginacao>
       <Pagination count={256}  color="primary" onChange={onChangePagina} />
      </Paginacao>

    </FullPage>
  );
}

export default HomePage;

