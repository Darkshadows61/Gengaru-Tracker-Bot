const keepAlive = require("./server")
const {Client, GatewayIntentBits, Guild} = require("discord.js")
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
    ],
})

client.on('ready', () =>{
    console.log('The Gengaru bot is ready')
    if (client.user.username === 'Gengaru-Tracker' && client.user.presence.status === 'online') {
        console.log('yes, I am online')
        console.log(client.user.presence)
    }
    console.log(client.user.id)
})

client.on('messageCreate', (message) =>{
    if (message.content === 'ping') {
    message.reply('pong')
    }
})

client.login(process.env.TOKEN)
keepAlive()

//genji user id 495521463986552867