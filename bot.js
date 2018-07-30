const discord = require('discord.js');
const client = new discord.Client();
const prefix = '~';
const ownerID = '391665977949028363'

client.on('message', message => {
    if (message.author.bot) return;


    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    try{
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, ops,);
    } catch(e) {
        console.log(e.stack);
    }



});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome')
    if(!channel) return;
    channel.send(member.user + " has joined the server!");

    let role = member.guild.roles.find('name', 'member')
    member.addRole(role);

    member.send("I Hope u enjoy our server <3")
});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome')
    if(!channel) return;
    channel.send(member.user + " has left the server!")
})


client.on('ready', () => {
    console.log('Started!');
    client.user.setActivity(`>help | >invite ${client.guilds.size} `,"http://twitch.tv/S-F")
})
client.login('NDY5OTI3MTc2MzA1OTAxNTc4.DkBcOA.qwd2ihOPGUhWLK-tUxTKt4-0rhw')
