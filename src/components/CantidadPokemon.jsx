import React from "react";
import { connect } from "react-redux";

const CantidadPokemon = (props) => {
  return <div>Unidades:{props.game_shop.pokemon} </div>;
};

const mapStateToProps = (state) => {
  return {
    game_shop: state.game_shop,
  };
};
export default connect(mapStateToProps)(CantidadPokemon);
