const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed ()
                    .setTitle(`**:arrow_right: Invite ༺${client.user.username}༻**`)
                    .setFooter(`- Requested By: ${message.author.username}`)
                    .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=469947837275308042&permissions=8&scope=bot`);

                   message.channel.sendEmbed(embed);
}