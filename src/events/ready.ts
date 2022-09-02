import { Client } from 'discord.js';
require('dotenv').config();

module.exports = {
    name: 'ready',
    once: true,
    run: (client: Client) => {
        if (!client.user) {
            throw new Error("Client user is null");
        }
        console.log(`Logged in as ${client.user.tag}!`);
    },
};