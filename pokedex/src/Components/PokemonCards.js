import React from 'react'
import styled from 'styled-components'
import '../pages/StyleReset/ResetCss.css'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import InfoIcon from '@material-ui/icons/Info';


/*Componente de cards de Pokemons */

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

const ImagemContainer = styled.div`
    width: 17vw;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    height: 40px;
    width: 45%;
`;
const Img = styled.img`
    height: 60%;
    align-items: center; 
    margin-bottom: 40px;
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

function PokemonCard(props) {

    return (
        <ContainerCard >
                <PokeName>{props.pokeName}</PokeName>
            <ImagemContainer>
                <Img src={props.PokePhoto}></Img>
            </ImagemContainer>
            <ContainerBotoes>
                <Button
                variant="contained"
                color="primary"
                size="medium"                
                startIcon={<AddCircleIcon />}
                onClick={props.Add}
                >ADd A POKEDEX</Button>

                <Button
                variant="contained"
                color="primary"
                size="medium"                
                startIcon={<InfoIcon />}
                onClick={props.goToPokemonDetailsPage}
                >VER DETALHES</Button>
                {/* <Botoes onClick={props.Add}>Adicionar a Pokédex</Botoes>
                <Botoes onClick={props.goToPokemonDetailsPage}>Ver detalhes</Botoes>  */}
            </ContainerBotoes>
        </ContainerCard>
    );
};

export default PokemonCard;