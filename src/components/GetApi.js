const url = `https://pokeapi.co/api/v2/`;
const query = {
    pokemon : 'pokemon',

}


export async function seachPokemon(pokemon){
 
    return fetch(`${url}${query.pokemon}/${pokemon}`);    

}