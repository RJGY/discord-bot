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
        const title = await page.title();
        message.channel.send(`title: ${title}`);
        await browser.close();
      })();
    },
}