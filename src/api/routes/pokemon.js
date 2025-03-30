module.exports = {
    routes: [
        {
            method: "GET",
            path: "/pokemon/:name",
            handler: "pokemon.getPokemon",
            config: {
                policies: [],
            },
        },
    ],
};
