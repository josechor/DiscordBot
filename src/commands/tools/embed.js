const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Fantastyc embed."),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("Este es sech")
      .setDescription("Esta es la gran descripcion")
      .setColor(0x1f1f1f)
      .setImage(client.user.displayAvatarURL())
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp(Date.now())
      .addFields([
        {
          name: "Campo numero 1",
          value: "Este es el valor del campo número 1",
          inline: true,
        },
        {
          name: "Campo numero 2",
          value: "Este es el valor del campo número 2",
          inline: true,
        },
      ]);

    await interaction.reply({
      embeds: [embed],
    });
  },
};
