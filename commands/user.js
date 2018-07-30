const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'
const fs = require('fs');

exports.run = (client, message, args, ops, prefix) => {
    msg.guild.fetchInvites().then(invs => {
        let user = msg.mentions.users.first() || msg.author
        let personalInvites = invs.filter(i => i.inviter.id === user.id);
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    let userCreated = message.author.createdAt.toString().split(' ');
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${message.author.username}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
    .setThumbnail(message.author.avatarURL)
    .setFooter(`-Requested By: ${message.author.username}`)
    .setTimestamp()
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️UserName : **${message.author.username}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️UserTag : **${message.author.discriminator}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️UserID : **${message.author.id}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️First Join To Discord : **${userCreated[0]}** **${userCreated[1]}** **${userCreated[2]}** **${userCreated[3]}**
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️Invite Count : **${inviteCount}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)
    message.channel.send(embed);
 
})}    