require('dotenv').config()
const { REST, Routes } = require('discord.js');
const { commands } = require('./commands');

const rest = new REST().setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.SERVER_ID), { body: commands })