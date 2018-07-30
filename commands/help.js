const Discord = require('discord.js');
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️ **>admin** : for stuff commands

  ❤️ **>public** : for public commands
  
  ❤️ **>invite** : to invite the bot
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setFooter(`- Requested By: ${message.author.username}`)
  message.channel.send(embed)
}
