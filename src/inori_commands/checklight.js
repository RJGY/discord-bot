/*
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
*/
const { Client } = require('tplink-smarthome-api');
const smartHomeClient = new Client();
const lightAddress = process.env.LIGHT_ADDRESS;

module.exports = {
    name: 'checklight',
    description: `Check if Reese's Bedroom light is on!`,
    execute(message) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.getPowerState().then((answer) => {
                if (answer === true) {
                    message.reply(`Reese's bedroom light is on!`);
                } else {
                    message.reply(`Reese's bedroom light is off!`);
                }
            });
        });
    },
}