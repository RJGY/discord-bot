const { Client } = require('tplink-smarthome-api');
const smartHomeClient = new Client();
const lightAddress = process.env.LIGHT_ADDRESS;

module.exports = {
    name: 'brightness',
    description: `Change the brightness of Reese's bedroom light!`,
    execute(message, args, bot) {
        if (args === null) {
            message.reply(`Brightness needs one number argument!`);
        }
        if (Number.isSafeInteger(parseInt(args))) {
            if (parseInt(args) < 1 || parseInt(args) > 100) {
                message.reply(`Brightness must be set between 1 and 100!`);
            } else {
                smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
                    device.lighting.setLightState({ brightness: parseInt(args) });
                    message.reply(`Brightness set to ${args}!`);
                });
            }
        } else {
            message.reply(`Brightness needs one number argument!`);
        }
    },
}