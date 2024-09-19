const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Returns a select menu!"),
  async execute(interaction, client) {
    const menu = new StringSelectMenuBuilder()
      .setCustomId("show-menu")
      .setMaxValues(1)
      .setMinValues(1)
      .setPlaceholder("Select a value")
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: "Option 1",
          value: "option-1",
          description: "This is the first option",
        }),
        new StringSelectMenuOptionBuilder({
          label: "Option 2",
          value: "option-2",
          description: "This is the second option",
        }),
        new StringSelectMenuOptionBuilder({
          label: "Option 3",
          value: "option-3",
          description: "This is the third option",
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
