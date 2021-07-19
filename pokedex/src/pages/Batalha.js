import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../global/GlobalContext'
import { useHistory } from 'react-router';
import { goToHomePage, goToPokedexPage, goToPokemonDetailsPage } from '../routes/coordinator'
import HomeIcon from '@material-ui/icons/Home';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row-gap: 10px;
  margin: 20px 10px 10px 0px;
  width: 15%;
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: justify;
  @media (max-width: 375px) {
    width: 40%;
  };
`;

const ContainerCardPoke = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  background-color: rgb(240, 238, 238);
  width: 90%;
`;

const ImagemContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  align-items: center; 
`;

const Cont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivLado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 84vw;
  height: 90vh;
  @media (max-width: 375px) {
    justify-content: start;
  };
`;

const ContUm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const ContDo = styled.div`
  background-color: rgb(240, 238, 238);
`;

const ContTre = styled.img`
  width: 10vw;
  @media (max-width: 375px) {
    width: 30vw;
  };
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokeBattleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50%;
  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: space-evenly;
  };
`;

const BattleButton = styled.button`
  width: 120px;
  height: 40px;
`;

function Batalha() {

  const history = useHistory();

  const [arrayPokeBattle, setArrayPokeBattle] = useState([]);

  const { states } = useGlobalContext();

  const sendToBattle = (poke) => {
    const newArrayPokemon = [...arrayPokeBattle.splice(0, 0), poke, ...arrayPokeBattle.splice(0, 1)];
    setArrayPokeBattle(newArrayPokemon);
  };

  const pokemonBattle = () => {
    if (arrayPokeBattle[0] != null && arrayPokeBattle[1] != null) {
      const firstPoke = arrayPokeBattle[0];
      const secondPoke = arrayPokeBattle[1];
      let firstPokeStatus = 0;
      let secondPokeStatus = 0;
      for (let x = 0; x < 6; x++) {
        firstPokeStatus = firstPokeStatus + firstPoke.stats[x].base_stat;
        secondPokeStatus = secondPokeStatus + secondPoke.stats[x].base_stat;
      };
      if (firstPokeStatus > secondPokeStatus) {
        alert(`${firstPoke.name} venceu ${secondPoke.name} na batalha de Pokémons!`);
      }
      else if (secondPokeStatus > firstPokeStatus) {
        alert(`${secondPoke.name} venceu ${firstPoke.name} na batalha de Pokémons!`);
      }
      else if (secondPokeStatus === firstPokeStatus || firstPokeStatus === secondPokeStatus) {
        alert(`${secondPoke.name} empatou com ${firstPoke.name} na batalha de Pokémons!`);
      }
      setArrayPokeBattle([]);
    }
    else {
      alert("Selecione dois Pokémons para iniciar uma batalha!");
    };
  };

  return (
    <FullPage>
      <Header
        titlePage='POKÉ BATTLE'
        leftButton='VOLTAR PARA HOME'
        leftIcon={<HomeIcon />}
        rightButton='POKÉDEX'
        rightIcon={<FormatListBulletedIcon />}
        onClickLeftButton={() => goToHomePage(history)}
        onClickRightButton={() => goToPokedexPage(history)}
      ></Header>
      <Cont>
        <ContainerCard>
          {states.pokedex.map((poke) => {
            return (
              <ContainerCardPoke key={poke.name} onClick={() => sendToBattle(poke)} >
                <ImagemContainer>
                  <Img src={poke.sprites.front_default} />
                </ImagemContainer>
              </ContainerCardPoke>
            )
          })}
        </ContainerCard>
        <DivLado>
          <PokeBattleContainer>
            {arrayPokeBattle.map((poke) => {
              return (
                <ContUm key={poke.name} onClick={() => sendToBattle(poke)} >
                  <ContDo>
                    <ContTre src={poke.sprites.front_default} />
                  </ContDo>
                </ContUm>
              )
            })}
          </PokeBattleContainer>
          <ButtonContainer>
            <BattleButton onClick={pokemonBattle}>BATALHAR!</BattleButton>
          </ButtonContainer>
        </DivLado>
      </Cont>
    </FullPage>
  )
}

export default Batalha;