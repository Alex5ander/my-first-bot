const { SlashCommandBuilder } = require('discord.js');
const { getPokemon } = require('../api/pokemon');
const command = new SlashCommandBuilder().setName('pokemon').setDescription('Exibe um pokemon').addStringOption(option => option.setName('pokemon').setDescription('nome de um pokemon').setRequired(true)).toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const option = interaction.options.get('pokemon').value;
  const pokemon = await getPokemon(option);
  if (pokemon) {

    const { abilities, sprites, height, name, stats, types, weight } = pokemon;

    const abilitiesName = abilities.map(ability => ability.ability.name).join(', ');
    const statsValue = stats.map(stat => stat.stat.name + ': ' + stat.base_stat).join(', ');
    const typesValue = types.map(type => type.type.name).join(', ');

    const { front_default } = sprites.other.showdown;

    interaction.reply({
      content: `
${name}
${typesValue}
${abilitiesName}
Altura: ${height / 10} m
Peso: ${weight / 10} kg
${statsValue}
      `,
      files: [front_default]
    });
  } else {
    interaction.reply('Pokemon não encontrado');
  }
}
module.exports = { command, execute }