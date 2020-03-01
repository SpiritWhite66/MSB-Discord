const moment = require("moment");

var command = module.exports = {};

command.config = {};
command.config.name = ['ajout', 'testAlias'];
command.config.authorized = [];
command.config.activated = true;
command.config.channel = ['test'];

command.run = async (client, message, parameter) => {
    console.log(parameter);
    
    var dateTransformer = moment(
      message.content.normalize(),
      ["DDMMMM", "DD-MM", "DD/MM"],
      false
    ).format("DD/MM");

    if (dateTransformer == "Invalid date") {
      message.reply("Date Invalide - Rentré une date au format jour/mois");
    } else {
      message.reply(dateTransformer);
    }
    message.delete();
  
}