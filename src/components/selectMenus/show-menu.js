const { execute } = require("../../events/client/interactionCreate");

module.exports = {
  data: {
    name: "show-menu",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Has seleccionado: ${interaction.values[0]}`,
    });
  },
};
