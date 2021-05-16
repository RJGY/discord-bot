const { Client } = require('tplink-smarthome-api');
const smartHomeClient = new Client();
const lightAddress = process.env.LIGHT_ADDRESS;

module.exports = {
    name: 'off',
    description: `Turn Reese's bedroom light off!`,
    execute(message) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.setPowerState(false);
            message.reply(`Reese's bedroom light has been turned off!`);
        });
    },
}