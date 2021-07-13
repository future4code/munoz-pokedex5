import React from 'react'
import styled from 'styled-components'
import '../pages/StyleReset/ResetCss.css'

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

function PokemonCard(props) {

    return(
        
      <>
          <ContainerCard >    
              <ImagemContainer>
                  <Img src={props.PokePhoto}></Img>
              </ImagemContainer>
                <ContainerBotoes>
                     <Botoes onClick={props.Add}>Adicionar a Pokédex</Botoes>
                     <Botoes  onClick = {props.goToPokemonDetailsPage}>Ver detalhes</Botoes>
                </ContainerBotoes>
          </ContainerCard> 
     
      </>
      
        
             

           
        
    );
}

export default PokemonCard;





// {pokemons && pokemons.map((poke) => {
//   return <ContainerCard  key={poke.id} >    
//             <ImagemContainer>
//               <Img src={poke.sprites.front_default}></Img>
//             </ImagemContainer>
//             <ContainerBotoes>
//                 <Botoes onClick={() => funcaoteste(poke)}>Adicionar a Pokédex</Botoes>
//                 <Botoes  onClick = {() => goToPokemonDetailsPage(history)} >Ver detalhes</Botoes>
//             </ContainerBotoes>
//           </ContainerCard> 
// })}