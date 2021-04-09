// const Discord = require("discord.js");
// const client = new Discord.Client();
const command = require("./command.js");

const Commando = require("discord.js-commando");
const { prefix, token } = require("./config.json");
const audio = require("./play-audio");
const client = new Commando.CommandoClient({
  owner: "274421000974893068",
  commandPrefix: prefix,
});

client.on("ready", async () => {
  console.log("The client is ready!");

  client.registry.registerDefaults();

  // audio(client);
});

// Login to Discord with you apps token
client.login(token);

/**
 * Practicing with replying to messages
 */
client.on("message", (message) => {
  console.log(message);
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  // Slices out 'prefix'; removes whitespace; turns string into ARRAY;
  const args = message.content.slice(prefix.length).trim().split(/ +/);

  // REMOVES first string from 'args' Array; converts to lower case
  const command = args.shift().toLowerCase();
  console.log(args, command);

  if (command === `ping`) {
    message.channel.send("Pong.");
  } else if (command === `server`) {
    message.channel.send(
      `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nRegion: ${message.guild.region}`
    );
  } else if (command === `user-info`) {
    message.channel.send(
      `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
    );
  } else if (command === "avatar") {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}>`
      );
    }
    message.channel.send(
      `Your avatar: <${message.author.displayAvatarURL({
        format: "png",
      })}>`
    );
  }
});
