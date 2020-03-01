module.exports = async (client, message) => {
  try {
    console.log("Reception d'un event Message");
    if(message.author.bot) {
      console.log("Message du bot");
      return;
    }

    console.log("Determine si le message contient le préfixe");
    if (!message.content.startsWith(client.config.prefix)) return
    
    console.log("Normalisation du message");
    var arrayMessage = message.content.slice(client.config.prefix.length).trim().split(" ");
    var cmdReceipt = arrayMessage[0].normalize().toLowerCase();
    var parameter = "";
    if(arrayMessage.length > 1) parameter = arrayMessage.shift().toLowerCase;

    console.log("Recherche de la commande");
    try{
      const cmd = client.config.commands.get(cmdReceipt) || client.config.commands.find(function(element) {return element.config.name.find(function(commandeMessage) { return commandeMessage.toLowerCase() === cmdReceipt.toLowerCase()})});
      console.log("Commande trouvé : " + cmd);  
    } catch(error) {
      console.log("Bot don't understand command, please retry again later - " + error);
      return; 
    }

    console.log("Vérification si la commande est activé");
    if(!cmd.config.activated) {
      console.log('Command disable !');
      return; 
    }
    
    //console.log("Rôles de l'user : " + message.author);
    //var authorized = message.member.guild.some(role => cmd.config.roleAuthorize.includes("role")) || cmd.config.roleAuthorize.length === 0;
    var authorized = cmd.config.channel.includes(message.channel.name);
    if(authorized)
    {
      console.log('Lancement de la commande ...')
      await cmd.run(client, message, parameter);
    } else {
      console.log("Not Authorized for user this command;")
      return;
    }
  } catch(error) {
    console.log("Error : message event it's broken ! ");
    console.log(error);
  }
}