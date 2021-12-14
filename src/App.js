import React, { useState, useEffect } from "react";
import { Busca } from "./api";
import { GlobalStyle } from "./Components/UI/GlobalStyle";
import Header from "./Components/Header";
import { PokeCard } from "./Components/PokeCard";
import { Container } from "./Components/Card";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  
  // Acessamos os Pokemons da API definindo um limite de 20 e os atribuindo a variavél Pokemon
  useEffect(() => {
    Busca("?limit=20", setPokemons);
  }, []);

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Container>
      {pokemons.results?.map((pokemon) => (
        <PokeCard name={pokemon.name} key={pokemon.name} />
      ))}
      </Container>
    </div>
  );
}
