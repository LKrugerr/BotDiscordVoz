const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const client = new Discord.Client()


var voiceChannel = null;


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

bot_secret_token = "Bot OAuth2"

client.login(bot_secret_token)
client.on('message', async message => {
  
  if (!message.guild) return;

  if (message.content === '/fatos') {
    if (message.member.voice.channel) {
      voiceChannel = message.member.voice.channel

      var connection = await voiceChannel.join();

      var dispatcher = connection.play(ytdl('', { filter: 'audioonly' })); //TODO: MODIFICAR PARA QUE O AUDIO SEJA TOCADO DE UMA SELEÇÃO DE AÚDIOS NUM DIRETÓRIO.

      dispatcher.on("finish", end => {
      voiceChannel.leave();
      voiceChannel=null;
     });
     

     

    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});

