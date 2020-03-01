const bot = require("../bot.js");
const Discord = require("discord.js");

var command = module.exports = {};
command.config = {};
command.config.name = ['suppression', 'testAlias2'];
command.config.authorized = [];
command.config.activated = true;
command.config.channel = ['test'];
  
bot.client.on('message', message => {
    if (message.channel.name === 'test' && !message.author.bot && message.content.toLowerCase().includes('!supprime')) {
      message.reply('Ta date d\'anniversaire est bien supprimé. Ton discord id est : '+ message.author.discriminator);
    }
})