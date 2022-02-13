const db = require('./db.json')
require('dotenv').config()
const Discord = require('discord.js')
const { Intents } = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE'],intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("messageCreate", msg => {
  if (msg.content === "dameno") {
    const keys = Object.keys(db)
    const nb = (Math.floor(Math.random() * keys.length)).toString()
    msg.reply(`Here is a suggestion : ${db[nb]["title"]}.\n\n${db[nb]["description"]}.\n\n${db[nb]["url"]}`)
    msg.react("❤️")
  }
})