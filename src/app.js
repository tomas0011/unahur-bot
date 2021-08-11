const { Client, Intents } = require('discord.js');
const TOKEN = `ODc0MjY5ODA2ODAxNTkyMzkw.YREhNQ.CRnRBXLyvb71QV7OOsCIBpiSQdw`;
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const getTestBot = (client) => client.channels.cache.find(channel => channel.name === 'test-bot');

client.once('ready', () => {
  console.log(`================================`);
  console.log(`================================`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`================================`);
  console.log(`================================`);

  const channel = getTestBot(client)
  channel.send('Ready!')
});

client.on('messageCreate', () => {
  const channel = getTestBot(client)
  channel.send('interactionCreate!')
	console.log(interaction);
})

client.on('channelCreate', interaction => {
  const channel = getTestBot(client)
  channel.send('channelCreate!')
	console.log(interaction);
});

client.on('channelDelete', interaction => {
  const channel = getTestBot(client)
  channel.send('channelDelete!')
	console.log(interaction);
});

client.login(TOKEN);
