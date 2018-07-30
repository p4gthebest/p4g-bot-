const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
    if(!message.member.hasPermissions('ADMINISTRATOR')) return message.channel.send('this requires the permission: ADMINISTRATOR');
    if (!args[0]) return message.channel.send(`Proper Usage: ${prefix}vote question`);
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter('React To Vote.')
    .setDescription(args.join(' '))
    .setTitle(`Vote Created By ${message.author.username}`);

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});
}