export const goToHomePage = (history) =>{
    history.push('/');
};

export const goToPokemonDetailsPage = (history) => {
    history.push('/pokemon/:name');
};

export const goToPokedexPage = (history) => {
    history.push('/pokedex');
};