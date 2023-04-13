import React from "react";
import { useDispatch } from "react-redux";
import { buy_pokemon_action, return_pokmeon_action } from "../redux/actions/gameShopAction";

const CompraPokemonHook = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-dark btn-sm m-2 p-3"
        onClick={() => {
          dispatch(buy_pokemon_action(1));
        }}
      >
        Comprar
      </button>
      <button
        className="btn btn-dark btn-sm m-2 p-3"
        onClick={() => {
          dispatch(return_pokmeon_action(1));
        }}
      >
        Regresar
      </button>
    </div>
  );
};

export default CompraPokemonHook;
