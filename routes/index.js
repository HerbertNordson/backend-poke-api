const { Router } = require("express");

const PokemonController = require("../controller/pokemonController");
const pokemonRoutes = new PokemonController();

const routes = Router();
routes.use("/pokemon/:name", pokemonRoutes.read);

module.exports = routes;
