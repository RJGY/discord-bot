const bsc_url = "https://charts.bogged.finance/?token="
const eth_url = "https://www.dextools.io/app/uniswap/pair-explorer/"

//Custom coin data structure class that holds coin data and allows set access for each variable from outside functions
const createCoin = initalConfig => {
    
    const coin = {
        trackerUrl : None,
        coinType : None,
        contract : None,
        quantity : None,
        symbol : None,
        price : None,
        balance : None,
    }

    coin.setParams = function setParams() {
        this.coinType = initalConfig.coinType
        this.contract = initalConfig.contract
        this.quantity = initalConfig.quantity
        this.symbol = initalConfig.symbol

        if (this.coinType == "eth") {
            this.trackerUrl = eth_url + this.contract
        }
        else if (this.coinType == "bsc") {
            this.trackerUrl = bsc_url + this.contract
        } else {
            Error("setTrackerUrl error: Invalid coin type.")
        }
    }

    coin.setPrice = function setPrice(price) {
        if (typeof(price) != number) {
            Error("setPrice error: Invalid price argument.")
        }
        this.price = price
        this.balance = this.price * this.quantity
    }

    return {
        start: () => coin.setParams(),
    }
}

module.exports = {
    createCoin
}