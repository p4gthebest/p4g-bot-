const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
                .setTimestamp()
        .setDescription(`${args}`);
if(message.author.id === '391665977949028363')
client.users.forEach( u => {
u.send(embed);
})
message.channel.send('**Done**');

}