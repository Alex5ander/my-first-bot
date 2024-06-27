const getCharacters = async (name) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

module.exports = { getCharacters }