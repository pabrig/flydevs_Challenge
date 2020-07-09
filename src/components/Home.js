import React, { useState } from "react";
import Logo from '../logo.png'
import Search from "./Search";
import { seachPokemon } from "./GetApi";
import Pokemon from "./Pokemon";
import { Navbar, Spinner, Alert } from "react-bootstrap";

export default function Home() {

  //Style
  const styleNavbar = {
    background: 'linear-gradient(to bottom,#cb2d3e, #ef473a)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  const spinnerStyle = {
    width:'12rem',
    height: '12rem',

  }

  //State
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //API
  const getPoke = async (query) => {
    if (!query) {
      setErrorMessage("You insert a Pokemon.");
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await seachPokemon(query);
        const result = await response.json();
        setPokemon(result);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
        setErrorMessage("Pokemon not found.");
      }
    }, 1500);
  };

  return (
    <div className>
      <Navbar className="navbar" style={styleNavbar}>
        <Navbar.Brand href="#home">
        
          <h2 className="text-center text-white">
            <img src={Logo} className="mr-1"/>
          Pokemon Finder</h2>
        </Navbar.Brand>
      </Navbar>
      {error ? <Alert variant="danger" className="m-2">{errorMessage} </Alert> : null}
      <Search  style={spinnerStyle} className=".bg-dark" getPoke={getPoke} />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Spinner animation="border" variant="warning" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <div>
          <Pokemon
            sprite={pokemon.sprites.front_default}
            name={pokemon.name}
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
        </div>
      ) : null}
    </div>
  );
}
