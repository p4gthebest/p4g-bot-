exports.run = (client, message, args, ops) => {
    if (message.author.id !== ops.ownerID) return message.channel.send('Only Owner Can Use This');

    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}`);
    }
    message.channel.send(`Successfully reloaded: ${args[0]}`);
}