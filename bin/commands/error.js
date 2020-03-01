
var command = module.exports = {};

command.config = {};
command.config.name = ['error'];
command.config.authorized = ['NOBODY'];
command.config.activated = true;

command.run = async (client, message) => {
    message.channel.send("Une erreur est survenu ! Veuillez contacter le développeur du bot");
    if (message.channel.name === 'test' && !message.author.bot && message.content.toLowerCase().includes('!ajout'))  {
        var dateTransformer = moment(message.content.normalize(), ['DDMMMM', 'DD-MM', 'DD/MM'], false).format('DD/MM');
        if(dateTransformer == 'Invalid date')
        {
          message.reply("Date Invalide - Rentré une date au format jour/mois");
        } else {
          message.reply(dateTransformer);
        }
        message.delete();
    }
}

command.activate = async () => {
    activated = true;
}

command.disable = async () => {
    activated = false;
}

command.getConfig = async () => {
    return command.config;
}