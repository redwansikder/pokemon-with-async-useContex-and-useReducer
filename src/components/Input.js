import React from 'react'
import { PokemonContext } from '../PokemonContext'

export function Input() {
  const { state, dispatch } = React.useContext(PokemonContext)
  return (
    <input
      placeholder='Enter Pokemon name:'
      value={state.search}
      onChange={(e) =>
        dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    ></input>
  )
}
