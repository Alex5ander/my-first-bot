const { SlashCommandBuilder } = require('discord.js');
const command = new SlashCommandBuilder().setName('hello').setDescription('Say hello');
const execute = (interaction) => interaction.reply('hello');
module.exports = { command, execute }