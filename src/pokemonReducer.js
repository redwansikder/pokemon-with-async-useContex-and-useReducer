export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        search: action.payload,
      }
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      }
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selPoke: action.payload,
      }
    default:
      throw new Error('No action')
  }
}
