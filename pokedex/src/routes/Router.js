import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage';
import PokedexPage from '../pages/PokedexPage';
import PokemonDetailsPage from '../pages/PokemonDetailsPage';


function Router() {

    const [pokedex, setPokedex] = useState([])
   

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage  pokedex={pokedex} setPokedex={setPokedex}/>
                </Route>
                <Route exact path='/pokedex'>
                    <PokedexPage  pokedex={pokedex} setPokedex={setPokedex}/>
                </Route>
                <Route exact path='/pokemon/:name'>
                    <PokemonDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;