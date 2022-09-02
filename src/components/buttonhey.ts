import { ButtonBuilder, ButtonStyle, Interaction, InteractionType } from "discord.js";
import { ComponentsHandler } from "../types";

const ID = "buttonhey";

export const buttonHey = new ButtonBuilder()
    .setCustomId(ID)
    .setLabel("Hey !")
    .setEmoji("👋")
    .setStyle(ButtonStyle.Primary)

const run = (interaction: Interaction) => {
    if (interaction.type != InteractionType.MessageComponent) return
    interaction.reply({
        content: "Yo !",
        ephemeral: true,
    });
}

module.exports = {
    ID,
    run,
} as ComponentsHandler;