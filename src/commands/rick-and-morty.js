const { SlashCommandBuilder } = require('discord.js');
const { getCharacters } = require('../api/rick-and-morty');
const command = new SlashCommandBuilder().setName('rick-and-morty').setDescription('Exibe os personagens do Rick and Morty').addStringOption(option => option.setName('name').setDescription('Nome de um personagem de Rick and Morty').setRequired(true)).toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const option = interaction.options.get('name').value;
  const data = await getCharacters(option);
  if (data) {
    const { results } = data;
    interaction.reply({ content: results[0].name, files: [results[0].image] });
  } else {
    interaction.reply('Não foi possível buscar por personagens');
  }
}
module.exports = { command, execute }