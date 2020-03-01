module.exports = async (client, reaction, user) => {
  try {
    console.log("Recherche de la reaction");
    try{
    var channelName = reaction.message.channel.id;
    var react = client.config.reactions.get(channelName);
    console.log("Commande trouvé : " + react);  
    } catch(error) {
      console.log("Bot don't understand command, please retry again later - " + error);
      return; 
    }


    console.log("Vérification si la commande est activé");
    if(!react.config.activated) {
      console.log('Command disable !');
      return; 
    }
    
    console.log('Lancement de la commande ...')
    await react.run(client, reaction, user);

  } catch(error) {
    console.log("Error : message event it's broken ! ");
    console.log(error);
  }
}