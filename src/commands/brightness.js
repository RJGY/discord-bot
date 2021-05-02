const { Client } = require('tplink-smarthome-api');
const smartHomeClient = new Client();
const { lightAddress } = require('../../config.json')

module.exports = {
    name: 'brightness',
    description: `Change the brightness of Reese's bedroom light!`,
    execute(message) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.lighting.setLightState({ brightness: parseInt(args[1]) });
            message.reply(`Brightness set to ${args[1]}!`);
        });
    },
}