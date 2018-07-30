const Discord = require('discord.js');
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️ **>calc** : For calculatrice **(~calc 1 + 1)**

  ❤️ **>Gwrithing** : for a ascii art writing **(~Gwriting hi)**

  ❤️ **>help** : For help commands

  ❤️ **>ping** : To see bot ping

  ❤️ **>server** : To see Server informations

  ❤️ **>report** : To report rule breakers **(~report NAME Reason)**

  ❤️ **>user** : To see your informations

  ❤️ **>binfo** : To See P-Bot informations
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setFooter(`- Requested By: ${message.author.username}`)
  message.author.send(embed)
  message.channel.send('Commands in dm')
}
