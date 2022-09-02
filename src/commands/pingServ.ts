import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Interaction, InteractionType, SlashCommandBuilder } from "discord.js"
import { buttonHey } from "../components/buttonhey";
import { CommandHandler } from "../types";

const name = "pingserv";

const command = new SlashCommandBuilder()
    .setName(name)
    .setDescription("Replies with pong again!")
    .setDescriptionLocalization("fr", "Répond pong encore!")

const run = async (interaction: Interaction) => {
    if (interaction.type != InteractionType.ApplicationCommand) return
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(buttonHey);
    await interaction.reply({
        content: "pong!",
        ephemeral: true,
        components: [row]
    });
}

module.exports = {
    name,
    command: command.toJSON(),
    run,
    serversID: ["1014765028366360586"], // This server ID is a test server, for showing how this works.
} as CommandHandler