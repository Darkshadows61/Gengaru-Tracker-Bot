const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('genji')
		.setDescription('Provides information about genji.')
		.addUserOption(option => option.setName('genji').setDescription('Genji')),
	async execute(interaction) {
		const user = interaction.options.getUser('genji');
		await interaction.reply(`Genjis status is ${interaction.guild}.`)
	},
};