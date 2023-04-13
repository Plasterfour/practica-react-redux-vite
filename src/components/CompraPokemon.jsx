import React from "react";
import { connect } from "react-redux";
import { buy_pokemon_action, return_pokmeon_action } from "../redux/actions/gameShopAction";
const CompraPokemon = (props) => {
  return (
    <div>
      <button
        className="btn btn-dark btn-sm m-2 p-3"
        onClick={() => {
          props.buy_pokemon_action(1);
        }}
      >
        Comprar
      </button>
      <button
        className="btn btn-dark btn-sm m-2 p-3"
        onClick={() => {
          props.return_pokmeon_action(1);
        }}
      >
        Regresar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokmeon_action,
};
export default connect(mapStateToProps, mapDispatchToProps)(CompraPokemon);
