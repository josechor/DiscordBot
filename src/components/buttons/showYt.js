module.exports = {
  data: {
    name: `show-yt`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "https://youtube.com",
    });
  },
};
