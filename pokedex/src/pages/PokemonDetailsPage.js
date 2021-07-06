import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { goToHomePage } from '../routes/coordinator';
import { goToPokedexPage } from '../routes/coordinator';

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function PokemonDetailsPage() {

    const history = useHistory();

    return(
        <FullPage>
            <div>
                <h1>POKEMON DETAILS PAGE</h1>
                <div>
                    <button onClick = {() => goToHomePage(history)}>HOME PAGE</button>
                    <button onClick = {() => goToPokedexPage(history)}>DETAILS PAGE</button>
                </div>
            </div>
        </FullPage>
    );
}

export default PokemonDetailsPage;