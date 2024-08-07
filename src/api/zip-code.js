const getInfo = async (cep) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
  } catch (error) {
    return null;
  }
}

module.exports = { getInfo }