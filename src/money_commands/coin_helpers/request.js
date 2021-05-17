var getTitleAtUrl = require('get-title-at-url');
/*
(async(url) => {
  var buf = await httpGet(url);
  console.log(buf.toString('utf-8'));
})('https://httpbin.org/headers');
*/


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