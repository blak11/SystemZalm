const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "deafen",
  aliases: [],
  description: "Mute A User!",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, msg, args) => {   
var deafuser = msg.mentions.members.first();
   
    if (!msg.member.hasPermission("DEAFEN_MEMBERS")) return msg.channel.send("You don‘t have a \`DEAFEN_MEMBERS\`");
    if (!deafuser) return msg.channel.send("mention someone");
 
  if (!msg.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return msg.channel.send("I don‘t have a \`DEAFEN_MEMBERS\`");
    var muteEmbed = new Discord.MessageEmbed() 
    .setTitle("Deafen Voice")
    .addField("Deafen user", deafuser)
    .setFooter(`Deafen by ${msg.author.tag}`)
    .setTimestamp()
      deafuser.voice.setDeaf(true)
    msg.channel.send(muteEmbed);
 
  }
}
