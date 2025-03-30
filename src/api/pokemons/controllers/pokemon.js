"use strict";

const fetch = require("node-fetch");

module.exports = {
    async getFirst20Pokemons(ctx) {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
            const data = await response.json();

            return data.results; // Retourne les 20 premiers Pokémon
        } catch (error) {
            ctx.throw(500, "Erreur lors de la récupération des Pokémon");
        }
    },
};
