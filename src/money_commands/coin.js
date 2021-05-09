const bsc_url = "https://charts.bogged.finance/?token="
const eth_url = "https://www.dextools.io/app/uniswap/pair-explorer/"

//Custom coin data structure class that holds coin data and allows set access for each variable from outside functions
const createCoin = initalConfig => {
    
    const coin = {
        trackerUrl : None,
        coinType : None,
        contract : None,
        quantity : None,
        driver : None,
        symbol : None,
        price : None,
        balance : None,
    }
    
    coin.setTrackerUrl = function setTrackerUrl() {
        if (this.coinType == "eth") {
            this.trackerUrl = this.eth_url + this.contract
        }
        else if (this.coinType == "bsc") {
            this.trackerUrl = this.bsc_url + this.contract
        } else {
            Error("setTrackerUrl error: Invalid coin type.")
        }
    }

    coin.setParams = function setParams() {
        this.coinType = initalConfig.coinType
        this.contract = initalConfig.contract
    }

    return {
        start: () => coin.setParams(),
    }
}