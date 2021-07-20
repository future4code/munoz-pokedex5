import React, {useContext} from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import {goToHomePage, goToPokemonDetailsPage, goToBattlePage  } from '../routes/coordinator';
import { useGlobalContext } from '../global/GlobalContext'
import PokemonCard from '../Components/PokemonCards'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import DeleteIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';
import Header from '../Components/Header'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';


const FullPage = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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

function PokedexPage() {

    const {states, setters} = useGlobalContext()

    const history = useHistory();

    const excluirDaPokedex = (pok) => {
        const arrayExcluir = states.pokedex.filter((poke) => {
            if (poke.name === pok) {
              return false;
            } else {
              return true;
            }
          })
          setters.setPokedex(arrayExcluir)
      }


    return(
        <FullPage>
            <>
                <Header
                    titlePage='PoKeDeX'
                    leftButton='VOLTAR PARA HOME'
                    leftIcon={<KeyboardReturnIcon />}
                    rightButton='BATALHAR'
                    rightIcon={<CompareArrowsIcon />}
                    onClickLeftButton={() => goToHomePage(history)}
                    onClickRightButton={() => goToBattlePage(history)}
                ></Header>
                
                <ContainerCardPoke>                
                     {states.pokedex.map((poke) => {
                        return <PokemonCard
                                    key={poke.id}
                                    PokeName={poke.name}
                                    PokePhoto={poke.sprites.front_default}
                                    UpButton='EXCLUIR'
                                    OnUp={() => excluirDaPokedex(poke.name)} 
                                    IconUp={<DeleteIcon />}
                                    DowButton='DETALHES'            
                                    OnDow={() => goToPokemonDetailsPage(history, poke.name)}
                                    IconDow={<InfoIcon/>}  
                                    />
                            
                                    })}
                </ContainerCardPoke> 
                

            </>
        </FullPage>
    );
}

export default PokedexPage;
