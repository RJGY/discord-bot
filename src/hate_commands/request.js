const getTitleAtUrl = require('get-title-at-url');
const https = require('https')
const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

module.exports = {
    name: 'request',
    description: 'test request help?!',
    execute(message, args, bot) {
      message.channel.send(`Retrieving data...`);
      message.channel.send(`args: ${args}`);
      const options = {
        hostname: args.toString(),
        port: 443,
        path: '/todos',
        method: 'GET'
      }
      const req = https.request(options, res => {
        message.channel.send(`statusCode: ${res.statusCode}`)
      
        res.on('data', d => {
          message.channel.send(`data: ${d}`);
        })
      })
      
      req.on('error', error => {
        console.error(error)
      })
      
      req.end()
      /*
      getTitleAtUrl(args.toString(), function(title){
        message.channel.send(`title: ${title}`);
      });
      */
    },
}