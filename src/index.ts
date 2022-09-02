import { Client, GatewayIntentBits } from "discord.js";
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
    if (!client.user) {
        throw new Error("Client user is null");
    }
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);