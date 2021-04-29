/*

if (message.content.startsWith(`${prefix}whois`)) {
    // if the message contains any mentions, pick the first as the target
    if (message.mentions.users.size) {
        const taggedUser = message.mentions.users.first();
        message.channel.send(
            `User Info: ${
                taggedUser.username
            } (account created: ${taggedUser.createdAt.toUTCString()})`,
        );
    } else {
        // default to sender if no user is mentioned
        const { author } = message;
        message.reply(
            `User Self Info: ${
                author.username
            } (account created: ${author.createdAt.toUTCString()})`,
        );
    }
}
*/

module.exports = {
    name: 'whois',
    description: 'Who is this person?!',
    execute(message) {
        // if the message contains any mentions, pick the first as the target
        if (message.mentions.users.size) {
            const taggedUser = message.mentions.users.first();
            message.channel.send(
                `User Info: ${
                    taggedUser.username
                } (account created: ${taggedUser.createdAt.toUTCString()})`,
            );
        } else {
            // default to sender if no user is mentioned
            const { author } = message;
            message.reply(
                `User Self Info: ${
                    author.username
                } (account created: ${author.createdAt.toUTCString()})`,
            );
        }
    },
}