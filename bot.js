const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("713936389582094371")
setInterval(function() {
channel.send(`Sad07 is here`);
}, 30)
})

client.login(process.env.BOT_TOKEN);