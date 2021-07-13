import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constantes/urls';
import { pokeTypes, pokeTypePT } from '../constantes/pokemonTypes';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useHistory, useParams } from 'react-router-dom';
import { goToHomePage,  goToPokedexPage } from '../routes/coordinator';
import axios from 'axios';
import icon_09 from '../img/icon_09.png';
import icon_10 from '../img/icon_10.png';
import icon_23 from '../img/icon_23.png';
import icon_35 from '../img/icon_35.png';
import icon_36 from '../img/icon_36.png';
import icon_134 from '../img/icon_134.png';

const FullPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial;
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
`

const InfoContainer = styled.div`
    display: flex;
    height: 90vh;
    width: 100%;
    justify-content: center;
    background-color: rgb(240, 238, 238);
`
const DetailsCard = styled.div`
    align-self: center;
    width: 27%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   background-color: white;
   padding: 56px;
   border-radius: 25px;
`

const PokeNameContainer = styled.div`
    margin-bottom: 32px;
    text-transform: uppercase;
`;

const PokeInfo = styled.h2`
    margin-bottom: 1em;
`;
const PowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const PokeTypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1em;
    width: 60%;
`;

const PokeType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    text-transform: uppercase;
    ${pokeTypes};
`;

const PokeImageContainer = styled.div`
    display: flex;
    margin-bottom: 1em;
`;

const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
`;

const PokeAbilities = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
`;

const Ability = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AbilityIcon = styled.img`
    margin-right: 5px;
`;

function PokemonDetailsPage() {

    const history = useHistory();

    const params = useParams();

    const [pokeDetails, setPokeDetails] = useState()

    const getPokemonDetails = () => {
        axios.get(`${BASE_URL}/pokemon/${params.name}`)
            .then((response) => {
                setPokeDetails(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            })
    }

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <FullPage>
            <Header>
                <BotoesDiv>
                    <button onClick={() => goToHomePage(history)}>Voltar para home</button>
                </BotoesDiv>


                <BotoesDiv>
                    <button onClick={() => goToPokedexPage(history)}>Ir para pokedex</button>
                </BotoesDiv>
            </Header>
            {pokeDetails ? (
                <InfoContainer>
                    <DetailsCard>
                        <PokeNameContainer>
                            <h1>{pokeDetails.name}</h1>
                        </PokeNameContainer>
                        <PowerContainer>
                            <PokeInfo>PODERES</PokeInfo>
                            <PokeTypeContainer>
                                {pokeDetails.types.map((poke) => {
                                    return (
                                        <PokeType type={poke.type.name}>
                                            {pokeTypePT(poke.type.name)}
                                        </PokeType>)
                                })}
                            </PokeTypeContainer>
                        </PowerContainer>
                        <PokeImageContainer>
                            <CardImgs src={pokeDetails.sprites.front_default} alt={`${pokeDetails.name} front default`} />
                            <CardImgs src={pokeDetails.sprites.back_default} alt={`${pokeDetails.name} back default`} />
                        </PokeImageContainer>
                        <AbilitiesContainer>
                            <PokeInfo>HABILIDADES</PokeInfo>
                            <PokeAbilities>
                                <Ability>
                                    <AbilityIcon src={icon_134} />
                                    Saúde: {pokeDetails.stats[0].base_stat}
                                </Ability>
                                <Ability>
                                    <AbilityIcon src={icon_35} />
                                    Ataque: {pokeDetails.stats[1].base_stat}
                                </Ability>
                                <Ability>
                                    <AbilityIcon src={icon_09} />
                                    Defesa: {pokeDetails.stats[2].base_stat}
                                </Ability>
                            </PokeAbilities>
                            <PokeAbilities>
                                <Ability>
                                    <AbilityIcon src={icon_36} />
                                    Ataque especial: {pokeDetails.stats[3].base_stat}
                                </Ability>
                                <Ability>
                                    <AbilityIcon src={icon_10} />
                                    Defesa especial: {pokeDetails.stats[4].base_stat}
                                </Ability>
                                <Ability>
                                    <AbilityIcon src={icon_23} />
                                    Velocidade: {pokeDetails.stats[5].base_stat}
                                </Ability>
                            </PokeAbilities>
                        </AbilitiesContainer>
                        <div>
                            <PokeInfo>PODERES PRINCIPAIS</PokeInfo>
                            {pokeDetails.moves.slice(0, 5).map((poke) => {
                                return <p>{poke.move.name}</p>
                            })}
                        </div>

                    </DetailsCard>
                </InfoContainer>)
                : <div></div>
            }
        </FullPage>
    );
}

export default PokemonDetailsPage;
