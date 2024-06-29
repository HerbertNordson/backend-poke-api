const Pokemon = require("../model/pokemonModel");

class PokemonController {
  async read() {
    const { pokemon } = request.params;
    const poke = new Pokemon();
    
  }
}

module.exports = PokemonController;
