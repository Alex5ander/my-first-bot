require('dotenv').config()
const { Client, GatewayIntentBits, Events } = require('discord.js');
const { executors } = require('./commands');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
})

client.on(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
})

client.on(Events.InteractionCreate, interaction => {
  if (interaction.isCommand()) {
    executors[interaction.commandName](interaction)
  }
})

client.login(process.env.TOKEN)