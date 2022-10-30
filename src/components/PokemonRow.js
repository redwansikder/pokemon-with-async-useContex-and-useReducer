import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function PokemonRow({ pokemon }) {
  const { dispatch } = React.useContext(PokemonContext)
  return (
    <tr>
      <td
        onClick={() =>
          dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon })
        }
      >
        {pokemon.name.english}
      </td>
    </tr>
  )
}
