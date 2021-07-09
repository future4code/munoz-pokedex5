import React from 'react';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import { goToPokedexPage } from '../routes/coordinator';

const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Header = styled.header`
    width: 100vw;
    height: 8vh;
    align-items: center;
    display: flex;
    background-color: orange;
    justify-content: space-between;
`

const BotoesDiv = styled.div`
   display: flex;
   justify-content: center;
   width: 16vh;
`
const CardImgs = styled.img`
   height: 160px;
   width: 160px;
   background-color: rgb(240, 238, 238);
`
const ContainerInfo = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 90vh;
   width: 70%;
`
const ContainerImg = styled.div`
   width: 160px;
   height: 500px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const ContainerHabilidades = styled.div`
   height: 400px;
   width: 300px;
   padding: 8px;
   background-color: rgb(240, 238, 238);
`
const ListaHabilidades = styled.ul`
   list-style: none;
   margin-top: 10px;
`

const ContainerPoderEAtack = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 400px;
   width: 300px;
   padding: 10px;
`
const ContainerPoder = styled.div`
   height: 100px;
   width: 300px;
   background-color: rgb(240, 238, 238);
`
const ContainerAtack = styled.div`
   height: 250px;
   width: 300px;
   background-color: rgb(240, 238, 238);
`

function PokemonDetailsPage() {

    const history = useHistory();

    return(
        <FullPage>
            <>
                <Header>
                  <BotoesDiv> 
                  <button onClick = {() => goToHomePage(history)}>Voltar para home</button>
                  </BotoesDiv>
                  

                  <BotoesDiv>
                  <button onClick = {() => goToPokedexPage(history)}>Ir para pokedex</button>
                  </BotoesDiv>
                </Header>


                <ContainerInfo>
                    <ContainerImg>
                        <CardImgs src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'></CardImgs>
                        <CardImgs  src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png'></CardImgs>
                    </ContainerImg>
                    <ContainerHabilidades>
                        <h2>Habilidades</h2>
                        <ListaHabilidades>
                            <li>hp: 78</li>
                            <li>attack: 84</li>
                            <li>defense: 78</li>
                            <li>special-attack: 109</li>
                            <li>special-defense: 85</li>
                            <li>speed: 100</li>
                        </ListaHabilidades>

                    </ContainerHabilidades>
                    <ContainerPoderEAtack>
                        <ContainerPoder>
                            <h2>Poderes</h2>
                            <p>Fire</p>
                            <p>Flying</p>

                        </ContainerPoder>
                        <ContainerAtack>
                            <h1>Ataques Especiais</h1>
                            <p>mega-punch</p>
                            <p>fire-punch</p>
                            <p>thunder-punch</p>
                            <p>scratch</p>
                            <p>swords-dance</p>

                        </ContainerAtack>
                    </ContainerPoderEAtack>
                </ContainerInfo>              
            </>
        </FullPage>
    );
}

export default PokemonDetailsPage;
