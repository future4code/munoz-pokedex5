import React from 'react';
import styled from 'styled-components';
import '../pages/StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToPokemonDetailsPage } from '../routes/coordinator'


/*Componente de cards de Pokemons */

const ContainerCard = styled.div`
  display: flex;
  align-items: flex-end;
  background-color: rgb(240, 238, 238);
  width: 17vw;
  height: 40vh;
`
const ImagemContainer = styled.div`
 
`
const ContainerBotoes = styled.div`
  display: flex;
`

const Botoes = styled.button`
  width: 100%;
  height: 5vh;
  padding: 0px 20px 0 20px;
`

function PokemonCard() {

   const history = useHistory();

    return(
        <ContainerCard>
           <ImagemContainer>
             {/* Quando utilizarmos a API as imagens dos poke ficarão aqui dentro */}
           </ImagemContainer>

           <ContainerBotoes>
             <Botoes>Adicionar a Pokédex</Botoes>
             <Botoes onClick = {() => goToPokemonDetailsPage(history)} >Ver detalhes</Botoes>
           </ContainerBotoes>
        </ContainerCard>
    );
}

export default PokemonCard;