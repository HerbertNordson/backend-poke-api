class Pokemon {
  name = "";
  image = "";
  abilities = {};

  constructor(name, image, abilities) {
    this.name = name;
    this.image = image;
    this.abilities = abilities;
  }
}

module.exports = Pokemon;
