const moment = require("moment");

var reaction = module.exports = {};

reaction.config = {};
reaction.config.authorized = [];
reaction.config.activated = true;
reaction.config.channelId = '677231170366210073';

 // role fille : 677231640992415815
 // role garçon : 677231548910534656
reaction.run = async (client, reaction, user) => {
  let message = reaction.message;
  let emoji = reaction.emoji;
  if (emoji.name == '🇬') {
    console.log("Passage de l'utilisateur : " + user.username + " dans le rôle Garçon")
    message.guild.fetchMember(user.id).then(member => {
            if(!member.roles.get("677231640992415815")){
              member.addRole('677231548910534656');
            } else {
              console.log("L'utilisateur : "+user.username+" est déjà une fille ...")
            }
    });
  }
  if (emoji.name == '🇫') {
    console.log("Passage de l'utilisateur : " + user.username + " dans le rôle Fille")

    message.guild.fetchMember(user.id).then(member => {
      if(!member.roles.get("677231548910534656")){
        member.addRole('677231640992415815');
      }
      else {
        console.log("L'utilisateur : "+user.username+" est déjà un garçon ...")
      }
    });
  }
}