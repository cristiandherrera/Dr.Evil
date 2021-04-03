// Require the discord.js module
const Discord = require("discord.js");
// Create a new discord client
const client = new Discord.Client();
// Requiring local files
const { prefix, token } = require("./config.json");
const command = require("./command.js");

// When client is ready run this code
client.once("ready", () => {
  console.log(`The client is ready`);
});

// Login to Discord with you apps token
client.login(token);

/**
 * Practicing with replying to messages
 */
// client.on("message", (message) => {
//   console.log(message);
//   if (!message.content.startsWith(prefix) || message.author.bot) return;

//   // Slices out 'prefix'; removes whitespace; turns string into ARRAY;
//   const args = message.content.slice(prefix.length).trim().split(/ +/);

//   // REMOVES first string from 'args' Array; converts to lower case
//   const command = args.shift().toLowerCase();
//   console.log(args, command);

//   if (command === `ping`) {
//     message.channel.send("Pong.");
//   } else if (command === `server`) {
//     message.channel.send(
//       `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}`
//     );
//   } else if (command === `user-info`) {
//     message.channel.send(
//       `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
//     );
//   } else if (command === "avatar") {
//     if (!message.mentions.users.size) {
//       return message.channel.send(
//         `Your avatar: <${message.author.displayAvatarURL({
//           format: "png",
//           dynamic: true,
//         })}>`
//       );
//     }
//     message.channel.send(
//       `Your avatar: <${message.author.displayAvatarURL({
//         format: "png",
//       })}>`
//     );
//   }
// });
