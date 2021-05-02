require('dotenv').config()
const config = require('./config.json')
const BotFactory = require('./src/bot')

const { bots } = config

bots.forEach(botConfig => {
    const { name, token, prefix, tag, commands} = botConfig
    const bot = BotFactory.createBot({
        token: process.env[token],
        name,
        prefix,
        tag,
        commands,
    })

    bot.start()
})