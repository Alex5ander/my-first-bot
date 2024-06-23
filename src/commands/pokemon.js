const { SlashCommandBuilder } = require('discord.js');
const { getPokemon } = require('../api/pokemon');
const command = new SlashCommandBuilder().setName('pokemon').setDescription('Exibe um pokemon').addStringOption(option => option.setName('pokemon').setDescription('nome de um pokemon').setRequired(true)).toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const option = interaction.options.get("pokemon").value;
  const pokemon = await getPokemon(option);
  if (pokemon) {
    interaction.reply(pokemon.sprites.front_default);
  } else {
    interaction.reply("Pokemon não encontrado");
  }
}
module.exports = { command, execute }