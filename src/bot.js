require('dotenv').config();
const discord = require('discord.js');
const config = require('../config.json');
const botCommands = require('./commands');

const TOKEN = process.env.TOKEN;
const { prefix, name } = config

const configSchema = {
    name,
    defaultColors: {
        success: '#41b95f',
        neutral: '#287db4',
        warning: '#ff7100',
        error: '#c63737',
    },
}

const bot = {
    client: new discord.Client(),
    log: console.log, 
    commands: new discord.Collection(),
    config: configSchema, 
}

// Load the bot.
bot.load = function load() {
    this.log('Loading commands...')
    Object.keys(botCommands).forEach(key => {
        this.commands.set(botCommands[key].name, botCommands[key])
    })
    this.log('Connecting...')
    this.client.login(TOKEN)
}

// Fired on successful login.
bot.onConnect = async function onConnect() {
    this.log(`Logged in as: ${this.client.user.tag} (id: ${this.client.user.id})`)
}

bot.onMessage = async function onMessage(message) {
    // ignore all other messages without our prefix
    if (!message.content.startsWith(prefix)) return

    const args = message.content.split(/ +/)
    // get the first word (lowercase) and remove the prefix
    const command = args.shift().toLowerCase().slice(1)

    if (!this.commands.has(command)) return

    try {
        this.commands.get(command).execute(message, args)
    } catch (error) {
        this.log(error)
        message.reply('there was an error trying to execute that command!')
    }
}

// Login to Discord with token
bot.client.on('ready', () => {
    bot.onConnect.bind(bot);
    bot.log(`Ready!`);
});
bot.client.on('error', err => {
    bot.log(`Client error: ${err.message}`);
});
bot.client.on('reconnecting', () => {
    bot.log('Reconnecting...');
});
bot.client.on('disconnect', evt => {
    bot.log(`Disconnected: ${evt.reason} (${evt.code})`);
});
bot.client.on('message', bot.onMessage.bind(bot));

// start the bot
bot.load();