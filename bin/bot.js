const Discord = require("discord.js");
const config = require("./config.json");
const fs = require('fs');

//Exposed Module
var bot = module.exports = {};

// Exposed variables
bot.client = new Discord.Client();
bot.config = {};
bot.config.isStarted = false;
bot.config.commands = new Discord.Collection();
bot.config.events = new Discord.Collection();
bot.config.reactions = new Discord.Collection();
bot.config.prefix = "!";

//Events
bot.client.on("ready", () => {
    console.log("Configuration loading :");
    console.log(bot.config);
    bot.client.guilds.get(config.twitchezManege.idGuild).channels.get(config.twitchezManege.idChannel).fetchMessage(config.twitchezManege.idMessage);
    console.log("Configuration ok");

});


//Exposed Methods
bot.stop = function (){
  bot.client.destroy();
  bot.isStarted = false;
 }
bot.start = function (){
  loadConfig(bot);
  bot.config.isStarted = true;
  bot.client.login(config.token);
}

var loadConfig = function(bot){
  // Loading events
  console.log(bot.config);
  const eventFiles = fs.readdirSync(__dirname+'\\events').filter(file => file.endsWith('.js'));
  console.log(eventFiles);
  eventFiles.forEach(file => {
    const filename = `./events/${file}`;
    const event = require(filename);
    const eventName = file.split('.')[0];
    
    bot.client.on(eventName, event.bind(null, bot));
    bot.config.events.set(eventName, event);
  })

  const commandFiles = fs.readdirSync(__dirname+'\\commands').filter(file => file.endsWith('.js'))
  console.log(commandFiles);
  commandFiles.forEach(file => {

    const filename = `./commands/${file}`
    const command = require(filename);
    commandName = '';
    try{
      commandName = command.config.name[0];
    } catch {
      console.log('Command configuration not completed, name not present in ' + filename);
      commandName = file.split('.')[0];
    }
    bot.config.commands.set(commandName, command);
  });

  const reactionFiles = fs.readdirSync(__dirname+'\\reactions').filter(file => file.endsWith('.js'))
  reactionFiles.forEach(file => {
    const filename = `./reactions/${file}`
    const reaction = require(filename);
    reactionChannel = '';
    reactionChannel = reaction.config.channelId;
    bot.config.reactions.set(reactionChannel, reaction);
    console.log(bot.config.reactions.get(reactionChannel))
  });
  

}


module.exports = bot;