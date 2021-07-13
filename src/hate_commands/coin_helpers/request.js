var getTitleAtUrl = require('get-title-at-url');

module.exports = {
    name: 'request',
    description: 'test request help?!',
    execute(message, args, bot) {
      message.channel.send(`Retrieving data...`);
      message.channel.send(`args: ${args}`);
      getTitleAtUrl(args.toString(), function(title){
        message.channel.send(`title: ${title}`);
      });
    },
}