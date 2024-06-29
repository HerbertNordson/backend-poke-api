const { Router } = require("express");
const pokemonRoutes = Router();

pokemonRoutes.get(':pokemon')

module.exports = pokemonRoutes;
