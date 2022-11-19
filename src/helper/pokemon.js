import data from "./data";

const pokemons = data.map((el) => ({
  name: el.name,
  imageUrl: el.sprites.other.dream_world.front_default,
}));

export default pokemons;
