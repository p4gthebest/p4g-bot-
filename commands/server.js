const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${message.guild.name}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
    .setThumbnail(message.guild.avatarURL)
    .setFooter(`-Requested By: ${message.author.username}`)
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ServerName : **${message.guild.name}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ServerOwner : **${message.guild.owner}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ServerID : **${message.guild.id}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ServerHost : **${message.guild.region}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️TotalMembers : **${message.guild.memberCount}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️MemberCount : **${message.guild.members.filter(m => !m.user.bot).size}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️BotCount : **${message.guild.members.filter(m => m.user.bot).size}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️RolesCount : **${msg.guild.roles.size}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)

    message.channel.send(embed);
}    