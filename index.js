require('dotenv').config()
const Discord = require('discord.js')
const { Intents } = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE'],intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
client.login(process.env.BOT_TOKEN)

client.on("ready", () => {
  console.log("Bot is ready")
})
client.on("messageCreate", msg => {
  if (msg.content === "hey") {
    msg.reply("hi there")
  }
  if (msg.content === "pierre") {
    msg.react("❤️")
  }
})