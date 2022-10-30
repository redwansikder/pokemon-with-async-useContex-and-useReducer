import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function SinglePokemon() {
  const { state } = React.useContext(PokemonContext)

  return (
    <div className='SinglePokemon'>
      <h1>
        Name: {state.selPoke.name.english}, ID: {state.selPoke.id}
      </h1>
      <table>
        <tbody>
          {Object.keys(state.selPoke.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{state.selPoke.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
