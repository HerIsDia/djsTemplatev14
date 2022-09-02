# Discord.js typescript starter template v14.

This is a little template for create discord bot using typescript. It's the replacement for the [discord.js starter template](https://github.com/HerIsDia/BotTemplate) made for the v13.

## Directory structure

    - `src`: The source code of the bot.
        - `index.ts`: All the main code of the bot and the handlers, including the client.
        - `commands`: For creating slash commands.
            - `ping.ts`: A ping command example.
            - `pingServ.ts`: Same ping command but with a server argument.
        - `events`: For creating client's event.
            - `interactionCreate.ts`
            - `ready.ts`
        - `components`: Place for creating buttons, modals or other components.
            - `buttonhey.ts`: A button example.
    - package.json
    - README.md
    - LICENSE
    - ...

## Installation

1. Clone the repository.
2. Install the dependancies. (I recommend using pnpm)
3. Run `npm run dev` to start the bot.

## Commands file structures.

This is a structure for creating commands. The commands are stored in the `commands` folder. The structure is as follows:

```ts
import { Interaction, InteractionType, SlashCommandBuilder } from 'discord.js'; // Importation of the discord.js library.
import { CommandHandler } from '../types'; // Import Type

const name = '...'; // Set the name of the command.

const command = new SlashCommandBuilder().setName(name).setDescription('...'); // Set the description of the command.

const run = async (interaction: Interaction) => {
  if (interaction.type != InteractionType.ApplicationCommand) return;
  // Your code here.
};

module.exports = {
  name: name,
  command: command.toJSON(),
  run,
} as CommandHandler;
```

## Events file structures.

This is a structure for creating events. The events are stored in the `events` folder. The structure is as follows:

```ts
import { Client } from 'discord.js'; // Import the discord.js library.
import { EventHandler } from '../types'; // Import Type

const event: EventHandler = {
  name: '...', // Name of the event.
  once: true,
  run: (client: Client) => {
    // Your code here.
  },
};

module.exports = event;
```

## Components file structures.

This is a structure for creating components. The components are stored in the `components` folder. The structure is as follows:

```ts
import {
  ButtonBuilder,
  ButtonStyle,
  Interaction,
  InteractionType,
} from 'discord.js'; // Import the discord.js library.
import { ComponentsHandler } from '../types'; // Import Type

const ID = '...'; // Set the ID of the component.

// Don't forget to export the const below to use in your commands.
export const buttonHey = new ButtonBuilder()
  .setCustomId(ID)
  .setLabel('Hey !')
  .setEmoji('👋')
  .setStyle(ButtonStyle.Primary);

const run = (interaction: Interaction) => {
  if (interaction.type != InteractionType.MessageComponent) return;
  // Your code here.
};

module.exports = {
  ID,
  run,
} as ComponentsHandler;
```

## Limitations:

- You can't have a same name for a command's name and a component ID.
- Folders insides the `commands` and `components` folders won't be processed if there're commands and components functions.

## Environemnt variables

- `DISCORD_TOKEN`: The token of the bot.
- `CLIENT_ID`: The client ID of the bot.
