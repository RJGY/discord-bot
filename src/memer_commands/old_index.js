const Discord = require("discord.js")
const clc = require("cli-color")
const config = require('./config.json');
let begNumber = 0
let fishNumber = 0
let huntNumber = 0

const client = new Discord.Client({disableEveryone: true})

client.on("ready", async () =>{
    console.log('Dank Memer Tool is Online and Connected to ' + (config.accID) + '!\n');

    console.log('BEGGING')
    console.log('autoBeg => [' + (config.autoBeg) + ']' )
    console.log('autoCandy => [' + (config.autoCandy) + ']' )
    console.log('autoBankNote => [' + (config.autoBankNote) + ']\n' )

    console.log('FISHING')
    console.log('autoFish => [' + (config.autoFish) + ']' )
    console.log('autoSellFish => [' + (config.autoSellFish) + ']\n' )

    console.log('HUNTING')
    console.log('autoHunt => [' + (config.autoHunt) + ']' )
    console.log('autoSellDeer => [' + (config.autoSellDeer) + ']' )
    console.log('autoSellBoar => [' + (config.autoSellBoar) + ']' )
    console.log('autoSellDuck => [' + (config.autoSellDuck) + ']' )
    console.log('autoSellRabbit => [' + (config.autoSellRabbit) + ']' )
    console.log('autoSellSkunk => [' + (config.autoSellSkunk) + ']\n' )

    console.log('GAMBLING')
    console.log('autoBetHalf => [' + (config.autoBetHalf) + '] <= Will bet every ' + (config.autoBetHelfIntervalMilliseconds) + ' milliseconds if enabled!\n' )
    console.log('autoBlackJackHalf => [COMING SOON]\n')
    console.log('OTHER')
    console.log('autoDepositAll => [' + (config.autoDepositAll) + ']')
    console.log('autoDaily => [' + (config.autoDaily) + ']\n' )
    

    console.log('Type %startdankgen in any server to begin abusing!')
    
})

client.on("message", async message => 
{

    if(message.author.id === config.accID) 
    {
        if (message.content === "$startdankgen")
        {
            message.delete('$startdankgen')
            
            if(config.autoBeg === "enabled") 
            { 
                autoBeg()
            }

            if(config.autoFish === "enabled") 
            {
                autoFish()
            }

            if(config.autoHunt === "enabled") 
            {
                autoHunt()
            }

            if(config.autoDaily === "enabled") 
            {
                autoDaily()
            }

            if(config.autoSellFish === "enabled")
            {
                autoSellFish()
            }

            if(config.autoCandy === "enabled")
            {
                autoCandy()
            }

            if(config.autoBetHalf === "enabled")
            {
                autoBetHalf()
            }

            if(config.autoSellDeer === "enabled")
            {
                autoSellDeer()
            }

            if(config.autoSellBoar === "enabled")
            {
                autoSellBoar()
            }

            if(config.autoSellDuck === "enabled")
            {
                autoSellDuck()
            }

            if(config.autoSellRabbit === "enabled")
            {
                autoSellRabbit()
            }

            if(config.autoSellSkunk === "enabled")
            {
                autoSellSkunk()
            }

            if(config.autoBankNote === "enabled")
            {
                autoBankNote()
            }

            if(config.autoDepositAll === "enabled")
            {
                autoDepositAll()
            }
        }   

    function autoBeg() 
    {
        message.channel.send('pls beg')
        setTimeout(autoBeg, 47000)
        begNumber += 1
        console.log('Begged ' + begNumber + ' Times!\n')
    }

    function autoFish() 
    {
        message.channel.send('pls fish')
        setTimeout(autoFish, 62000)
        fishNumber += 1
        console.log('Fished ' + fishNumber + ' Times!\n')

    }

    function autoHunt()
    {
        message.channel.send('pls hunt')
        setTimeout(autoHunt, 65000)
        huntNumber +=1
        console.log('Hunted ' + huntNumber + ' Times!\n')
    }

    function autoDaily()
    {
        message.channel.send('pls daily')
        setTimeout(autoDaily, 86400000)
        console.log('Daily Claimed!\n')
    }

    function autoSellFish()
    {
        message.channel.send('pls sell fish all')
        setTimeout(autoSellFish, 1200000)
        console.log('Automatically Sold All Fish!\n')
    }

    function autoCandy()
    {
        message.channel.send('pls use candy all')
        setTimeout(autoCandy, 136000)
        console.log('Automatically Used All Candy!\n')
    }

    function autoBetHalf()
    {
        message.channel.send('pls bet half')
        setTimeout(autoBetHalf, congig.autoBetHelfIntervalMilliseconds)
        console.log('Automatically Bet Half Of Wallet!')
    }

    function autoSellDeer()
    {
        message.channel.send('pls sell deer all')
        setTimeout(autoSellDeer, 1260000)
        console.log('Automatically Sold all Deer!')
    }

    function autoSellBoar()
    {
        message.channel.send('pls sell boar all')
        setTimeout(autoSellBoar, 1290000)
        console.log('Automatically Sold all Boar!')
    }

    function autoSellDuck()
    {
        message.channel.send('pls sell duck all')
        setTimeout(autoSellDuck, 1190000)
        console.log('Automatically Sold all Ducks!')
    }

    function autoSellRabbit()
    {
        message.channel.send('pls sell rabbit all')
        setTimeout(autoSellRabbit, 1100000)
        console.log('Automatically Sold all Rabbit!')
    }

    function autoSellSkunk()
    {
        message.channel.send('pls sell skunk all')
        setTimeout(autoSellSkunk, 1000000)
        console.log('Automatically Sold all Skunks!')
    }

    function autoBankNote()
    {
        message.channel.send('pls use banknote all')
        setTimeout(autoBankNote, 1060000)
        console.log('Automatically Used all BankNotes')
    }

    function autoDepositAll()
    {
        message.channel.send('pls dep all')
        setTimeout(autoDepositAll, 120000)
        console.log('Automatically Deposited all Money')
    }

    







    
    
}})



client.login(config.token)