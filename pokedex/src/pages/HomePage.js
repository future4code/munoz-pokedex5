import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { goToPokedexPage } from '../routes/coordinator';
import { goToPokemonDetailsPage } from '../routes/coordinator';

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function HomePage() {

    const history = useHistory();

    return(
        <FullPage>
            <div>
                <h1>HOME PAGE</h1>
                <div>
                    <button onClick = {() => goToPokedexPage(history)}>POKEDEX</button>
                    <button onClick = {() => goToPokemonDetailsPage(history)}>DETAILS PAGE</button>
                </div>
            </div>
        </FullPage>
    );
}

export default HomePage;