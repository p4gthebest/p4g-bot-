const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${client.user.username}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
    .setThumbnail(client.user.avatarURL)
    .setFooter(`-Requested By: ${message.author.username}`)
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️BotName : **${client.user.username}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️BotTag : **${client.user.discriminator}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️BotOwner : **<@${ownerID}>**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️BotPing : **${Date.now() - message.createdTimestamp}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️BotID : **${client.user.id}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️VoiceChannels : **${message.client.channels.filter(m => m.type === 'voice').size}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ChatChannels : **${message.client.channels.filter(m => m.type === 'text').size}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️Prefix : **>**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)

    message.channel.send(embed);
}
