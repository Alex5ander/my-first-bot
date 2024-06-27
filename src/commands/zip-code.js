const { SlashCommandBuilder } = require('discord.js');
const { getInfo } = require('../api/zip-code');
const command = new SlashCommandBuilder().setName('zip-code').setDescription('Exibe dados do CEP fornecido').addStringOption(option => option.setName('cep').setDescription('CEP').setRequired(true)).toJSON();
/** @param { import('discord.js').Interaction<CacheType>} interaction */
const execute = async (interaction) => {
  const option = interaction.options.get('cep').value;
  const info = await getInfo(option);
  if (info) {
    const { logradouro, bairro, localidade, uf } = info;
    interaction.reply(`
Logradouro: ${logradouro}
Bairro: ${bairro}
Localidade: ${localidade}
UF: ${uf}
      `);
  } else {
    interaction.reply('Não encontrado');
  }
};
module.exports = { command, execute };