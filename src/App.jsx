import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
/* import CantidadPokemon from "./components/CantidadPokemon";
import CompraPokemon from "./components/CompraPokemon"; */
import store from "./redux/store";
import { Provider } from "react-redux";
import CantidadPokemonHook from "./components/CantidadPokemon.hook";
import CompraPokemonHook from "./components/CompraPokemom.hook";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "470px" }}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img
                    src="https://imgs.search.brave.com/w9km987h4N3BpQUt6Itv8y31n8bkdto02rTColK29Ko/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzIzOTE0NTM1L3Iv/aWwvNzUwNjk1LzI4/Njk0NDk0MDUvaWxf/MTU4OHhOLjI4Njk0/NDk0MDVfZnI3NS5q/cGc"
                    alt="pokemon"
                    className="card-img"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook />
                      <CompraPokemonHook />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon />
          </div>
          <div className="col-12">
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
