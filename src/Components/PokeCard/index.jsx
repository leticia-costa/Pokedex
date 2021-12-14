import React, { useState, useEffect } from "react";
import { Busca } from "../../api";
import { Box, Nome, Imagem, ID } from "../Card";
import Coracao from "../../assets/images/Coracao.png";
import { ColorType } from "../UI/ColorType";
import { TypePoke } from "../TypePoke";
import { Like } from "../Like";

// Componente PokeCard recebe as propriedades dos Pokemons e define cada pokemon individual
export const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState();
    useEffect(() => {
        Busca(props.name, setPokemon);
    });
    // Carregamento de cada pokemon individual
    if (!pokemon) {
        return (
            <>
                <p>Carregando {props.name}</p>
            </>
        );
    }
    //Formação de cada PokeCard
    return (
        <>
            <Box>
                <Like src={Coracao} alt="Like" />
                <Imagem
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                />
                <ID>Nº 0{pokemon.id}</ID>
                <Nome>{pokemon.name}</Nome>
                    {pokemon.types.map(({ type }) => (
                    <TypePoke style={{ backgroundColor: ColorType[type.name] }}>
                        {" "}
                        {type.name}
                        {" "}
                    </TypePoke>
                    ))}
            </Box>
        </>
    );
};
