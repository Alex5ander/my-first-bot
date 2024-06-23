const { SlashCommandBuilder } = require('discord.js');
const { getCurrent } = require('../api/weather');
const command = new SlashCommandBuilder().setName("weather").setDescription('Exibe o clima da localização fornecida').addStringOption(option => option.setName('localização').setDescription('Localização').setRequired(true)).toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const option = interaction.options.get("localização").value;
  const data = await getCurrent(option);
  if (data) {
    const { location, current } = data;
    const { name, region, country } = location;
    const { temp_c, condition } = current;
    const { text, icon } = condition;

    const fullName = name + ", " + region + ", " + country;

    interaction.reply({ content: fullName + "\n" + temp_c + "°" + "\n" + text, files: ["https:" + icon] });
  } else {
    interaction.reply("Localização não encontrado");
  }
};
module.exports = { command, execute }