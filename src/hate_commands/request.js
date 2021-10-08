const puppeteer = require('puppeteer');

module.exports = {
    name: 'request',
    description: 'test request help?!',
    execute(message, args, bot) {
      message.channel.send(`Retrieving data...`);
      message.channel.send(`args: ${args}`);
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(args.toString());
        await page.screenshot({ path: 'example.png' });
        await browser.close();
      })();
    },
}