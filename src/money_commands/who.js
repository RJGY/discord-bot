/*

if (message.content === `${prefix}who`) {
    message.channel.send(`My name is ${name} and I was created to serve!`);
    return;
}

*/
module.exports = {
    name: 'who',
    description: 'Who is this helpful bot?!',
    execute(message, args, bot) {
        message.channel.send(`My name is ${bot.config.name} and I was created to search prices!`)
    },
}