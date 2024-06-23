const getCharacters = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    return await response.json();
  } catch (error) {
    return null;
  }
}

module.exports = { getCharacters }