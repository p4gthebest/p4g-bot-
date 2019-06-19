const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>'
const ms = require("ms");
const ownerID = '523142437397331968'
client.on("ready", async () => {
    console.log(`${client.user.username} is now online...`);
    client.user.setActivity(`${prefix}help ${prefix}invite ${client.guilds.size}`, "http://twitch.tv/S-F")
});

client.on('message', function(msg) {
    if(msg.content.startsWith(prefix + 'kick')) {
      let messagearray = msg.content.split(" ");
      let Kuser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
      if(!Kuser) return msg.channel.send("**Sorry, but i didnt find the member**");
      if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("**You dont have permission : KICK_MEMBERS**");
      if(Kuser.hasPermission("ADMINISTRATOR")) return msg.channel.send("Sorry, but you cant kick an administrator");
  
      let Kembed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**A member has been kicked**༻ :heavy_minus_sign: :eight_pointed_black_star:")
      .setDescription(`
      ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
      **${msg.author}** kicks ${Kuser}
      ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
      `)
      .setTimestamp()

      msg.guild.member(Kuser).kick(Kreason);

      let Kchannel = msg.guild.channels.find('name', "logs");
      if(!Kchannel) return ;

      Kchannel.send(Kembed);
      msg.channel.send('**The member has been kicked**');
      msg.delete();
    }
});


client.on("message", function(msg) {
    let args = msg.content.substring(prefix.length).split(" ");
    if(!message.channel.guild) return;
    if(msg.content.startsWith(prefix + "clear")) {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.replay ('لا تملك صلاحية حدف الرسائل');
    var tfa7;
          tfa7 = parseInt();
        
        msg.channel.fetchMessages({limit: tfa7}).then(messages => msg.channel.bulkDelete(messages)).catch(console.error);
  
        message.channel.sendMessage("", {embed: {
            title: "Done | تــم",
            color: 0x06DF00,
            description: "تم مسح الرسائل بنجاح",
            footer: {
              text: "Dragons"
            }
          }}).then(msg => {msg.delete(3000)});
                              }
    
         
    });


    client.on('message', message => {
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return;
    if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('Sorry, but you dont have permisson : **ADMINISTRATOR**' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    if (!args) return message.reply('**Sorry, But you should type a message**');message.channel.send(`**Confirm**`).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))   
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ |   The message has been sended to ${message.guild.members.size} member**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp()
    .setColor('RANDOM')
    .setDescription(`
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️Server : **${message.guild.name}**
    ❤️Sender : **${message.author.username}**
    ❤️Message : **${args}**
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    `)           
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Brodcast cancled :x:.**`).then(m => m.delete(5000));
    })
    })
    }
    });

    
    

client.login(process.env.BOT_TOKEN);
