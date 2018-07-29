const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const prefix = '>'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`>help | >invite ${client.guilds.size} `,"http://twitch.tv/S-F")
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


//welcome
client.on('guildMemberAdd', member => {
  let Wchannel = member.guild.channels.find('name', 'welcome');
  if(!Wchannel) return;
  let Wembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(member.user.avatarURL)
  .setTitle(`${member.user.username}`)
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**اهلا بك في سيرفرنا يا حلو** :
  [${member}]

  :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:

  ❤️**تاريخ دخولك للديسكورد** :
  [${member.user.createdAt}]
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●




  `) 
  .setTimestamp()
  Wchannel.send(Wembed);

});


client.on('guildMemberAdd', member => {
  var role = member.guild.roles.find('name', "- Member");
  member.addRole(role)
});



//tempmute
client.on('message',function(msg) {
  if(msg.content.startsWith(prefix + 'tmute')) {
    let messagearray = msg.content.split(" ");
    let cmd = messagearray[0];
    let args = messagearray.slice(1);
    let Muser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!Muser) return msg.channel.send("**لم يتم العثور عن العضو الذي تريد اسكاته")
    if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.reply("**ليست لديك صلاحية الاسكات**");
    if(Muser.hasPermission("ADMINISTRATOR")) return msg.channel.send("**لايمكن اسكات هذا العضو**")
    
    let Membed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**تم اسكات العضو**༻ :heavy_minus_sign: :eight_pointed_black_star:")
    .addField('**الشخص الذي تم اسكاته**', `**[${Muser}]**`)
    .addField('**العضو الذي قام باسكاته**', `**[${msg.author}]**`)
    .setTimestamp()

    let Mchannel = msg.guild.channels.find('name', "mutes")
    if(!Mchannel) return msg.channel.send("**لم يتم العثور على روم الاسكات**")

    let muterole = msg.guild.roles.find('name', "mute")
    if(!muterole) return msg.channel.send("**لم يتم العثور على رتبة الميوت**")
    msg.guild.channels.forEach(async (channel, id) => {
      await channel.overwritePermissions(muterole ,{
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
  
    let mutetime = args[1];
    if(!mutetime) return msg.channel.send("**يرجى كتابة وقت**");

    Muser.addRole(muterole.id);
    msg.channel.send(`<@${Muser.id}> تم اسكات لمدة ${ms(ms(mutetime))}`);
    Mchannel.send(Membed);

    setTimeout(function() {
      Muser.removeRole(muterole.id)
      msg.channel.send(`<@${Muser.id}>تم فك السكوت عن `);
  }, ms(mutetime));
   
}});



//botserver
client.on('message', function(msg) {
	if(msg.content.startsWith (prefix + 'server')) {
		let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(msg.guild.iconURL)
		.setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${msg.guild.name}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
		.addField('**ServerName**', `[${msg.guild.name}]
			:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
		.addField('**ServerOwner**', `[${msg.guild.owner}]
			:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
		.addField('**ServerHost**', `[${msg.guild.region}]
			:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
	    .addField('**Number Of Members**', `[${msg.guild.memberCount}]
	    	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
	    .addField('**Number Of Roles**', `[${msg.guild.roles.size}]
	    	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
	    .addField('**ChatChannels**', `[${msg.guild.channels.filter(m => m.type === 'voice').size}]
	    	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
	    .addField('**VoiceChannels**', `[${msg.guild.channels.filter(m => m.type === 'voice').size}]
	    	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
	    .addField('**ServerID**', `[${msg.guild.id}]
	    	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)

	    .setFooter(`- Requested By: ${msg.author.username}`)

		msg.channel.send({embed});
	}
});

//botinfo
client.on('message', function(msg) {  
    if(msg.content.startsWith (prefix  + 'botinfo')) { 
      let embed = new Discord.RichEmbed()  
      .setColor('RANDOM')  
      .setThumbnail(client.user.avatarURL)  
      .setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺PrinceBot༻ :heavy_minus_sign: :eight_pointed_black_star:`)  
      .addField('**BotName**', `[${client.user.username}]
      	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)  
      .addField('**BotOwner**', `[P4G #4256]
      	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)  
      .addField('**BotPing**', `[${Date.now() - msg.createdTimestamp}]
        :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)  
	  .addField('**BotID**', `[${client.user.id}]
	    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)  
	  .addField('**VoiceChannels**', `[${msg.client.channels.filter(m => m.type === 'voice').size}]
	  	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)  
	  .addField('**ChatChannels**', `[${msg.client.channels.filter(m => m.type === 'text').size}]
	  	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true) 
	  .addField('**Prefix**', `[>]
	  	:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true) 



	  .setFooter(`- Requested By: ${msg.author.username}`)

	    msg.channel.send({embed}); 
    }    
});

  


//user code
client.on('message', function(msg) {
	if(msg.content.startsWith (prefix + 'user')) {
	msg.guild.fetchInvites().then(invs => {
        let user = msg.mentions.users.first() || msg.author
        let personalInvites = invs.filter(i => i.inviter.id === user.id);
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
		let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(msg.author.avatarURL)
		.setTitle(`:eight_pointed_black_star: :heavy_minus_sign: ༺${msg.author.username}༻ :heavy_minus_sign: :eight_pointed_black_star:`)
		.addField('**UserName**', `[${msg.author.username}]
			:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
		.addField('**UserID**', `[${msg.author.id}]
			:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
		.addField('**Invites**', `[${inviteCount}]
      :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:`,true)
      .addField('**UserTag**', `[${z.discriminator}]`)


		.setFooter(`- Requested By: ${msg.author.username}`)

	    msg.channel.send({embed}); 
	})
}
});

//report
client.on('message', function(msg) {
  if(msg.content.startsWith(prefix + 'report')) {
  let messagearray = msg.content.split(" ");
  let cmd = messagearray[0];
  let args = messagearray.slice(1);
  let Ruser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  if(!Ruser) return msg.channel.send("**لم نستطع ايجاد العضو**");
  let Rreason = args.join(" ").slice(22);
  if(!Rreason) return msg.channel.send("**الرجاء كتابة السبب**");

  let Rembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**تم الابلاغ عن العضو**༻ :heavy_minus_sign: :eight_pointed_black_star:")
  .addField('**الشخص اللذي تم الابلاغ عنه**', `**[${Ruser}]**`)
  .addField('**تم التبليغ عنه من طرف**', `**[${msg.author}]**`)
  .addField('**في روم**', `[${msg.channel}]`)
  .addField('** الوقت**', `[${msg.createdAt}]`)
  .addField('**السبب**', `[${Rreason}]`)
  .setTimestamp();

  let Rchannel = msg.guild.channels.find('name', "reports")
  if(!Rchannel) return msg.channel.send("**لم يتم العثور على روم التبليغ**");

  msg.delete().catch(O_o=>{});
  Rchannel.send(Rembed);
  msg.channel.send('**تم التبليغ بنجاح**');

  

}});


//kick code
client.on('message', function(msg) {
  if(msg.content.startsWith(prefix + 'kick')) {
    let messagearray = msg.content.split(" ");
    let cmd = messagearray[0];
    let args = messagearray.slice(1);
    let Kuser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!Kuser) return msg.channel.send("**لم يتم ايجاد العضو الذي تريد طرده**");
    let Kreason = args.join(" ").slice(22);
    if(!Kreason) return msg.channel.send("**الرجاء كتابة سبب الطرد**");
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("**ليست لديك صلاحية طرد الاعضاء**");
    if(Kuser.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("هذا العضو لايمكن طرده");

    let Kembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**تم طرد العضو**༻ :heavy_minus_sign: :eight_pointed_black_star:")
    .addField('**الشخض الذي انطرد**', `**[${Kuser}]**`)
    .addField('**الشخص الذي طرده**', `**[${msg.author}]**`)
    .addField('**السبب**', `**[${Kreason}]**`)
    .setTimestamp()

    let Kchannel = msg.guild.channels.find('name', "kickesbans");
    if(!Kchannel) return msg.channel.send("**لم يتم العثور على روم الطرد**");

    msg.guild.member(Kuser).kick(Kreason);
    Kchannel.send(Kembed);
    msg.channel.send('**تم طرد العضو بنجاح**');
  }
});


//ban
client.on('message', function(msg) {
  if(msg.content.startsWith(prefix + 'ban')) {
    let messagearray = msg.content.split(" ");
    let cmd = messagearray[0];
    let args = messagearray.slice(1);
    let Buser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
    if(!Buser) return msg.channel.send("**لم يتم ايجاد العضو الذي تريد تبنيده**");
    let Breason = args.join(" ").slice(22);
    if(!Breason) return msg.channel.send("**الرجاء كتابة سبب البان**");
    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("**ليست لديك صلاحية تبنيد الاعضاء**");
    if(Buser.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("هذا العضو لايمكن تبنيده");

    let Bembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**تم تبنيد العضو**༻ :heavy_minus_sign: :eight_pointed_black_star:")
    .addField('**الشخض الذي تبند**', `**[${Buser}]**`)
    .addField('**الشخص الذي بنده**', `**[${msg.author}]**`)
    .addField('**السبب**', `**[${Breason}]**`)
    .setTimestamp()

    let Bchannel = msg.guild.channels.find('name', "kickesbans");
    if(!Bchannel) return msg.channel.send("**لم يتم العثور على روم التبنيد**");

    msg.guild.member(Buser).ban(Breason);
    Bchannel.send(Bembed);
    msg.channel.send('**تم تبنيد العضو بنجاح**');
  }
});



//submit code
client.on('message', function(msg) {
  if(msg.content.startsWith(prefix + 'submit')) {
  let messagearray = msg.content.split(" ");
  let cmd = messagearray[0];
  let args = messagearray.slice(1);
  let Suser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
  let Submit = args.join(" ").slice(0);
  if(!Submit) return msg.channel.send("**الرجاء كتابة التقديم**");

  let Sembed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(":eight_pointed_black_star: :heavy_minus_sign: ༺**لقد قام عضو بالتقديم**༻ :heavy_minus_sign: :eight_pointed_black_star:")
  .addField('**تم التقديم من طرف**', `**[${msg.author}]**`)
  .addField('**في روم**', `**[${msg.channel}]**`)
  .addField('** الوقت**', `**[${msg.createdAt}]**`)
  .addField('**التقديم**', `**[${Submit}]**`)
  .setTimestamp();

  let Schannel = msg.guild.channels.find('name', "submit")
  if(!Schannel) return msg.channel.send("**لم يتم العثور على روم التقديم**");

  msg.delete().catch(O_o=>{});
  Schannel.send(Sembed);
  msg.channel.send('**تم التقديم بنجاح**');

  

}});












//invite code
client.on('message', message => {
                if(message.content === prefix + "invite") {
                    let embed = new Discord.RichEmbed ()
                    .setTitle("**:arrow_right: Invite ༺`P-Bot`༻**")
                    .setFooter(`- Requested By: ${message.author.username}`)
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=469947837275308042&permissions=8&scope=bot");

                   message.channel.sendEmbed(embed);
                  }
});





//help
client.on('message', function(msg) { 
    if (msg.author.bot) return;
     if (msg.content.startsWith (prefix + 'help')) {
  let embed = new Discord.RichEmbed()
          .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
                 .setFooter(`- Requested By: ${msg.author.username}`)
    .setDescription(` 
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
    ❤️ **${prefix}help** : عشان تجيك ذي القائمة
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}user** : عشان تشوف معلومات حسابك
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}botinfo** : لمعرفة معلومات البوت
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}bc** : عشان تسوي برودكاست
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}clear** : عشان تسوي كلير للروم
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}invite** : عشان تدخل هذا البوت لسيرفرك 
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}server** : عشان تشوف معلومات السيرفر
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ❤️ **${prefix}report** : عشان تقولنا اذا شفت واحد خالف قوانين 
    :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
    ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')

msg.author.sendEmbed(embed)
  }
});

