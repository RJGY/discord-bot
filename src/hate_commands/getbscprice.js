const puppeteer = require('puppeteer');
const bsc_url = "https://charts.bogged.finance/?token="

// Need to make it so that it gets the price after the ddos check.

module.exports = {
    name: 'getbscprice',
    description: 'Get price of a binance smart chain coin.',
    execute(message, args, bot) {
      message.channel.send(`Retrieving data...`);
      message.channel.send(`args: ${args}`);
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(bsc_url + args.toString());
        const title = await page.title();
        message.channel.send(`title: ${title}`);
        await browser.close();
      })();
    },
}