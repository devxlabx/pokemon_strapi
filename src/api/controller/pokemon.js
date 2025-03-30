module.exports = {
    async getPokemon(ctx) {
        const { name } = ctx.params; // Récupère le nom du Pokémon depuis l'URL
        const data = await strapi.services.pokemon.fetchPokemon(name);

        if (!data) {
            return ctx.badRequest("Pokémon introuvable");
        }

        return ctx.send(data);
    },
};