client.on('message', function(msg) { 
  if (msg.author.bot) return;
   if (msg.content.startsWith (prefix + 'help')) {
let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
           .setThumbnail(client.user.avatarURL)
               .setFooter(`- Requested By: ${msg.author.username}`)
  .setDescription(` 
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️ **${prefix}ban** : عشان تعطي احد بان من السيرفر
  :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
  ❤️ **${prefix}kick** : عشان تطرد احد من السيرفر
  :heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
  ❤️ **وقريبا المزيد**
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)
.setColor('RANDOM')

msg.author.sendEmbed(embed)
}
});

client.on('message', function(msg) {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('**:gem: تم ارسال اوامر البوت في الخاص **');
  }
});




//bc
 client.on('message', message => {
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "PrinceBot";//By Codes , ' ّEpicEdiTeDّ#4968
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setAuthor(client.user.username, client.user.avatarURL)
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setColor('RANDOM')
       .setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**Server** : [${message.guild.name}]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
  ❤️**Sender** : [${message.author.username}]
:heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign::heavy_minus_sign:
  ❤️**Message** : **[${args}]**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
 
 
 
        `)           
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));
    })
    })
    }
    });




//bcall
client.on('message' , function(msg) {
	let args = msg.content.split(" ").slice(1).join(' ')
	let embed = new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
                .setTimestamp()
        .setDescription(`${args}`);
if(msg.author.id === '391665977949028363')
if(msg.content.startsWith(prefix + 'BCall')) {
client.users.forEach( u => {
u.send(embed);
})
msg.channel.send('**Done**');
}
});



//clear
client.on("message", function(msg) {
  let args = msg.content.substring(prefix.length).split(" ");
  if(msg.content.startsWith(prefix + "clear")) {
  if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.replay ('لا تملك صلاحية حدف الرسائل');
  var tfa7;
        tfa7 = parseInt();
      
      msg.channel.fetchMessages({limit: tfa7}).then(messages => msg.channel.bulkDelete(messages)).catch(console.error);

  let Cembed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setThumbnail(client.user.avatarURL)
  .setColor("RANDOM")
  .setDescription(`
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  ❤️**لقد تم مسح الرسائل بنجاح**
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
  `)
  .setFooter(`- Requested By: ${msg.author.username}`)

  msg.channel.sendEmbed(Cembed).then(tfa7 => {tfa7.delete(3000)});

}});


client.login(process.env.BOT_TOKEN);
