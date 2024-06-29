const Pokemon = require("../model/pokemonModel");
const axios = require("axios");

class PokemonController {
  async read(req, res) {
    const { name } = req.params;
    res.set("Access-Control-Allow-Origin", "*");
    
    try {
      const pokemon = await axios({
        method: "get",
        url: `${process.env.BASE_URL_POKEAPI}pokemon/${name}`,
        timeout: 10000,
      });

      if (res.status(200)) {
        return res.status(200).json(pokemon.data);
      }
    } catch (error) {
      return res.status(error.response.status).json({
        status: error.response.status,
        message: error.message,
      });
    }
  }
}

module.exports = PokemonController;
