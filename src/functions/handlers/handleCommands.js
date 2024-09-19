const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync(`./src/commands`);
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));
      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
      }
    }
    const clientId = "599678533413109780";
    const guildId = "1031016736436260945";
    const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

    try {
      console.log(
        `Started refreshing ${client.commands.size} application (/) commands.`
      );
      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: client.commandArray }
      );
    } catch (error) {
      console.error(error);
    }
  };
};
