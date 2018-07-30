const Discord = require('discord.js');
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️ **>bc** : For Broadcast 

  ❤️ **>clear** : To clear a room from messages

  ❤️ **>vote** : To make a vote

  ❤️ **>kick** : To kick a member

  ❤️ **>ban** : To Ban member
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setFooter(`- Requested By: ${message.author.username}`)
  message.author.send(embed)
  message.channel.send('Commands in dm')
}
