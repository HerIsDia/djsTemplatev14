import { Client, GatewayIntentBits } from "discord.js";
import { readdirSync } from "fs";
import path from "path";
require("dotenv").config();

import type { EventHandler } from "./types";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.login(process.env.BOT_TOKEN);

const eventFiles = readdirSync(path.join(__dirname, ".", "events")).filter((file) =>
    file.endsWith('.ts') || file.endsWith('.js')
);


for (const file in eventFiles) {
    const event = require(`./events/${eventFiles[file]}`) as EventHandler;
    const { name, once, run } = event;
    if (once) {
        client.once(name, run);
    } else {
        client.on(name, run);
    }
}

// client.on('interactionCreate', async interaction => {
//     if (!interaction.isChatInputCommand()) return;

//     if (interaction.commandName === 'ping') {
//         await interaction.reply('Pong!');
//     }
// });
