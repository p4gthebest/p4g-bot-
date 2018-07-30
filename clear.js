const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.replay ('لا تملك صلاحية حدف الرسائل');
  var tfa7;
        tfa7 = parseInt();
      
      message.channel.fetchMessages({limit: tfa7}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

  let embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**Clearing The Room Done**
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setFooter(`- Requested By: ${message.author.username}`)
  message.channel.send(embed).then(tfa7 => {tfa7.delete(3000)});

}
