const ascii = require('ascii-art');

exports.run = (client, message, args, ops) => {
    ascii.font(args.join(' '), 'Doom', function(rendered) {
        rendered = rendered.trimRight();
        if (rendered.lenght > 2000) return message.channel.send('sorry, This Is too long!');
        message.channel.send(rendered, {
            code: 'md'
        });
    });


}