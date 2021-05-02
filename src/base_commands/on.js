const { Client } = require('tplink-smarthome-api');
const smartHomeClient = new Client();
const lightAddress = "192.168.20.10";

module.exports = {
    name: 'on',
    description: `Turn Reese's bedroom light on!`,
    execute(message) {
        smartHomeClient.getDevice({ host: lightAddress }).then((device) => {
            device.setPowerState(true);
            message.reply(`Reese's bedroom light has been turned on!`);
        });
    },
}