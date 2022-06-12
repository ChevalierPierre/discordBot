const db = require('./db.json')
const cron = require('node-cron')
require('dotenv').config()
const Discord = require('discord.js')
const { Intents } = require('discord.js')
const client = new Discord.Client({ partials: ['MESSAGE'], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.login(process.env.BOT_TOKEN)

cron.schedule("* * * * * *", function() {
  Client.users.get("329642548304019457").send("...")
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", msg => {
  if (msg.content === "dameno") {
    const keys = Object.keys(db["works"])
    const nb = (Math.floor(Math.random() * keys.length)).toString()
    msg.reply(`Here is a suggestion : ${db["works"][nb]["title"]}.\n\n${db["works"][nb]["description"]}.\n\n${db["works"][nb]["url"]}`)
    msg.react("❤️")
  }
})