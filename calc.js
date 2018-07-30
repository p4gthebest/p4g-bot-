const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
    if (!args[0]) return message.channel.send('please input a calcu.')
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a valid calcu.')
    }
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle('Math Calcu')
    .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
    .addField('OutPut', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);

}