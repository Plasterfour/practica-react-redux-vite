import {
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_FAILURE,
} from "../actions/buscadorAction";

const initialState = {
  lading: false,
  pokemon: [],
  error: "",
};
const buscador = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        lading: true,
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        error: "",
      };
    case FETCH_POKEMON_FAILURE:
      return {
        loading: false,
        pokemon: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default buscador;
