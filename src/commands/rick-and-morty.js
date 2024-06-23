const { SlashCommandBuilder } = require('discord.js');
const { getCharacters } = require('../api/rick-and-morty');
const command = new SlashCommandBuilder().setName('rick-and-morty').setDescription('Exibe os personagens do Rick and Morty').toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const data = await getCharacters();
  if (data) {
    const { results } = data;
    const messages = results.map(({ name, image }) => `${name}\n[${name}](${image})`).join('\n');
    interaction.reply(messages);
  } else {
    interaction.reply('Não foi possível buscar por personagens');
  }
}
module.exports = { command, execute }