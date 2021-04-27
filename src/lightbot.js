require('dotenv').config();
const { Client } = require('tplink-smarthome-api');
const Discord = require('discord.js');
const config = require('../config.json');

const TOKEN = process.env.TOKEN;
const { prefix, name, lightAddress } = config
const smartHomeClient = new Client();
const discordClient = new Discord.Client();

/*
app.get('/brightness/:b', (req, res) => {
    const plug = smartHomeClient.getDevice({ host: '192.168.20.10' }).then((device) => {
        device.lighting.setLightState({ brightness: parseInt(req.params.b) });
    });
    res.send(`Brightness set to ${req.params.b}`);
})

*/
discordClient.once('ready', () => {
	console.log('Ready!');
});


discordClient.on('message', message => {
    if (message.content === 'ping') {
        const delay = Date.now() - message.createdAt;
        message.reply(`**pong** *(delay: ${delay}ms)*`);
        return;
    }

    // ignore all other messages without our prefix
    if (!message.content.startsWith(prefix)) return;

    // let the bot introduce itself (exact match)
    if (message.content === `${prefix}who`) {
        message.channel.send(`My name is ${name} and I was created to serve!`);
        return;
    }

    // user info, either call with valid user name or default to info about message author
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

    if (message.content === `${prefix}on`) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.setPowerState(true);
            message.reply(`Reese's bedroom light has been turned on!`);
        });

    }

    if (message.content === `${prefix}off`) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.setPowerState(false);
            message.reply(`Reese's bedroom light has been turned off!`);
        });
    }

    if (message.content.startsWith(`${prefix}brightness`)) {
        const args = message.content.slice(prefix.length).trim().split(' ');
        if (args.length != 2) {
            message.reply(`Incorrect amount of arguments!`);
        } else {
            if (typeof(parseInt(args[1]))) {
                if (args[1] < 1 || args[1] > 100) {
                    message.reply(`Brightness must be between 1 and 100!`);
                } else {
                    try {
                        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
                            device.lighting.setLightState({ brightness: parseInt(args[1]) });
                            message.reply(`Brightness set to ${args[1]}!`);
                        });
                    } catch {
                        message.reply(`Request timed out!`);
                    }
                    
                }
                
            } else {
                message.reply(`Brightness must be a number between 0 and 100!`);
            }
        }
        
    }

    if (message.content === `${prefix}checklight`) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.getPowerState().then((answer) => {
                if (answer === true) {
                    message.reply(`Reese's bedroom light is on!`);
                } else {
                    message.reply(`Reese's bedroom light is off!`);
                }
            });
        });
    }
})

// login to Discord with your app's token
discordClient.login(TOKEN);