import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import PokedexPage from '../pages/PokedexPage';
import PokemonDetailsPage from '../pages/PokemonDetailsPage';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/pokedex'>
                    <PokedexPage />
                </Route>
                <Route exact path='/pokemon/:name'>
                    <PokemonDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;