/*
if (message.content === 'ping') {
    const delay = Date.now() - message.createdAt;
    message.reply(`**pong** *(delay: ${delay}ms)*`);
    return;
}
*/

module.exports = {
    name: 'ping',
    description: 'Ping! Pong?',
    execute(message) {
        const delay = Date.now() - message.createdAt
        message.reply(`**pong** *(delay: ${delay}ms)*`)
    },
}
