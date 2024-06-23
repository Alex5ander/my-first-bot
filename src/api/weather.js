require('dotenv').config();

const getCurrent = async (q) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHERAPI_KEY}&q=${q}&aqi=no&lang=pt`);
    return await response.json();
  }
  catch (error) {
    return null;
  }
}

module.exports = { getCurrent };