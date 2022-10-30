import React from 'react'
import { PokemonContext } from '../PokemonContext'
import { PokemonRow } from './PokemonRow'

export function Table() {
  const { state } = React.useContext(PokemonContext)
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {state.pokemon
          .filter((poke) =>
            poke.name.english.toLowerCase().includes(state.search.toLowerCase())
          )
          .slice(0, 15)
          .map((pokemon) => {
            return <PokemonRow key={pokemon.id} pokemon={pokemon} />
          })}
      </tbody>
    </table>
  )
}
