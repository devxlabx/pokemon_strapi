module.exports = {
    routes: [
        {
            method: "GET",
            path: "/pokemons/first20",
            handler: "pokemons.getFirst20Pokemons",
            config: {
                auth: false, // Accessible sans authentification
            },
        },
    ],
};
