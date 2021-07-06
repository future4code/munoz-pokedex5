import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import { goToPokemonDetailsPage } from '../routes/coordinator';

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PokedexPage() {

    const history = useHistory();

    return(
        <FullPage>
            <div>
                <h1>POKEDEX PAGE</h1>
                <div>
                    <button onClick = {() => goToHomePage(history)}>HOME PAGE</button>
                    <button onClick = {() => goToPokemonDetailsPage(history)}>DETAILS PAGE</button>
                </div>
            </div>
        </FullPage>
    );
}

export default PokedexPage;