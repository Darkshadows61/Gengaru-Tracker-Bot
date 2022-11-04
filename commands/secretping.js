const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secretping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		return interaction.reply({content:'Secret Pong!', ephemeral: true});
	},
};