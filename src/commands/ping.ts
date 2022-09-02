import { Interaction, InteractionType, SlashCommandBuilder } from "discord.js"
import { CommandHandler } from "../types";

const name = "ping";

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription("Replies with pong!")
    .setDescriptionLocalization("fr", "Répond pong!")

const run = async (interaction: Interaction) => {
    if (interaction.type != InteractionType.ApplicationCommand) return
    await interaction.reply("Pong!");
}

module.exports = {
    name: name,
    command: command.toJSON(),
    run,
} as CommandHandler