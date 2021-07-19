import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { BASE_URL } from '../constantes/urls';
import { goToHomePage, goToPokedexPage } from '../routes/coordinator';
import { pokeTypes, pokeTypePT } from '../constantes/pokemonTypes';
import styled from 'styled-components';
import './StyleReset/ResetCss.css'
import { useParams, useHistory } from 'react-router-dom';
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
    align-items: center;
    font-family: Arial;
    width: 100vw;
    height: 100vh;
`;

const InfoContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: start;
    background-color: rgb(240, 238, 238);
    @media (max-width: 375px) {
        background-color: white;
        align-items: normal;
        justify-content: center;
    };
    @media (min-width: 720px) {
        height: 100%;
    };
`;

const CardImgs = styled.img`
    height: auto;
    width: 160px;
    @media (max-width: 375px) {
        flex-direction: column;
        width: 140px;
    };
`;

const DetailsCard = styled.div`
    align-self: center;
    width: 39%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding: 56px;
    border-radius: 25px;
    @media (max-width: 375px) {
        width: 70%;
        align-items: center;
        justify-content: start;
        padding: 0;
        margin-top: 15px;
    };
    @media (min-width: 720px) {
        margin-top: 15px;
    };
`;

const PokeNameContainer = styled.div`
    margin-bottom: 32px;
    text-transform: uppercase;
    @media (max-width: 375px) {
        margin-top: 1em;
        margin-bottom: 0.5em;
    };
`;

const PokeInfo = styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    @media (max-width: 375px) {
        margin-bottom: 0px;
        font-size: 16px;
        margin: 0.8em 0;
    };
`;
const PowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;
const PokeTypeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1em;
    width: 60%;
    @media (max-width: 375px) {
        margin-top: 0.2em;
        margin-bottom: 0px;
        font-size: 13px;
        font-weight: bold;
    };
`;

const PokeType = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    text-transform: uppercase;
    ${pokeTypes};
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const PokeImageContainer = styled.div`
    display: flex;
`;

const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const PokeAbilities = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1em;
    @media (max-width: 375px) {
        margin-bottom: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

const Ability = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 375px) {
        margin-bottom: 0px;
    };
`;

const AbilityIcon = styled.img`
    margin-right: 5px;
`;

const PokeName = styled.div`
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 375px) {
        font-size: 22px;
    };
`;

const SpecialMovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    };

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <FullPage>
            <Header
                leftButton='HOME'
                rightButton='POKÉDEX'
                onClickLeftButton={() => goToHomePage(history)}
                onClickRightButton={() => goToPokedexPage(history)}
            />
            {pokeDetails ? (
                <InfoContainer>
                    <DetailsCard>
                        <PokeNameContainer>
                            <PokeName>{pokeDetails.name}</PokeName>
                        </PokeNameContainer>
                        <PowerContainer>
                            <PokeInfo>PODERES</PokeInfo>
                            <PokeTypeContainer>
                                {pokeDetails.types.map((poke) => {
                                    return (
                                        <PokeType
                                            key={poke.type.name}
                                            type={poke.type.name}>
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
                        <SpecialMovesContainer>
                            <PokeInfo>PODERES PRINCIPAIS</PokeInfo>
                            {pokeDetails.moves.slice(0, 5).map((poke) => {
                                return <p key={poke.move.name}>{poke.move.name}</p>
                            })}
                        </SpecialMovesContainer>
                    </DetailsCard>
                </InfoContainer>)
                : <div></div>
            }
        </FullPage>
    );
}

export default PokemonDetailsPage;