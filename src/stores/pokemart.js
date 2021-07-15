import { writable } from 'svelte/store';

export const pokemon = writable([]);

async function fetchPokemon(limit) {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'
    const pokemonData = []
    for (let i = 1; i < limit; i++) {
        const res = await fetch(url + i)
        const data = await res.json()
        const loadedPokemon = (() => {
            return {
                name: data.name,
                id: data.id,
                types: ((data) => {
                    let types = []
                    for (var index in data.types) {
                        types.push(data.types[index].type['name'])
                    }
                    return types
                })(data),
                abilities: ((data) => {
                    let abilities = []
                    for (var index in data.abilities) {
                        abilities.push(data.abilities[index].ability['name'])
                    }
                    return abilities
                })(data),
                height: data.height,
                weight: data.weight,
                image: imageUrl + data.id + '.png'

            }
        })();
        pokemonData.push(loadedPokemon)
    }

    pokemon.set(pokemonData)
}
fetchPokemon(150);