import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {GET_POKEMONS } from '../graphQL/get-pokemons';
import {Pokemon } from '../components/Pokemon';
export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: {first: 79 },
  });

  return (
    <div className="pokemons">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}
