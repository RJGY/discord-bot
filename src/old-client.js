const express = require('express')
const { Client } = require('tplink-smarthome-api');
const app = express()
const port = 8080

const client = new Client();

app.get('/brightness/:b', (req, res) => {
    const plug = client.getDevice({ host: '192.168.20.10' }).then((device) => {
        device.setLightState({ brightness: parseInt(req.params.b) });
    });
    res.send("Done!");
})

app.get('/on', (req, res) => {
    const plug = client.getDevice({ host: '192.168.20.10' }).then((device) => {
        device.setPowerState(true);
    });
    res.send("Done!");
})

app.get('/off', (req, res) => {
    const plug = client.getDevice({ host: '192.168.20.10' }).then((device) => {
        device.setPowerState(false);
    });
    res.send("Done!");
})


app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})