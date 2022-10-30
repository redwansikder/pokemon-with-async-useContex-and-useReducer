import React from 'react'
import './App.css'
import { SinglePokemon } from './components/SinglePokemon'
import { Input } from './components/Input'
import { Table } from './components/Table'
import { PokemonContext } from './PokemonContext'
import { pokemonReducer } from './pokemonReducer'

function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    search: '',
    selPoke: null,
    pokemon: [],
  })

  React.useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'SET_POKEMON',
          payload: data,
        })
      )
  }, [])

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className='App'>
        <h1>Pokemon API frontend.</h1>
        <Input />
        <div className='grid'>
          <Table />
          <div>
            {state.selPoke ? (
              <SinglePokemon />
            ) : (
              <h1 style={{ textAlign: 'left' }}>Click a Pokemon's name.</h1>
            )}
          </div>
        </div>
      </div>
    </PokemonContext.Provider>
  )
}

export default App
