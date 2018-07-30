const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let userCreated = message.author.createdAt.toString().split(' ');
    let messagearray = message.content.split(" ");
  let cmd = messagearray[0];
  let args2 = messagearray.slice(1);
  let Kuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!Kuser) return message.channel.send("Sorry, I cant find the member");
    let Kreason = args.join(" ").slice(22);
    if(!Kreason) return message.channel.send("Please, tell us why");
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions");
    if(Kuser.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, you can't kick this member");

    let Kembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been kicked**༻ :heavy_minus_sign: :eight_pointed_black_star:")
    .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**${message.author}** kicks **${Kuser}** for **${Kreason}** in **${userCreated[0]}** **${userCreated[1]}** **${userCreated[2]}** **${userCreated[3]}** 
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
    .setTimestamp()

    message.guild.member(Kuser).kick(Kreason);
    message.channel.send(`**${Kuser}**Has Been Kicked`);
    let Kchannel = message.guild.channels.find('name', "kicksbans");
    if(!Kchannel) return;
    Kchannel.send(Kembed);


}