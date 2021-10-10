const puppeteer = require('puppeteer');
const eth_url = "https://www.dextools.io/app/uniswap/pair-explorer/"

// Need to make it so that it gets the price after the ddos check.

module.exports = {
    name: 'getethprice',
    description: 'Get price of a ethereum mainnet coin.',
    execute(message, args, bot) {
      message.channel.send(`Retrieving data...`);
      message.channel.send(`args: ${args}`);
      (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setExtraHTTPHeaders({
          'Accept-Language': 'en'
        });
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36');
        await page.goto(eth_url + args.toString());
        await page.waitForNavigation();
        const title = await page.title();
        message.channel.send(`title: ${title}`);
        await browser.close();
      })();
    },
}