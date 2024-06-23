const getPokemon = async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

module.exports = { getPokemon }