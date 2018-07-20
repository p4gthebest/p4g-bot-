const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DragonsTeam`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on('message', function(msg) {
    const prefix = '-'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`:eight_pointed_black_star: Showing Details Of :eight_pointed_black_star:
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
:heart:${msg.guild.name}:heart:`)
      
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
	    
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed});
    }
  });


client.on('message' , message => {
    if(message.content.startWith(prefix + 'BotInfo')) {
	    let embed = new Discord.RichEmbed()
	    .setColor('RANDOM')
	    .setThumbnail(client.user.avatarURL)
	    .addfield("BotName", client.user.username)
	    .addFooter("Requested By (message.author.username)");
	    
	    msg.channel.send({embed});
    }
     });



client.login(process.env.BOT_TOKEN);
