const axios = require("axios");

module.exports = {
    async fetchPokemon(pokemonName) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            return response.data;
        } catch (error) {
            strapi.log.error("Erreur lors de la récupération du Pokémon :", error);
            return null;
        }
    },
};
