const Discord = require('discord.js');
const prefix = '~';
const ownerID = '391665977949028363'

exports.run = (client, message, args, ops, prefix) => {
    let userCreated = message.author.createdAt.toString().split(' ');
    let messagearray = message.content.split(" ");
  let cmd = messagearray[0];
  let args2 = messagearray.slice(1);
  let Ruser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!Ruser) return message.channel.send("Sorry, I cant find this member");
  let Rreason = args.join(" ").slice(22);
  if(!Rreason) return message.channel.send("Please, tell us why");

  let Rembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺A user has been reported༻ :heavy_minus_sign: :eight_pointed_black_star:`)
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**${message.author}** reports **${Ruser}** for **${Rreason}** in **${userCreated[0]}** **${userCreated[1]}** **${userCreated[2]}** **${userCreated[3]}** 
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setTimestamp();

  let Rchannel = message.guild.channels.find('name', "reports")
  if(!Rchannel) return message.channel.send("Sorry, but i couldnt find reports room");

  message.delete().catch(O_o=>{});
  Rchannel.send(Rembed);
  message.channel.send(`**${Ruser}** Has been reported`);

}