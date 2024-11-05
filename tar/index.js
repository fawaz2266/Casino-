 const express = require('express');
const app = express();
require("dotenv").config();
app.get('/', (req, res) => {
	res.send('Hello Express app!')
});

const LineLink = "https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"
const FeedbackChannel = "1256178738673090581"
const feedbackchannel = "1256178738673090581"
const cooldowns = new Map();
const roleId = "1256178714379554918"
const line = "https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"
const applycategory = "1254405180347383858";
const OrderCategory = "1259974403374972930"
const prefix = "+";
const COMMAND_CHANNEL_ID = '1259972217182355476';
const WITHDRAW_CHANNEL_ID = '1263940014421708800';
const redemcode = "1240943246033551420";
const activeOperations = new Set();
const Discord = require("discord.js")
const db = require("./models/user")
const game = require("./models_games/game")
const nrd = require("./models_games/nrd")
const nrdusr = require("./models_games/nrdusergame")
const takribi = require("./models_games/takribi")
const tkusr = require("./models_games/takribiusergame")
const betcateg = ["1256178728376078406", "1256178731173548145", "1256178729089110040"] //ايدي كاتوجيرز بتاعت رومات اللعب
const client = new Discord.Client({
	intents: 32511
})
client.setMaxListeners(100);
const Mongoose = require('mongoose');
var _0x81bd = ["\x6D\x6F\x6E\x67\x6F\x6F\x73\x65"]; const mongoose = require(_0x81bd[0])
const _0x8467 = ["mongodb+srv://mizooox:doDe9bjt2OLd1eMe@cluster0.fpdzm4i.mongodb.net/data", "connect"]; mongoose[_0x8467[1]](_0x8467[0])
const winneridmiguel = "963950758812860478";
const {
	Client,
	Collection,
	MessageActionRow,
	MessageButton,
	MessageSelectMenu,
	Modal,
	TextInputComponent,
	MessageEmbed,
	row,
    ChannelType,
    TextChannel
} = require('discord.js')
const timestamp = require('discord-timestamp');
const moment = require("moment")
const ms = require('ms');
const tax = require('probot-tax-calculator')
let ownertr = "990771932272132096"; //Your ID
let probotId = "282859044593598464"
const bettingserverid = "1254508555294212097"
const allbetschannel = "1267476098015297688"
const topmoneyrolename = "#1"
let owners = ["963950758812860478", "990771932272132096", ""] //اي دي الاونرات

client.on("ready", async () => {
	const guild = client.guilds.cache.get(bettingserverid)
	await guild.members.fetch();
	console.log(`${client.user.tag} IS Ready!`)
})

const antiCrash = require('discord-anticrash')
const noCrash = new antiCrash(client, {
	enableAntiCrash: 'true'
});

const excludeCollections = ["users"];

async function clearDatabase(user) {
  try {
    let data = await db.findOne({ id: user });
    if(!data) {
      let newUser = await db.create({ id: user })
      data = await newUser.save();
    }
    data.status_playing = "no";
    await data.save();
  } catch(err) {
    console.log(err);
  }
}

async function clearAllDatabase() {
  try {
    let d = await db.find();
    d?.forEach(async (data) => {
      data.status_playing = "no";
      await data.save();
    })
    await data.save();
  } catch(err) {
    console.log(err);
  }
}


client.on("ready", () => {
	console.log(`${client.user.tag}`)});

    /*client.user.setStatus("online");
	
    let status = [
		`Fut Casino`,
	];
	setInterval(() => {
		client.user.setActivity(status[Math.floor(Math.random() * status.length)]);
	}, 5000);
});*/
const {
	Probot
} = require("discord-probot-transfer");
client.probot = Probot(client, {
	fetchGuilds: true,
	data: [{
		fetchMembers: true,
		guildId: "1259970523958612100",
		probotId: "282859044593598464",
		owners: ["990771932272132096"],
	}, ],
});
client.on("ready", async () => {
	setInterval(async () => {
		let es = (await game.find())
		es.forEach(async d => {
			let time = await d.time
			if (!time) return;
			if (time == timestamp(moment(Date.now())) || time < timestamp(moment(Date.now()))) {
				let ndata = await nrd.findOne({
					idstusr: d.id,
					msgID: d.msgID
				})
				let tkdata = await takribi.findOne({
					idstusr: d.id,
					msgID: d.msgID
				})
				if (ndata) {
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					let st1usrrr = client.users.cache.get(ndata.notrole)
					let st2usrrr = client.users.cache.get(ndata.role)
					let userr1r = await nrdusr.findOne({
						id: st1usrrr.id
					})
					let userr2r = await nrdusr.findOne({
						id: st2usrrr.id
					})
					client.channels.cache.get(gdata.channelID).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						content: `بسبب الخمول لقد فاز ${st1usrrr} بمجموع \`${userr1r.result || 0}\`

    لقد خسر ${st2usrrr} بمجموع \`${userr2r.result || 0}\`

    > || ${st1usrrr} | ${st2usrrr} ||`,
						components: [],
					})).catch(err => console.error(err))
					const bets = client.channels.cache.get(allbetschannel);
                    await bets.send(`لقد فاز ${st1usrrr} ضد ${st2usrrr} ب$${parseInt(gdata.coins)}`)
                    await bets.send({
                        files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                    });
                    console.log(`line 446 winner ${st1usrrr} amount ${parseInt(gdata.coins)}`)
					let datacoinsusr1st = await db.findOne({
						id: st1usrrr.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: st1usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * 0.07;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					await datacoinsusr1st.save()
					let datacoinsusr2st = await db.findOne({
						id: st2usrrr.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: st2usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					await datacoinsusr2st.save()
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await nrd.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: d.id
					})
					await nrdusr.findOneAndDelete({
						id: st1usrrr.id
					})
					await nrdusr.findOneAndDelete({
						id: st2usrrr.id
					})
					await game.findOneAndDelete({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
				}
				if (tkdata) {
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					let st1usrrr = client.users.cache.get(tkdata.notrole)
					let st2usrrr = client.users.cache.get(tkdata.role)
					let stusrgame = client.users.cache.get(gdata.id)
					let wthusrgame = client.users.cache.get(gdata.with)
					let userr1r = await tkusr.findOne({
						id: st1usrrr.id
					})
					let userr2r = await tkusr.findOne({
						id: st2usrrr.id
					})
					if (!userr1r) return;
					if (!userr2r) return;
					let embed = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${tkdata.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> ${userr1r.numbers.join(" + ") || ""} = **${userr1r.result || 0}**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> ${userr2r.numbers.join(" + ") || ""} = **${userr2r.result || 0}**`
						})
					client.channels.cache.get(gdata.channelID).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						content: `بسبب الخمول لقد فاز ${st1usrrr} بمجموع \`${userr1r.result || 0}\`

    لقد خسر ${st2usrrr} بمجموع \`${userr2r.result || 0}\`

    > || ${st1usrrr} | ${st2usrrr} ||`,
						components: [],
						embeds: [embed]
					})).catch(err => console.error(err))
					let datacoinsusr1st = await db.findOne({
						id: st1usrrr.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: st1usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let tax = parseInt(gdata.coins) * 0.07;
					let total = parseInt(gdata.coins) - parseInt(tax);
					datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
					await datacoinsusr1st.save()
					let datacoinsusr2st = await db.findOne({
						id: st2usrrr.id
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: st2usrrr.id,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
					await datacoinsusr2st.save()
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					await takribi.findOneAndDelete({
						msgID: gdata.msgID,
						idstusr: d.id
					})
					await tkusr.findOneAndDelete({
						id: st1usrrr.id,
						msgID: d.msgID
					})
					await tkusr.findOneAndDelete({
						id: st2usrrr.id,
						msgID: d.msgID
					})
					await game.findOneAndDelete({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
				}
				if (!ndata && !tkdata) {
					let stusrgame = client.users.cache.get(d.id)
					if (!stusrgame) stusrgame = "unknown";
					let wthusrgame = client.users.cache.get(d.with)
					if (!wthusrgame) wthusrgame = "unknown";
					let gdata = await game.findOne({
						id: d.id,
						with: d.with,
						msgID: d.msgID
					})
					client.channels.cache.get(gdata.channelID).messages.fetch(d.msgID).then(msg1 => msg1.edit({
						embeds: [],
						content: `تم إلغاء التحدي بسبب الخمول
    > || ${stusrgame} | ${wthusrgame} || `,
						components: []
					})).catch(err => console.error(err))
					const bets = client.channels.cache.get(allbetschannel);
                    await bets.send(`لقد فاز ${st1usrrr} ضد ${st2usrrr} ب$${parseInt(gdata.coins)}`)
                    await bets.send({
                        files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                    });
                    console.log(`line 357 winner ${st1usrrr} amount ${parseInt(gdata.coins)}`)
					let datacoinsusr1st = await db.findOne({
						id: d.id
					})
					if (!datacoinsusr1st) {
						datacoinsusr1st = await db.create({
							id: d.id,
							coins: 0,
							status_playing: "no"
						})
					}
					let datacoinsusr2st = await db.findOne({
						id: d.with
					})
					if (!datacoinsusr2st) {
						datacoinsusr2st = await db.create({
							id: d.with,
							coins: 0,
							status_playing: "no"
						})
					}
					datacoinsusr1st.status_playing = "no"
					await datacoinsusr1st.save()
					datacoinsusr2st.status_playing = "no"
					await datacoinsusr2st.save()
					if (gdata) {
						await game.findOneAndDelete({
							id: d.id,
							with: d.with,
							msgID: d.msgID
						})
					}
				}
			}
		})
	}, 8000)
})

client.probot.on("transfered", async (guild, data, err) => {
    if (err) return console.log(err);
    var { member, price, receiver, isOwner, fullPrice, channel } = data;
    if (isOwner == false) return;
    let datausr = await db.findOne({
      id: member.id
    })
    if (!datausr) {
      datausr = await db.create({
        id: member.id,
        coins: 0,
        status_playing: "no"
      })
    }
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setThumbnail(client.user.avatarURL({ dynamic: true }))
      .setDescription("تم الشحن بنجاح")
      .addFields({ name: 'المبلغ', value: `> ${price}` }, { name: `المستلم`, value: `> ${member}` }, { name: `الرصيد الحالي`, value: `> ${parseInt(datausr.coins) + parseInt(price)}` })
      .setFooter(channel.guild.name)
      .setTimestamp()
    channel.send({ embeds: [embed], content: `${member}` })
    datausr.coins = parseInt(datausr.coins) + parseInt(price)
    await datausr.save()
  })
// Auto Transfer Line
client.probot = Probot(client, {
	data: [{
		guildId: "1254223760844783626",
		probotId: "282859044593598464",
	}, ],
});
client.probot.on("transfered", (guild, data, err) => {
	if (err) return console.log(err);
	if (guild.channel.id == "1254223760844783626") {
		guild.channel.send({
			files: ['https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png']
		});
	}
});

client.on('message', message => {

  if (message.content == "خط") {

    message.delete()

    message.channel.send({

      files: ['https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png']

    })

  }

})

//voice

const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", async c => {

    setInterval(() => {

  const channelid = "1266168781927874572"// Id Room Here

  const channel = client.channels.cache.get(channelid);

  if (!channel) return

  const connection = joinVoiceChannel({

    channelId: channel.id,

    guildId: channel.guild.id,

    adapterCreator: channel.guild.voiceAdapterCreator,

  });

  connection;

}, 1000 * 60);

});

client.on("ready", async () => {
    const guild = await client.guilds.cache.get(bettingserverid);
    const bets = client.channels.cache.get(allbetschannel);
    if (guild) {
        await guild.members.fetch();
    }
    console.log(`${client.user.tag} is ready!`);
});


//tax
client.on("messageCreate", async message => {

    if (message.author.bot) return;

  if (!message.guild) return;

 if (message.content.split(" ")[0] == "tax" || message.content.split(" ")[0] == "Tax" || message.content.split(" ")[0] == "ضريبة") { 

  let args = message.content

    .split(" ")

    .slice(1)

    .join(" "); 

    if(!args) return message.reply("**:rolling_eyes: Please enter a number**").catch((err) => {

   console.log(err.message)

   });
if (args.endsWith("m")) args = args.replace(/m/gi, "") * 1000000;

else if (args.endsWith("k")) args = args.replace(/k/gi, "") * 1000;

  else if (args.endsWith("ك")) args = args.replace(/k/gi, "") * 1000;

    else if (args.endsWith("م")) args = args.replace(/M/gi, "") * 1000000;

else if (args.endsWith("K")) args = args.replace(/K/gi, "") * 1000;

else if (args.endsWith("M")) args = args.replace(/M/gi, "") * 1000000;

     let args2 = parseInt(args)

    let tax = Math.floor(args2 * (20) / (19) + (1))

    let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))

    let tax3 = Math.floor(tax2 * (20) / (19) + (1))

    let tax4 = Math.floor(tax2 + tax3 + args2)
let embed = new MessageEmbed()

.setAuthor(`Your Tax Now!`, client.user.avatarURL({ dynamic: true }))

   .setThumbnail(client.user.avatarURL({ dynamic: true }))   

.addFields([

    {

    name: `Tax : `,

    value: `\`\`\`${tax}\`\`\``

}

])

        .setColor(message.guild.me.displayColor)

  .setTimestamp()

   message.reply({embeds: [embed]}).catch((err) => {

   console.log(err.message)

   });    

  }

}); 


//auto react
client.on("message", async black => {

   ///replace 83838388 with id channel

  if (black.channel.id !="1256178738673090581") return;

  if(black.author.id === client.user.id) return;

      black.react("❤️")//react

  }

          )

client.on('messageCreate', async message => {

  if (FeedbackChannel.includes(message.channel.id)) {

    if (message.author.bot) return;

    const att2 = new Discord.MessageEmbed()

      .setDescription(
'> Thanks For FeedBack                          We Hope You Visit Us Again')

      .setImage(`${LineLink}`)

      .setThumbnail(message.author.avatarURL({ dynamic: true }))

      .setAuthor(message.author.username, message.author.avatarURL({ dynaimc: true }))

      .setTimestamp()

      .setColor("#B10703")

    message.channel.send({ embeds: [att2] })

    return;

  }

})
 
client.on("messageCreate", async message => {

  if (!message.content.startsWith(prefix) || message.author.message) return;

  const argss = message.content.slice(prefix.length).trim().split(/ +/);

  const command = argss.shift().toLowerCase();

  if(command === "come") {
  
      if (!message.member.permissions.has("ADMINISTRATOR")) {
       

            return message.reply("** 😕 You don't have permissions **");

        }

    let args = message.content.split(" ");

    let user = message.mentions.users.first() || client.users.cache.get(args[1]);

    if(!user) return message.reply("⚠ Mention ⚠")

    message.reply(`

> **Done Send Private to ${user} ** 

> **Please Wait Come Seller ** 

`)


    user.send(` ${user} { <#${message.channel.id}> } تم طلبك هنا من فضلك come to Ticket `)
      
      

  }

})

client.on("channelCreate", async channel => {

  if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === `${OrderCategory}`) {

    await new Promise(r => setTimeout(r, 2000))

const MessageOrder = [`

**السلام عليكم ورحمه الله وبركاته ..

معك طاقم إكسل بيت في تذكره الطلب .!  

يرجي توضيح طلبك بالكامل لكي يمكنني مساعدتك و تاكيد الطلب ، سوف امنشن لك فريق العمل ل إكسل بيت وانتضر بدون منشن وسيتم الرد فأقرب وقت وشكرا @everyone.**

**للشحن المرجو التحويل ل <@990771932272132096>

`]

  

channel.send(`${MessageOrder}`)

//setInterval(() => {

//channel.send("test")

//  }, 5000)

  }

});




// Code Dmuser
client.on('messageCreate', async (message) => {
	if (message.content.startsWith("post")) {
		const user = message.mentions.members.first()
		let args = message.content.split(`${user}`).slice(1).join(" ");
		let args3 = message.content.split("").slice(1);
		let embed4 = new Discord.MessageEmbed()
			.setDescription("**Please Write A Message**")
			.setColor('BLUE')
			.setAuthor({
				name: message.author.tag,
				iconURL: message.author.avatarURL({
					dynamic: true
				})
			})
			.setImage(line)
		if (!args || !args3) {
			return message.reply({
				embeds: [embed4]
			})
		}
		let embed = new Discord.MessageEmbed()
			.setTitle("Exlbet Casino")
			.setDescription(` **${args}**`)
		let embed2 = new Discord.MessageEmbed()
			.setDescription(`**Done <@${message.author.id}> To ${user}**`)
			.setColor('BLUE')
			.setAuthor({
				name: interaction.guild.name,
				iconURL: interaction.guild.iconURL({
					dynamic: true
				})
			})
			.setFooter({
				text: interaction.guild.name,
				iconURL: interaction.guild.iconURL({
					dynamic: true
				})
			})
			.setThumbnail(message.author.avatarURL())
			.setImage(line)
		let embed3 = new Discord.MessageEmbed()
			.setDescription("**The private is locked 🔒**")
			.setColor('BLUE')
			.setAuthor({
				name: interaction.guild.name,
				iconURL: interaction.guild.iconURL({
					dynamic: true
				})
			})
			.setFooter({
				text: interaction.guild.name,
				iconURL: interaction.guild.iconURL({
					dynamic: true
				})
			})
			.setThumbnail(message.author.avatarURL())
			.setImage(line)
		const user2 = client.users.cache.get(`${user.id}`).send({
			embeds: [embed]
		}).then(async () => {
			message.reply({
				embeds: [embed2]
			})
		}).catch(() => message.reply({
			embeds: [embed3]
		}))
	}
})
// Code User
client.on("messageCreate", message => {
	if (message.content.startsWith("user")) {
		let embed = new Discord.MessageEmbed()
			.setColor("RANDOM")
			.setAuthor({
				name: message.author.tag,
				iconURL: message.author.avatarURL({
					dynamic: true
				})
			})
			.setThumbnail(message.author.avatarURL())
			.setFooter({
				text: message.author.tag,
				iconURL: message.author.displayAvatarURL({
					dynamic: true
				})
			})
			.setTitle("Info User")
			.addFields({
				name: 'Name',
				value: `${message.author.tag}`,
				inline: false
			}, {
				name: 'ID',
				value: `${message.author.id}`,
				inline: false
			}, {
				name: 'Created At',
				value: `${message.author.createdAt.toLocaleString()}`,
				inline: false
			}, )
			.setTimestamp();
		message.channel.send({
			embeds: [embed]
		})
	}
});
// Auto Line
client.on("messageCreate", async message => {
	if (message.channel.id != "1261071571422806188") return;
	if (message.author.id === client.user.id) return;
	if (message.author.send) {
		message.channel.send({
			files: ["https://media.discordapp.net/attachments/1261291432300253234/1262688885759279186/1721118824584.png?ex=66978229&is=669630a9&hm=9ba2e54aa87512962e4fc63024064252ecb6fa813b3d0829ec6005697126d335&"]
		});
	}
})
//
client.on("messageCreate", message => {
	if (message.content === 'Help' ||
		message.content.split(" ")[0] == "help" || message.content.split(" ")[0] == "اوامر") {
		let ping = new Discord.MessageEmbed()
			.setAuthor({
				name: message.author.tag,
				iconURL: message.author.displayAvatarURL({
					dynamic: true
				})
			})
			.setDescription(`**__تحدي__ قم عمل منشن لشخص و كتابه المبلغ ، 

 امر __سحب__ يجعلك تحويل كوينز الي كرديت

امر __الغاء السحب__ يجعلك تلغي سحب كوينز

 امر __فلوس__ هذا الأمر لترى رصيدك ورصيد الاخريين 

امر __توب__ هذا الأمر لترى اغنياء الرصيد

امر __بوت__ للعب ضد البوت وهدا يحتاج منك رتبة بريميوم

امر __بري__ لأخد رول كي تستطيع لعب ضد البوت وتلعب في رومات خاصة

 امر __تحويل__ هذا الأمر لتحويل رصيد من شخص إلى شخص أخر

امر __تحدي عام/تحدي فرند__ هذا الأمر لتغير حالة التحدي مع لاعبين

امر __فرند__ هذا الأمر لإضافة صديق 

امر __حذف__ هذا الأمر لحذف صديق 

امر __فرندز__هذا الأمر لرؤية اصدقائك

امر __بلوك__ اعطاء بلوك وعدم القدرة على العب

امر __فك__ يفك عن الشخص البلوك والقدرة
على العب 

امر __روليت__ تلعب ضد البوت وتراهن على لون معين

امر __بلوكز__ هذا الأمر لرؤية اللاعبين الذين يمتلكون بلوك**`)

			.setColor("#7D72FE");
		message.reply({
			embeds: [ping]
		});
	}
});
client.on("messageCreate", message => {
	if (message.content === 'pingi') {
		let ping = new Discord.MessageEmbed()
			.setDescription(`**> 🔔 My Ping Is ${client.ws.ping}**`)
			.setColor("GREYPLE");
		message.reply({
			embeds: [ping]
		});
	}
});
// Code Say
client.on("messageCreate", async message => {
	if (message.author.bot) return;
	if (!message.channel.guild) return;
	if (message.content.startsWith('isay')) {
		if (!message.member.permissions.has("ADMINISTRATOR")) {
			return message.reply("** 😕 You don't have permissions **");
		}
		if (!message.guild.me.permissions.has('ADMINISTRATOR')) {
			return message.reply(`** 😕 I couldn't edit the channel permissions. Please check my permissions and role position. **`);
		}
		let args = message.content.split(' ').slice(2).join(' ')
		let argss = message.content.split(' ')
		let channel = message.mentions.channels.first() || message.guild.channels.cache.get(argss[1])
		let attach = message.attachments.first()
		if (!channel) return message.channel.send('** 😕 Please mention channel or id **');
		if (!args) return message.channel.send('** ❌ Please select a message **');
		message.delete()
		if (!attach) {
			channel.send({
				content: `${args}`
			});
		} else {
			channel.send({
				content: `${args}`,
				files: [attach]
			});
		}
	}
})
// تابع formatCoins
function formatCoins(coins) {
	if (coins >= 1000000) {
		return (coins / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // مليون
	}
	if (coins >= 1000) {
		return (coins / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // ألف
	}
	return coins.toString();
}
client.on('messageCreate', async message => {
	if (message.content.toLowerCase().startsWith('فلوس') || message.content.toLowerCase().startsWith('money')) {
		let user = message.mentions.users.first() || message.author;
		if (user.bot) return message.reply({
			content: "**البوتات لا تمتلك فلوس** :x:"
		});
		let data = await db.findOne({
			id: user.id
		});
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			});
		}
		let embed = new MessageEmbed()
			.setColor("GREEN")
			.setThumbnail(user.displayAvatarURL({
				dynamic: true
			}))
			.setTitle(`الرصيد الحالي لـ ${user.tag}`)
			.setDescription(`> $${parseInt(data.coins).toLocaleString('en-US')}`)
			.setFooter({
				text: message.guild.name
			})
			.setTimestamp();
		message.reply({
			embeds: [embed]
		});
	}
	client.on('messageCreate', async message => {

    if
(message.content.startsWith("sa7b")) {

      // Command for administrators to allow a user to withdraw again

      if (message.member.permissions.has("ADMINISTRATOR")) {

        const taggedUser = message.mentions.users.first();

        if (taggedUser) {

          // Remove user from cooldowns

          cooldowns.delete(taggedUser.id);

          message.reply(`تم السماح للمستخدم ${taggedUser.tag} بالقيام بسحب جديد.`);

        } else {

          message.reply("يجب تمييز عضو للسماح له بالسحب.");

        }

      } else {

        message.reply("لا تمتلك الصلاحيات اللازمة لاستخدام هذا الأمر.");

      }

    }

    })});
client.on('messageCreate', async message => {
    if (message.content.toLowerCase().startsWith('سحب')) {
        let data = await db.findOne({
            id: message.author.id
        });
        if (!data) {
            data = await db.create({
                id: message.author.id,
                coins: 0,
                status_playing: "no"
            });
        }
        let user = message.author;
        if (message.channel.id !== COMMAND_CHANNEL_ID) {
            return message.reply(`**السحب فقط يعمل في روم <#${COMMAND_CHANNEL_ID}> **`);
        }
        if (data.status_playing == "yes") return message.reply({
            content: `> لا يمكنك السحب اثناء تحدي !`
        })
    
        const arg = message.content.substring(4, message.content.length);
        if (!parseInt(arg) || isNaN(arg) || message.content.includes(".")) {
            return message.react('❌');
        }
        const amount = parseInt(arg);
        if (isNaN(amount) || amount <= 0) {
            return message.reply('> **يبدو أن الأرقام الذي وضعتهآ غير صحيحه , يرجي تاكد من كتابة الارقام بشكل صحيح .**');
        }
        if (amount < 50000) {

        return message.channel.send('لا يمكنك سحب أقل من 50 ألف كريديت');

    }

    if (amount > 30000000) {

        return message.channel.send('لا يمكنك سحب أكثر من 30 مليون كريديت');

    }
        if (!data || data.coins < amount) {
            return message.reply('> **عذراً ولكن ليس لديك رصيد لسحبه .!**');
        }
        
        data.coins -= amount;
        await data.save();
        let logChannel = client.channels.cache.get(WITHDRAW_CHANNEL_ID);
        if (!logChannel) {
            return message.reply('تعذر العثور على قناة السجلات.');
       
        }
                // Set cooldown for the user (3 hours cooldown)

    

       try { 

        const dmMessage = `لقد قمت بسحب ${amount.toLocaleString()} من رصيدك الحالي. الرصيد الحالي: ${parseInt(data.coins).toLocaleString()}`;
           // Create the same embed for DM

        const embed = new Discord.MessageEmbed()

          .setColor("GREEN")

          .setTitle(`سحب مبلغ من الرصيد`)

          .setDescription(`**العضو:** ${user.tag}\n**المبلغ المسحوب:** $${amount.toLocaleString()}\n**الرصيد الحالي:** $${parseInt(data.coins).toLocaleString()}`)

          .setTimestamp();
           // Send DM with embed and message content

        await user.send({ content: dmMessage, embeds: [embed] });

      } catch (error) {

        console.error(`Failed to send DM to ${user.tag}:`, error);

        message.reply("تعذر إرسال رسالة مباشرة إليك. تأكد من أن إعدادات الخصوصية تسمح بالرسائل المباشرة.");

      }
        
        
        message.react('✅');
        
        // Reply to the user in the current channel

      message.reply(`تم سحب ${amount.toLocaleString()} من رصيدك الحالي. يمكنك القيام بسحب جديد بعد 3 ساعات.`);
        
          

        

      
        
       
        
                
        let embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle('طلب سحب')
            .setDescription(`المستخدم <@${message.author.id}> طلب سحب ${formatCoins(amount)}`)
            .setTimestamp();
        let row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('confirm_withdraw')
                .setLabel('تم')
                .setStyle('SUCCESS'),
                new MessageButton()
                .setCustomId('cancel_withdraw')
                .setLabel('إلغاء')
                .setStyle('DANGER'),
            );
        const withdrawMessage = await logChannel.send({
            embeds: [embed],
            components: [row]
        });
        const transfercommandmessage = await logChannel.send({
            content: `c ${message.author.id} ${amount}`
        });
        await logChannel.send({
            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
        });
        const filter = interaction => interaction.customId === 'confirm_withdraw' || interaction.customId === 'cancel_withdraw';
        const collector = withdrawMessage.createMessageComponentCollector({
            filter
        });
        collector.on('collect', async interaction => {
            if (interaction.user.id == ownertr) {
                if (interaction.customId === 'confirm_withdraw') {
                    await interaction.reply({
                        content: 'تم تحويل الكريدت بنجاح.',
                        ephemeral: true
                    });
                    await message.author.send(`**تم تسليمك مبلغ ${formatCoins(amount)} بنجاح**
  **رصيدك الأن هو ${formatCoins(data.coins)} **
  **لا تنسى تقييم الخدمة <#${feedbackchannel}> **`);
                    await transfercommandmessage.react('✅');
                }
                if (interaction.customId === 'cancel_withdraw') {
                    await interaction.reply({
                        content: 'تم إلغاء السحب بنجاح',
                        ephemeral: true
                    });
                    await message.author.send(`**تم إلغاء السحب لمبلغ ${formatCoins(amount)} بنجاح**`);
                    let data = await db.findOne({
                        id: user.id
                    })
                    if (!data) {
                        data = await db.create({
                            id: user.id,
                            coins: 0,
                            status_playing: "no"
                        })
                    }
                    data.coins = parseInt(data.coins) + parseInt(amount)
                    await data.save()
                    await transfercommandmessage.react('❌');
                }
                
                // حذف الرسالة الأصلية وزر الرسالة
                await withdrawMessage.delete();
                collector.stop();
            }
            
            

 })}
 }); 
client.on("messageCreate", async message => {
    if (message.content.split(" ")[0] == "تحويل" || message.content.split(" ")[0] == "Transfer" || message.content.split(" ")[0] == "transfer") {
        let data = await db.findOne({
            id: message.author.id
        })
        if (!data) {
            data = await db.create({
                id: message.author.id,
                coins: 0,
                status_playing: "no"
            })
        }

        if (message.channel.id !== COMMAND_CHANNEL_ID) {
            return message.reply(`**التحويل فقط يعمل في روم <#${COMMAND_CHANNEL_ID}> **`);
        }

        if (data.status_playing == "yes") return message.reply({ content: `> لا يمكنك التحويل ل عضو اثناء تحدي !` })
        let args = message.content.split(" ")
        if (!args[1]) return message.reply({ content: `> لم تقم بتحديد العضو !` })
        let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
        if (!user) return message.reply({ content: `\`❎\` **لم استطيع العثور على هذا الشخص**` })
        if (user.id === message.author.id) return message.reply({ content: `لا يمكنك التحويل لنفسك  :x:`})
        if (user.bot) return message.reply({ content: `> لا يمكنك التحويل للبوتات !`})
        let coinAmount = args[2];

        if (coinAmount.startsWith("0")) {
            return message.reply("** لا يمكنك تحويل 0 ❌**");
        }
        if (coinAmount.startsWith("-")) {
            return message.reply("> لا يمكنك التحويل بالسالب !");
        }
        let data2 = await db.findOne({
            id: user.id
        })
        if (!data2) {
            data2 = await db.create({
                id: user.id,
                coins: 0,
                status_playing: "no"
            })
        }
        if (data2.status_playing == "yes") return message.reply({ content: `> لا يمكنك التحويل ل عضو اثناء تحدي !` })
        if (!args[2]) return message.reply({ content: `> لم تقم بتحديد المبلغ !` })
        if (args[2].endsWith("k") || args[2].endsWith("K") || args[2].endsWith("m") || args[2].endsWith("M")) {
            if (args[2].includes(".") || args[2].includes(",")) return message.reply({ content: `\`❎\` **لا يمكن اضافة ارقام عشرية**` })
            let coin = args[2].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`)
            if (parseInt(data.coins) == 0) return message.reply({ content: `\`❎\` **لا يمكنك التحويل ، ليس لديك اي فلوس**` })
            if (parseInt(data.coins) < parseInt(coin)) return message.reply({ content: `\`❎\` **ليس لديك فلوس كافية لتحويل هذا المبلغ**` })

            // هنا تبدأ الكابتشا
            const images = [
        { url: 'https://i.ibb.co/C8dMdFN/Picsart-24-07-01-20-53-49-100.png', number: '91019' },
        { url: 'https://i.ibb.co/CswYLLd/Picsart-24-07-01-20-55-27-450.png', number: '19496' },
        { url: 'https://i.ibb.co/ygT7Vhz/Picsart-24-07-01-20-56-08-075.png', number: '20056' },
        { url: 'https://i.ibb.co/GtC3Nsb/Picsart-24-07-01-20-56-46-886.png', number: '20245' },
        { url: 'https://i.ibb.co/dPKKqw7/Picsart-24-07-01-20-58-20-237.png', number: '12873' }
    ];

            const captcha = images[Math.floor(Math.random() * images.length)];

            const filter = response => response.author.id === message.author.id;
            message.reply({ content: 'الرجاء إدخال الأرقام الموجودة في الصورة التالية:', files: [captcha.url] }).then((sentMessage) => {
                message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
                    .then(async collected => {
                        const response = collected.first();
                        if (response.content === captcha.number) {
                            let embed = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setThumbnail(message.author.avatarURL({ dynamic: true }))
                                .setDescription("تم التحويل بنجاح")
                                .addFields(
                                    { name: 'المبلغ', value: `> ${parseInt(coin)}` },
                                    { name: `المستلم`, value: `> ${user}` },
                                    { name: `بواسطة`, value: `> ${message.author}` },
                                    { name: `الرصيد الحالي`, value: `> ${parseInt(data.coins) - parseInt(coin)}` }
                                )
                                .setFooter(message.guild.name)
                                .setTimestamp();
                            message.channel.send({ embeds: [embed], content: `${message.author}` });
                            data.coins = parseInt(data.coins) - parseInt(coin);
                            await data.save();
                            data2.coins = parseInt(data2.coins) + parseInt(coin);
                            await data2.save();
                        } else {
                            message.reply('لقد كتبت رقم خاطئ.');
                        }
                        sentMessage.delete(); // مسح رسالة الكابتشا
                        response.delete(); // مسح رد المستخدم
                    })
                    .catch(() => {
                        message.reply('انتهى الوقت ولم تقم بإدخال الأرقام.');
                        sentMessage.delete(); // مسح رسالة الكابتشا
                    });
            });
        } else {
            if (isNaN(args[2])) return message.reply({ content: `\`❎\` **برجاء وضع ارقام صحيحة**` })
            if (args[2].includes(".") || args[2].includes(",")) return message.reply({ content: `\`❎\` **لا يمكن تحويل ارقام عشرية**` })
            if (parseInt(data.coins) == 0) return message.reply({ content: `\`❎\` **لا يمكنك التحويل ، ليس لديك اي فلوس**` })
            if (parseInt(data.coins) < parseInt(args[2])) return message.reply({ content: `\`❎\` **ليس لديك فلوس كافية لتحويل هذا المبلغ**` })

            // هنا تبدأ الكابتشا
            const images = [
        { url: 'https://i.ibb.co/C8dMdFN/Picsart-24-07-01-20-53-49-100.png', number: '91019' },
        { url: 'https://i.ibb.co/CswYLLd/Picsart-24-07-01-20-55-27-450.png', number: '19496' },
        { url: 'https://i.ibb.co/ygT7Vhz/Picsart-24-07-01-20-56-08-075.png', number: '20056' },
        { url: 'https://i.ibb.co/GtC3Nsb/Picsart-24-07-01-20-56-46-886.png', number: '20245' },
        { url: 'https://i.ibb.co/dPKKqw7/Picsart-24-07-01-20-58-20-237.png', number: '12873' }
    ];

            const captcha = images[Math.floor(Math.random() * images.length)];

            const filter = response => response.author.id === message.author.id;
            message.reply({ content: 'الرجاء إدخال الأرقام الموجودة في الصورة التالية:', files: [captcha.url] }).then((sentMessage) => {
                message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
                    .then(async collected => {
                        const response = collected.first();
                        if (response.content === captcha.number) {
                            let embed = new Discord.MessageEmbed()
                                .setColor("GREEN")
                                .setThumbnail(message.author.avatarURL({ dynamic: true }))
                                .setDescription("تم التحويل بنجاح")
                                .addFields(
                                    { name: 'المبلغ', value: `> ${parseInt(args[2])}` },
                                    { name: `المستلم`, value: `> ${user}` },
                                    { name: `بواسطة`, value: `> ${message.author}` },
                                    { name: `الرصيد الحالي`, value: `> ${parseInt(data.coins) - parseInt(args[2])}` }
                                )
                                .setFooter(message.guild.name)
                                .setTimestamp();
                            message.channel.send({ embeds: [embed], content: `${message.author}` });
                            data.coins = parseInt(data.coins) - parseInt(args[2]);
                            await data.save();
                            data2.coins = parseInt(data2.coins) + parseInt(args[2]);
                            await data2.save();
                        } else {
                            message.reply('لقد كتبت رقم خاطئ.');
                        }
                        sentMessage.delete(); // مسح رسالة الكابتشا
                        response.delete(); // مسح رد المستخدم
                    })
                    .catch(() => {
                        message.reply('انتهى الوقت ولم تقم بإدخال الأرقام.');
                        sentMessage.delete(); // مسح رسالة الكابتشا
                    });
            });
        }
    }
});





client.on("messageCreate", async message => {
  if (message.content.split(" ")[0] == "add") {
    if (!owners.find(s => s == message.author.id)) return;
    let args = message.content.split(" ")
    if (!args[1]) return message.reply({ content: `> لم تقم بتحديد العضو !` })
    let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
    if (!user) return message.reply({ content: `\`❎\` **لم استطيع العثور على هذا الشخص**` })
    if (!args[2]) return message.reply({ content: `> لم تقم بتحديد المبلغ !` })
    if (args[2].endsWith("k") || args[2].endsWith("K") || args[2].endsWith("m") || args[2].endsWith("M")) {
      if (args[2].includes(".") || args[2].includes(",")) return message.reply({ content: `\`❎\` **لا يمكن اضافة ارقام عشرية**` })
      let coin = args[2].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`)
      let data = await db.findOne({
        id: user.id
      })
      if (!data) {
        data = await db.create({
          id: user.id,
          coins: 0,
          status_playing: "no"
        })
      }
      let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(user.avatarURL({ dynamic: true }))
        .setDescription(`تم الإضافة بنجاح`)
        .addFields({ name: "بواسطة", value: `${message.author}` }, { name: `اضاف`, value: `$${coin}` }, { name: `المستلم`, value: `${user}` }, { name: `الرصيد الحالي للمستلم`, value: `${parseInt(data.coins) + parseInt(coin)}` })
      message.reply({ embeds: [embed] })
      data.coins = parseInt(data.coins) + parseInt(coin)
      await data.save()
      return;
    }
    if (isNaN(args[2])) return message.reply({ content: `\`❎\` **برجاء وضع ارقام صحيحة**` })
    if (args[2].includes(".") || args[2].includes(",")) return message.reply({ content: `\`❎\` **لا يمكن اضافة ارقام عشرية**` })
    let data = await db.findOne({
      id: user.id
    })
    if (!data) {
      data = await db.create({
        id: user.id,
        coins: 0,
        status_playing: "no"
      })
    }
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setThumbnail(user.avatarURL({ dynamic: true }))
      .setDescription(`تم الإضافة بنجاح`)
      .addFields({ name: "بواسطة", value: `${message.author}` }, { name: `اضاف`, value: `$${args[2]}` }, { name: `المستلم`, value: `${user}` }, { name: `الرصيد الحالي للمستلم`, value: `${parseInt(data.coins) + parseInt(args[2])}` })
    message.reply({ embeds: [embed] })
    data.coins = parseInt(data.coins) + parseInt(args[2])
    await data.save()
  }
})
client.on("messageCreate", async message => {
	if (message.content.split(" ")[0] == "set" || message.content.split(" ")[0] == "Set" || message.content.split(" ")[0] == "تحديد" || message.content.split(" ")[0] == "اضافة") {
		if (!owners.find(s => s == message.author.id)) return;
		let args = message.content.split(" ")
		if (!args[1]) return message.reply({
			content: `> لم تقم بتحديد العضو !`
		})
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
		if (!user) return message.reply({
			content: `\`❎\` **لم استطيع العثور على هذا الشخص**`
		})
		if (!args[2]) return message.reply({
			content: `> لم تقم بتحديد المبلغ !`
		})
		if (args[2].endsWith("k") || args[2].endsWith("K") || args[2].endsWith("m") || args[2].endsWith("M") || args[2].endsWith("ك") || args[2].endsWith("م")) {
			if (args[2].includes(".") || args[2].includes(",")) return message.reply({
				content: `\`❎\` **لا يمكن اضافة ارقام عشرية**`
			})
			let coin = args[2].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("ك", `000`).replace("م", `000000`)
			let data = await db.findOne({
				id: user.id
			})
			if (!data) {
				data = await db.create({
					id: user.id,
					coins: 0,
					status_playing: "no"
				})
			}
			let embed = new Discord.MessageEmbed()
				.setColor("BLACK")
				.setThumbnail(user.avatarURL({
					dynamic: true
				}))
				.setDescription(`تم التحديد بنجاح`)
				.addFields({
					name: "بواسطة",
					value: `${message.author}`
				}, {
					name: `المستلم`,
					value: `${user}`
				}, {
					name: `الرصيد الحالي للمستلم`,
					value: `${parseInt(coin)}`
				})
			message.reply({
				embeds: [embed]
			})
			data.coins = parseInt(coin)
			await data.save()
			return;
		}
		if (isNaN(args[2]) ) return message.reply({
			content: `\`❎\` **برجاء وضع ارقام صحيحة**`
		})
		if (args[2].includes(".") || args[2].includes(",")) return message.reply({
			content: `\`❎\` **لا يمكن تحديد ارقام عشرية**`
		})
		let data = await db.findOne({
			id: user.id
		})
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			})
		}
		let embed = new Discord.MessageEmbed()
			.setColor("BLACK")
			.setThumbnail(user.avatarURL({
				dynamic: true
			}))
			.setDescription(`تم التحديد بنجاح`)
			.addFields({
				name: "بواسطة",
				value: `${message.author}`
			}, {
				name: `المستلم`,
				value: `${user}`
			}, {
				name: `الرصيد الحالي للمستلم`,
				value: `${parseInt(args[2])}`
			})
		message.reply({
			embeds: [embed]
		})
		data.coins = parseInt(args[2])
		await data.save()
	}
})
client.on("messageCreate", async message => {
	if (message.content.split(" ")[0] == "rmv" || message.content.split(" ")[0] == "remove" || message.content.split(" ")[0] == "Remove" || message.content.split(" ")[0] == "Rmv") {
		if (!owners.find(s => s == message.author.id)) return;
		let args = message.content.split(" ")
		if (!args[1]) return message.reply({
			content: `> لم تقم بتحديد العضو !`
		})
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
		if (!user) return message.reply({
			content: `\`❎\` **لم استطيع العثور على هذا الشخص**`
		})
		if (!args[2]) return message.reply({
			content: `> لم تقم بتحديد المبلغ !`
		})
		if (args[2].endsWith("k") || args[2].endsWith("K") || args[2].endsWith("m") || args[2].endsWith("M")) {
			if (args[2].includes(".") || args[2].includes(",")) return message.reply({
				content: `\`❎\` **لا يمكن حذف ارقام عشرية**`
			})
			let coin = args[2].replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`)
			let data = await db.findOne({
				id: user.id
			})
			if (!data) {
				data = await db.create({
					id: user.id,
					coins: 0,
					status_playing: "no"
				})
			}
			if (data.coins == 0) return message.reply({
				content: `\`❎\` **هذا الشخص ليس لديه اي رصيد للحذف**`
			})
			if (parseInt(data.coins) < parseInt(coin)) return message.reply({
				content: `\`❎\` **هذا الشخص ليس معه هذا المبلغ لحذفه**`
			})
			let embed = new Discord.MessageEmbed()
				.setColor("GREEN")
				.setThumbnail(user.avatarURL({
					dynamic: true
				}))
				.setDescription(`تم حذف بنجاح`)
				.addFields({
					name: "بواسطة",
					value: `${message.author}`
				}, {
					name: `حذف`,
					value: `$${coin}`
				}, {
					name: `من`,
					value: `${user}`
				}, {
					name: `الرصيد الحالي للمستلم`,
					value: `${parseInt(data.coins) - parseInt(coin)}`
				})
			message.reply({
				embeds: [embed]
			})
			data.coins = parseInt(data.coins) - parseInt(coin)
			await data.save()
			return;
		}
		if (isNaN(args[2])) return message.reply({
			content: `\`❎\` **برجاء وضع ارقام صحيحة**`
		})
		if (args[2].includes(".") || args[2].includes(",")) return message.reply({
			content: `\`❎\` **لا يمكن حذف ارقام عشرية**`
		})
		let data = await db.findOne({
			id: user.id
		})
		if (!data) {
			data = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			})
		}
		if (data.coins == 0) return message.reply({
			content: `\`❎\` **هذا الشخص ليس لديه اي رصيد للحذف**`
		})
		if (parseInt(data.coins) < parseInt(args[2])) return message.reply({
			content: `\`❎\` **هذا الشخص ليس معه هذا المبلغ لحذفه**`
		})
		let embed = new Discord.MessageEmbed()
			.setColor("GREEN")
			.setThumbnail(user.avatarURL({
				dynamic: true
			}))
			.setDescription(`تم حذف بنجاح`)
			.addFields({
				name: "بواسطة",
				value: `${message.author}`
			}, {
				name: `حذف`,
				value: `$${args[2]}`
			}, {
				name: `من`,
				value: `${user}`
			}, {
				name: `الرصيد الحالي للمستلم`,
				value: `${parseInt(data.coins) - parseInt(args[2])}`
			})
		message.reply({
			embeds: [embed]
		})
		data.coins = parseInt(data.coins) - parseInt(args[2])
		await data.save()
	}
})

client.on("messageCreate", async message => {
    // Function to convert shorthand amounts to numerical values
    const parseAmount = (amount) => {
        let multiplier = 1;
        if (typeof amount === 'string') {
            amount = amount.toLowerCase();
            if (amount.endsWith('k')) {
                multiplier = 1000;
                amount = amount.slice(0, -1);
            } else if (amount.endsWith('m')) {
                multiplier = 1000000;
                amount = amount.slice(0, -1);
            } else if (amount.endsWith('ك')) {
                multiplier = 1000;
                amount = amount.slice(0, -1);
            } else if (amount.endsWith('م')) {
                multiplier = 1000000;
                amount = amount.slice(0, -1);
            }
        }
        return parseInt(amount) * multiplier;
    };

    if (message.content.startsWith('بوت')) {
        const args = message.content.split(' ');
        const maxBetAmount = 5000000;
        const betAmount = parseAmount(args[1]);
        if (isNaN(betAmount) || betAmount <= 0) {
            return message.reply('يرجى تحديد مبلغ صالح للتحدي.');
        }

        if (!message.member.roles.cache.has(roleId)) {
            return message.reply('هذا الامر للاشخاص ذوي رتبة بريميوم فقط للشراء اكتب بري بريميوم.');
        }

        if (betAmount > maxBetAmount) {
            return message.reply(`المبلغ الأقصى المسموح به للتحدي هو ${maxBetAmount}.`);
        }

        let user = message.author;
        let data = await db.findOne({ id: user.id });
        if (!data) {
            data = await db.create({ id: user.id, coins: 0, status_playing: 'no' });
        }

        if (data.coins < betAmount) {
            return message.reply('ليس لديك رصيد كافي للتحدي.');
        }

        if (data.status_playing === 'yes') {
            return message.reply('لا يمكنك بدء تحدي جديد بينما لديك تحدي جاري.');
        }

        let botData = await db.findOne({ id: 'bot' });
        if (!botData) {
            botData = await db.create({ id: 'bot', coins: 0 });
        }

        let embed = new MessageEmbed()
            .setColor('GREY')
            .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL({ dynamic: true }) })
            .setTitle('تأكيد التحدي')
            .setDescription(`المبلغ: ${betAmount}`)
            .addFields({ name: 'تعليمات', value: 'اضغط على زر "متأكد" للبدء أو "إلغاء" للتراجع.' });

        let buttonConfirm = new MessageButton()
            .setCustomId(`confirmdice_${user.id}`)
            .setLabel('متأكد')
            .setStyle('SUCCESS');

        let buttonCancel = new MessageButton()
            .setCustomId(`canceldice_${user.id}`)
            .setLabel('إلغاء')
            .setStyle('DANGER');

        let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);

        let msg = await message.reply({ embeds: [embed], components: [row], allowedMentions: { repliedUser: true } });

        data.status_playing = 'yes';
        await data.save();

        const filter = i => (i.customId === `confirmdice_${user.id}` || i.customId === `canceldice_${user.id}`) && i.user.id === user.id;
        const collector = msg.createMessageComponentCollector({ filter, time: 20000 });

        collector.on('end', async collected => {
            if (!collected.size) {
                data.status_playing = 'no';
                await data.save();
                await msg.edit({ components: [] });
                await message.channel.send('تم إلغاء التحدي بسبب عدم التفاعل.');
            }
        });

        collector.on('collect', async i => {
            if (i.customId === `confirmdice_${user.id}`) {
                await i.deferUpdate();

                embed.setTitle('لعبة النرد ضد البوت')
                    .setDescription(`المبلغ: ${betAmount}`)
                    .addFields({ name: 'نتائج اللعبة', value: 'انتظر النتائج...' });

                let buttonPlay = new MessageButton()
                    .setCustomId(`playdice_${user.id}`)
                    .setLabel('رمي النرد')
                    .setEmoji('🎲')
                    .setStyle('SECONDARY');

                let newRow = new MessageActionRow().addComponents(buttonPlay);
                await msg.edit({ embeds: [embed], components: [newRow] });

                const gameData = await game.create({
                    id: user.id,
                    msgID: msg.id,
                    coins: betAmount,
                    with: 'bot',
                    game: 'dice',
                    channelID: message.channel.id,
                    time: Date.now() + 60000
                });

                data.status_playing = 'yes';
                await data.save();

                let userScore = [];
                let botScore = [];
                let turns = 0;

                const gameFilter = i => i.customId === `playdice_${user.id}` && i.user.id === user.id;
                const gameCollector = msg.createMessageComponentCollector({ filter: gameFilter, time: 60000 });

                const resetGameTimer = async () => {
                    gameCollector.resetTimer();
                };

                const botRoll = () => {
                    const rand = Math.random();
                    if (rand < 0.6) return 6;
                    
                    return Math.floor(Math.random() * 5) + 1;
                };
                
                gameCollector.on('collect', async i => {
                    if (i.customId === `playdice_${user.id}`) {
                   /*     // Anti-spam logic
                        if (cooldowns.has(i.user.id)) {
                            const expirationTime = cooldowns.get(i.user.id) + 2000; // 2 seconds cooldown
                            if (Date.now() < expirationTime) {
                                return i.reply({ content: 'يرجى الانتظار قبل المحاولة مرة أخرى.', ephemeral: true });
                            }
                        }
                        cooldowns.set(i.user.id, Date.now());*/

                        await i.deferUpdate();

                        let roll = Math.floor(Math.random() * 6) + 1;
                        userScore.push(roll);
                        await i.followUp({ content: `لقد رميت النرد وحصلت على ${roll}. مجموعك الحالي هو ${userScore.reduce((a, b) => a + b, 0)}.`, ephemeral: true });

                        let botRollValue = botRoll();
                        botScore.push(botRollValue);

                        turns += 2;

                        embed.fields[0].value = `${user.tag}: ${userScore.join(' + ')} = ${userScore.reduce((a, b) => a + b, 0)}\nExlbet Bot: ${botScore.join(' + ')} = ${botScore.reduce((a, b) => a + b, 0)}`;
                        await msg.edit({ embeds: [embed] });

                        if (userScore.length === 3 && botScore.length === 3) {
                            gameCollector.stop();
                        } else {
                            buttonPlay.setDisabled(true);
                            await msg.edit({ components: [new MessageActionRow().addComponents(buttonPlay)] });
                            setTimeout(() => {
                                buttonPlay.setDisabled(false);
                                msg.edit({ components: [new MessageActionRow().addComponents(buttonPlay)] });
                            }, 2000);
                            await resetGameTimer();
                        }
                    }
                });

                gameCollector.on('end', async collected => {
                    let userTotal = userScore.reduce((a, b) => a + b, 0);
                    let botTotal = botScore.reduce((a, b) => a + b, 0);

                    let resultMessage = '';
                    if (collected.size === 0 || userScore.length < 3) {
                        resultMessage = `لقد خسرت التحدي بسبب عدم التفاعل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
                        data.coins -= betAmount;
                        botData.coins += betAmount;
                    } else if (userTotal > botTotal) {
                        const winnings = betAmount - (betAmount * 0.10);
                        resultMessage = `لقد فزت على البوت! مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
                        data.coins = parseInt(data.coins) + winnings;
                        botData.coins = parseInt(botData.coins) - betAmount;
                    } else if (userTotal < botTotal) {
                        resultMessage = `لقد خسرت أمام البوت. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
                        data.coins = parseInt(data.coins) - betAmount;
                        botData.coins = parseInt(botData.coins) + betAmount;
                    } else {
                        resultMessage = `انتهى التحدي بالتعادل. مجموعك: ${userTotal} - مجموع البوت: ${botTotal}.`;
                    }

                    await data.save();
                    await botData.save();
                    let finalMessage = `@${user.tag}\n${userScore.join(' + ')} = ${userTotal}\n@bot\n${botScore.join(' + ')} = ${botTotal}\n\n${resultMessage}`;
                    await msg.edit({ content: finalMessage, embeds: [], components: [] });

                    data.status_playing = 'no';
                    await data.save();
                });

            } else if (i.customId === `canceldice_${user.id}`) {
                collector.stop();
                data.status_playing = 'no';
                await data.save();
                await i.reply({ content: 'تم إلغاء التحدي.', ephemeral: true });
            }
        });
    }
}); 


client.on("messageCreate", async message => {
	if (message.content.split(" ")[0] == "توب" || message.content.split(" ")[0] == "top" || message.content.split(" ")[0] == "Top") {
		let money = (await db.find()).sort((a, b) => b.coins - a.coins)
		var finalLb = "";
		let total = 0;
		let num = 0;
		for (var i in money) {
			if (message.guild.members.cache.get(money[i].id)) {
				total += parseInt(money[i].coins)
				num += 1;
				if (num === 1) {
					finalLb += `\<:emoji_1:1254746786329792583> ${client.users.cache.get(money[i].id)} **\`-\`** **${parseInt(money[i].coins).toLocaleString()}**\n`;
				} else finalLb += `#${num} ${client.users.cache.get(money[i].id)} **\`-\`** **${parseInt(money[i].coins).toLocaleString()}**\n`;
			}
			if (num == 10) {
				let total1 = total.toString()
				if (parseInt(total1.length) === 4) {
					if (total1.slice(1, 2) == 0) {
						total1 = `${total1.slice(0, 1)}K`;
					} else {
						total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}K`;
					}
				}
				if (parseInt(total1.length) === 5) {
					if (total1.slice(2, 3)) {
						total1 = `${total1.slice(0, 2)}K`;
					} else {
						total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}K`;
					}
				}
				if (parseInt(total1.length) === 6) {
					if (total1.slice(3, 4) == 0) {
						total1 = `${total1.slice(0, 3)}K`;
					}
					total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}K`;
				}
				if (parseInt(total1.length) === 7) {
					if (total1.slice(1, 2) == 0) {
						total1 = `${total1.slice(0, 1)}M`;
					} else {
						total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}M`;
					}
				}
				if (parseInt(total1.length) === 8) {
					if (total1.slice(2, 3) == 0) {
						total1 = `${total1.slice(0, 2)}M`;
					} else {
						total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}M`;
					}
				}
				if (parseInt(total1.length) === 9) {
					if (total1.slice(3, 4) == 0) {
						total1 = `${total1.slice(0, 3)}M`;
					} else {
						total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}M`;
					}
				}
				if (parseInt(total1.length) === 10) {
					if (total1.slice(1, 2) == 0) {
						total1 = `${total1.slice(0, 1)}B`;
					} else {
						total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}B`;
					}
				}
				if (total.length === 11) {
					if (total1.slice(2, 3) == 0) {
						total1 = `${total1.slice(0, 2)}B`;
					} else {
						total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}B`;
					}
				}
				if (parseInt(total1.length) === 12) {
					if (total1.slice(3, 4) == 0) {
						total1 = `${total1.slice(0, 3)}B`;
					} else {
						total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}B`;
					}
				}
				const embed = new Discord.MessageEmbed()
					.setAuthor({
						name: `توب رصيد`
					})
					.setThumbnail(message.guild.iconURL({
						dynamic: true
					}))
					.setColor("#7D72FE")
					.setDescription(finalLb)
					.setFooter({
						text: message.guild.name + " • " + total1
					})
					.setTimestamp()
				message.reply({
					embeds: [embed]
				})
				return;
			}
		}
		let total1 = total.toString()
		if (parseInt(total1.length) === 4) {
			if (total1.slice(1, 2) == 0) {
				total1 = `${total1.slice(0, 1)}K`;
			} else {
				total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}K`;
			}
		}
		if (parseInt(total1.length) === 5) {
			if (total1.slice(2, 3)) {
				total1 = `${total1.slice(0, 2)}K`;
			} else {
				total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}K`;
			}
		}
		if (parseInt(total1.length) === 6) {
			if (total1.slice(3, 4) == 0) {
				total1 = `${total1.slice(0, 3)}K`;
			}
			total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}K`;
		}
		if (parseInt(total1.length) === 7) {
			if (total1.slice(1, 2) == 0) {
				total1 = `${total1.slice(0, 1)}M`;
			} else {
				total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}M`;
			}
		}
		if (parseInt(total1.length) === 8) {
			if (total1.slice(2, 3) == 0) {
				total1 = `${total1.slice(0, 2)}M`;
			} else {
				total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}M`;
			}
		}
		if (parseInt(total1.length) === 9) {
			if (total1.slice(3, 4) == 0) {
				total1 = `${total1.slice(0, 3)}M`;
			} else {
				total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}M`;
			}
		}
		if (parseInt(total1.length) === 10) {
			if (total1.slice(1, 2) == 0) {
				total1 = `${total1.slice(0, 1)}B`;
			} else {
				total1 = `${total1.slice(0, 1)}.${total1.slice(1, 2)}B`;
			}
		}
		if (total.length === 11) {
			if (total1.slice(2, 3) == 0) {
				total1 = `${total1.slice(0, 2)}B`;
			} else {
				total1 = `${total1.slice(0, 2)}.${total1.slice(2, 3)}B`;
			}
		}
		if (parseInt(total1.length) === 12) {
			if (total1.slice(3, 4) == 0) {
				total1 = `${total1.slice(0, 3)}B`;
			} else {
				total1 = `${total1.slice(0, 3)}.${total1.slice(3, 4)}B`;
			}
		}
		const embed = new Discord.MessageEmbed()
			.setAuthor({
				name: `توب رصيد`
			})
			.setThumbnail(message.guild.iconURL({
				dynamic: true
			}))
			.setColor("#7D72FE")
			.setDescription(finalLb)
			.setFooter({
				text: `${message.guild.name} • ${total1}`
			})
			.setTimestamp()
		message.reply({
			embeds: [embed]
		})
	}
})
const guildId = '1254508555294212097';
const channelId = '1254223761985765428';
client.on("messageCreate", async message => {
	if (message.content.split(" ")[0] == "challenge" ||
		message.content.split(" ")[0] == "Challenge") {
		let data = await db.findOne({
			id: message.author.id
		})
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no"
			})
		}
		if (data.status_playing == "yes") return message.reply({
			content: `\`❎\` **لا يمكنك اللعب ، لأنك تمتلك تحدي جاري**`
		})
		let args = message.content.split(" ");
        let user = message.mentions.users.first() || await client.users.fetch(args[0], { force: true }).catch(() => undefined);
		if (!args[1]) return message.reply({ content: "من فضلك منشن شخص !!", allowedMentions: { repliedUser: false }});
        if (!user) return message.reply({ content: "لا أستطيع العثور على الشخص اللي منشنته !!", allowedMentions: { repliedUser: false }});
        if (user.id === message.author.id) return message.reply({ content: "ما تقدرش تتحدى نفسك!!", allowedMentions: { repliedUser: false }});
        if (user.bot) return message.reply({ content: "متقدرش تتحدى لبوت !!", allowedMentions: { repliedUser: false }});

        let anotherUserData = await db.findOne({ id: user.id });
        if (!anotherUserData) await db.create({ id: user.id }).then((data) => anotherUserData = data);

        if (data.challangeStatus == "friend") if (!data.friendList?.includes(user.id)) return message.reply({ content: "انت مفعل خاصية تحدي الفريندز فقط وهو مش موجود عندك"})
        if (anotherUserData.challangeStatus == "friend") if (!anotherUserData.friendList?.includes(message.author.id)) return message.reply({ content: "هو مفعل خاصية تحدي الفريندز فقط وانت مش موجود عنده"})
        if (anotherUserData.blockList?.includes(message.author.id)) return message.reply({ content: "انت محظور عنده !!", allowedMentions: { repliedUser: false }});
        if (data.blockList?.includes(user.id)) return message.reply({ content: "مش هتقدر تتحدى شخص موجود في قائمة المحظورين الخاصة بك !!!", allowedMentions: { repliedUser: false }});

		let first = message.content.slice(32)
		let coinAmount = first.replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
		first.replace("k", `٠٠٠`).replace("m", `٠٠٠٠٠٠`).replace("K", `٠٠٠`).replace("M", `٠٠٠٠٠٠`).replace("ك", `٠٠٠`).replace("م", `٠٠٠٠٠٠`).replace("مليون", `٠٠٠٠٠٠`)
		if (!coinAmount) return message.reply({
			content: `عذراً و لاكن يبدو انك لم تقم بتحديد المبلغ`
		});
		let alpha = first.slice(first.length - 1)
		if (coinAmount < 0) {
			return message.reply("عذراً و لاكن لا تستطيع التحدي بالسالب");
		}
		if (isNaN(coinAmount) || coinAmount <= 0) {
			return message.reply("عذراً و لاكن هذا الرقم ليس صحيح");
		}
		if (user.id == message.author.id) return message.reply({
			content: `\`❎\` **لا يمكنك اللعب ضد نفسك**`
		})
		if (!args[2]) return message.reply({
			content: `عذراً و لاكن يبدو انك لم تقم بتحديد العضو للعب`
		})
		let data2 = await db.findOne({
			id: user.id
		})
		if (!data2) {
			data2 = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			})
		}
		if (data2.status_playing == "yes") return message.reply({
			content: `> العضو يمتلك تحدي جاري حاليا !`
		})
		if ((parseInt(data.coins) < coinAmount) && ((parseInt(data2.coins) < coinAmount))) return message.reply({
			content: `\`❎\` **ليس لديك ما يكفي انت وصديقك للتحدي على ${coinAmount}**`
		})
		if (parseInt(data.coins) < coinAmount) return message.reply({
			content: `\`❎\` **ليس لديك ما يكفي للتحدي على ${coinAmount}**`
		})
		if (parseInt(data2.coins) < coinAmount) return message.reply({
			content: `\`❎\` **ليس لدى صديقك ما يكفي للتحدي على ${coinAmount}**`
		})
		let embed = new Discord.MessageEmbed()
			.setColor("#7D72FE")
			.setAuthor({
				name: message.author.tag,
				iconURL: message.author.displayAvatarURL({
					dynamic: true
				})
			})
			.setTitle("اختار نوع اللعبة")
			.setDescription(`> العضو: ${user}\n
    المبلغ: \`${coinAmount}\``)
			.addFields({
				name: `- لـعبة الـ زهر  🎲 :`,
				value: `*لديك ثلاث محاولات للحصول عـلي أعلي رقم و الفوز ، التعآدل ليس فوزاً .!*`
			}, {
				name: `- لـعبة الـ تقريبي 📊 :`,
				value: `> *سيظهر لك ارقام عشوائيه و يجب عليك اختيار بين اقل نتيجه او اكبر نتيجه , للحصول علي الحد الاقصي او اقرب رقم له , قد يكون الحظ حليفك او لا . التعادل ليس فوزا .!*`
			}, {
				name: `- لعبة البحث عن الزر 🧠 `,
				value: `*قم باختيار الزر الصحيح للفوز.!*`
			})
		let button_nrd = new MessageButton()
			.setCustomId(`nrd_${message.author.id}`)
			.setLabel("النرد")
			.setEmoji("🎲")
			.setStyle("SECONDARY")
		let button_rkmtakribi = new MessageButton()
			.setCustomId(`takribi_${message.author.id}`)
			.setLabel("الرقم التقريبي")
			.setEmoji("📊")
			.setStyle("SECONDARY")
		let button_xo = new MessageButton()
			.setCustomId(`xo_${message.author.id}`)
			.setLabel(" X O")
			.setEmoji("❌")
			.setStyle("SECONDARY")
			.setDisabled(true);
		let button_tartib = new MessageButton()
			.setCustomId(`tartib_${message.author.id}`)
			.setLabel("البحث عن الزر")
			.setEmoji("🧠")
			.setStyle("SECONDARY")
			.setDisabled(true);
		let button_cancel = new MessageButton()
			.setCustomId(`cancel_${message.author.id}`)
			.setLabel("إلغاء")
			.setStyle("DANGER")
		let row = new MessageActionRow()
			.setComponents(button_nrd, button_rkmtakribi, button_tartib, button_xo, button_cancel)
		message.reply({
			embeds: [embed],
			components: [row],
			allowedMentions: {
				repliedUser: true
			}
		}).then(async msg => {
			let gdata = await game.findOne({
				id: message.author.id
			})
			if (!gdata) {
				gdata = await game.create({
					id: message.author.id,
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now()),
				})
			} else {
				gdata = await game.findOneAndUpdate({
					id: message.author.id,
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now()),
				})
			}
			data2.status_playing = "yes";
			await data2.save()
			data.status_playing = "yes";
			await data.save()
		})
	}
    
        
	if (message.content.split(" ")[0] == "تحدي") {
		if (!message.guild) return;
		if (!betcateg.includes(message.channel.parentId)) return;
		let data = await db.findOne({
			id: message.author.id
		})
		if (!data) {
			data = await db.create({
				id: message.author.id,
				coins: 0,
				status_playing: "no"
			})
		}
        let args = message.content.split(" ");
        
       if (args[1] == "عام") {
            if (data.challangeStatus == "all") return  message.reply({ content: "انت عامله كده أصلا !!", allowedMentions: { repliedUser: false }});
            data.challangeStatus = "all";
            await data.save().catch(() => 0);
            return message.reply({ content: "> تم تحويل نظام التحدي الى: `عام`", allowedMentions: { repliedUser: false }});
        
        } else if (args[1] == "فرند") {
            if (data.challangeStatus == "friend") return  message.reply({ content: "انت عامله كده أصلا !!", allowedMentions: { repliedUser: false }});
            data.challangeStatus = "friend";
            await data.save().catch(() => 0);
            return message.reply({ content: "> تم تحويل نظام  التحدي الى: `فرندز` !!", allowedMentions: { repliedUser: false }});
        }
        
		if (data.status_playing == "yes") return message.reply({
			content: ` **لا يمكنك اللعب ، لأنك تمتلك تحدي جاري**`
		})
		if (!args[1]) return message.reply({
			content: `> **عذراً ولكن يبدو أنك لم تقم بتحديد لاعب حتي تلعب .**`
		})
		let user = message.mentions.users.first() || message.guild.members.cache.find(s => s.id == args[1])
		if (!user) return message.reply({
			content: `> **عذراً ولكن يبدو أن صديقك ليس بالخادم .!**`
		})
        
         if (user.id === message.author.id) return message.reply({ content: "> لا يمكنك تحدي نفسك", allowedMentions: { repliedUser: false }});
         if (user.bot) return message.reply({ content: "> لا يمكنك تحدي بوت", allowedMentions: { repliedUser: false }});

        let anotherUserData = await db.findOne({ id: user.id });
        if (!anotherUserData) await db.create({ id: user.id }).then((data) => anotherUserData = data);

        if (data.challangeStatus == "friend") if (!data.friendList?.includes(user.id)) return message.reply({ content: "> لا يمكنك اللعب مع هذا الشخص ، لأنك مفعل خاصية تحدي الأصدقاء فقط .!"})
        if (anotherUserData.challangeStatus == "friend") if (!anotherUserData.friendList?.includes(message.author.id)) return message.reply({ content: "> لا يمكنك اللعب مع هذا الشخص ، لأنه مفعل خاصية تحدي الأصدقاء فقط .!"})
        if (anotherUserData.blockList?.includes(message.author.id)) return message.reply({ content: "> لا يمكنك اللعب مع هذا الشخص ، لأنك في قائمة الحظر عنده .!", allowedMentions: { repliedUser: false }});
        if (data.blockList?.includes(user.id)) return message.reply({ content: "> لا يمكنك اللعب مع هذا الشخص ، لأنه في قائمة الحظر .!", allowedMentions: { repliedUser: false }});
        
    /*if(data.withdraw_amount != 0) return message.reply({  content: "ما ينفعش تلعب وانت طالب عملية سحب"});
     if(anotherUserData.withdraw_amount != 0) return message.reply({  content: "ما ينفعش تلعب معاه وهو طالب عملية سحب"});*/


        
		let first = message.content.slice(27)
		let coinAmount = first.replace("k", `000`).replace("m", `000000`).replace("K", `000`).replace("M", `000000`).replace("ك", `000`).replace("م", `000000`).replace("مليون", `000000`)
		if (!coinAmount) return message.reply({
			content: `عذراً و لاكن يبدو انك لم تقم بتحديد المبلغ`
		});
		let alpha = first.slice(first.length - 1)
		if (coinAmount < 0) {
			return message.reply("عذراً و لاكن لا يمكنك التحدي بالسالب");
		}
		if (isNaN(coinAmount) || coinAmount <= 0) {
			return message.reply("> **عذراً ولكن يبدو أنك لم تقم بتحديد مبلغ للعب .**");
		}
		if (user.bot) return message.reply({
			content: `> ** اللعب ضد البوت هيكون ف اقرب وقت عشان ميزة جديد بتكون له **`
		})
		if (user.id == message.author.id) return message.reply({
			content: ` **لا يمكنك اللعب ضد نفسك**`
		})
		if (!args[2]) return message.reply({
			content: `> **عذراً ولكن يبدو أنك لم تقم بتحديد مبلغ للعب .**`
		})
		let data2 = await db.findOne({
			id: user.id
		})
		if (!data2) {
			data2 = await db.create({
				id: user.id,
				coins: 0,
				status_playing: "no"
			})
		}
		if (data2.status_playing == "yes") return message.reply({
			content: `> العضو يمتلك تحدي جاري حاليا !`
		})
		if ((parseInt(data.coins) < coinAmount) && ((parseInt(data2.coins) < coinAmount))) return message.reply({
			content: `\`❎\` **ليس لديك ما يكفي انت وصديقك للتحدي على ${coinAmount}**`
		})
		if (parseInt(data.coins) < coinAmount) return message.reply({
			content: `\`❎\` **ليس لديك ما يكفي للتحدي على ${coinAmount}**`
		})
		if (parseInt(data2.coins) < coinAmount) return message.reply({
			content: `\`❎\` **ليس لدى صديقك ما يكفي للتحدي على ${coinAmount}**`
		})
		let embed = new Discord.MessageEmbed()
			.setColor("GREY")
			.setAuthor({
				name: message.author.tag,
				iconURL: message.author.displayAvatarURL({
					dynamic: true
				})
			})
			.setTitle("اختار نوع اللعبة")
			.setDescription(`> العضو: ${user}\n
  المبلغ: \`${coinAmount}\``)
			.addFields({
				name: `- لـعبة الـ زهر  🎲 :`,
				value: `*لديك ثلاث محاولات للحصول عـلي أعلي رقم و الفوز ، التعآدل ليس فوزاً .!*`
			}, {
				name: `- لـعبة الـ تقريبي 📊 :`,
				value: `> *سيظهر لك ارقام عشوائيه و يجب عليك اختيار بين اقل نتيجه او اكبر نتيجه , للحصول علي الحد الاقصي او اقرب رقم له , قد يكون الحظ حليفك او لا . التعادل ليس فوزا .!*`
			}, {
				name: `- لعبة البحث عن الزر 🧠 `,
				value: `*قم باختيار الزر الصحيح للفوز.!*`
			})
		let button_nrd = new MessageButton()
			.setCustomId(`nrd_${message.author.id}`)
			.setLabel("النرد")
			.setEmoji("🎲")
			.setStyle("SECONDARY")
		let button_rkmtakribi = new MessageButton()
			.setCustomId(`takribi_${message.author.id}`)
			.setLabel("الرقم التقريبي")
			.setEmoji("📊")
			.setStyle("SECONDARY")
		let button_xo = new MessageButton()
			.setCustomId(`xo_${message.author.id}`)
			.setLabel(" X O")
			.setEmoji("❌")
			.setStyle("SECONDARY")
			.setDisabled(true);
		let button_tartib = new MessageButton()
			.setCustomId(`tartib_${message.author.id}`)
			.setLabel("البحث عن الزر")
			.setEmoji("🧠")
			.setStyle("SECONDARY")
			.setDisabled(true);
		let button_cancel = new MessageButton()
			.setCustomId(`cancel_${message.author.id}`)
			.setLabel("إلغاء")
			.setStyle("DANGER")
		let row = new MessageActionRow()
			.setComponents(button_nrd, button_rkmtakribi, button_tartib, button_xo, button_cancel)
		message.reply({
			embeds: [embed],
			components: [row],
			allowedMentions: {
				repliedUser: false
			}
		}).then(async msg => {
			let gdata = await game.findOne({
				id: message.author.id
			})
			if (!gdata) {
				gdata = await game.create({
					id: message.author.id,
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now()),
				})
			} else {
				gdata = await game.findOneAndUpdate({
					id: message.author.id,
					msgID: msg.id,
					coins: coinAmount,
					with: user.id,
					game: null,
					channelID: message.channel.id,
					time: timestamp(moment(ms("40s")) + Date.now()),
				})
			}
			data2.status_playing = "yes";
			await data2.save()
			data.status_playing = "yes";
			await data.save()
		})
	}
})

client.on('interactionCreate', async interaction => { if (interaction.isButton()) { //nrd game
    if (interaction.customId == `nrd_${interaction.user.id}`) { let gdata = await game.findOne({ id: interaction.user.id })
          
                
   
            if (!gdata) return;
            if (!gdata.coins || gdata.coins == null) return;
            if (!gdata.with || gdata.with == null) return;
            if (!gdata.msgID || gdata.msgID == null) return;
            gdata.game = "nrd"
            await gdata.save()
            gdata.time = timestamp(moment(ms("40s")) + Date.now())
            await gdata.save()
            await interaction.deferReply({
                ephemeral: true
            })
            let embed_edit = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setDescription(`> *تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.*`)
                .addFields({
                    name: `- لـعبة الـ زهر  🎲 :  `,
                    value: `*لعبة النرد أو ، والتعادل ليس فوزاً .!*`
                }, {
                    name: `المبلغ:`,
                    value: `${parseInt(gdata.coins)}`
                })
            let button_yes = new MessageButton()
                .setCustomId(`yesg_${gdata.msgID}`)
                .setLabel("قبول")
                .setStyle("SUCCESS")
            let button_no = new MessageButton()
                .setCustomId(`nog_${gdata.msgID}`)
                .setLabel("رفض")
                .setStyle("DANGER")
            let row = new MessageActionRow()
                .setComponents(button_yes, button_no)
            interaction.editReply({
                content: `> لقد تم اختيار العبة هي : \`نرد\` !!`,
                ephemeral: true
            })
            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                embeds: [embed_edit],
                components: [row]
            })).catch(err => console.error(err))
        }
        if (interaction.customId == `yesg_${interaction.message.id}`) {
            let gdatawith = await game.findOne({
                with: interaction.user.id
            })
            if (!gdatawith) return;
            if (interaction.message.id !== gdatawith.msgID) return;
            await interaction.deferReply({
                ephemeral: true
            })
            let stusrgame = client.users.cache.get(gdatawith.id)
            let wthusrgame = client.users.cache.get(gdatawith.with)
            let nums = ["1", "2"]
            let numr = nums[Math.floor(Math.random() * nums.length)]
            let usrchoose = "";
            let notrole = "";
            if (numr == "1") {
                usrchoose = gdatawith.id;
                notrole = gdatawith.with;
            }
            if (numr == "2") {
                usrchoose = gdatawith.with;
                notrole = gdatawith.id;
            }
            gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
            await gdatawith.save()
            interaction.editReply({
                content: `> لقد تم القبول اللعبة هي : \`نرد\` ، اللعب مع : ${stusrgame} !!`,
                ephemeral: true
            })
            let embed_edit = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setDescription(`>* تنبيه: في حال عدم استجابة الطرفين و عدم اكمال التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
> عند التعادل لا يتم سحب اي مبلغ من الطرفين.*`)
                .addFields({
                    name: `- لـعبة الـ زهر  🎲 :`,
                    value: `*__لديك ثلاث محاولات للحصول عـلي أعلي رقم و الفوز ، التعآدل ليس فوزاً .!__*`
                }, {
                    name: `المبلغ:`,
                    value: `__${parseInt(gdatawith.coins)}__`
                })
            let button_yes = new MessageButton()
                .setCustomId(`yesg_${gdatawith.msgID}`)
                .setLabel("قبول")
                .setStyle("SUCCESS")
                .setDisabled()
            let button_no = new MessageButton()
                .setCustomId(`nog_${gdatawith.msgID}`)
                .setLabel("رفض")
                .setStyle("DANGER")
                .setDisabled()
            let row = new MessageActionRow()
                .setComponents(button_yes, button_no)
            client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
                embeds: [embed_edit],
                components: [row]
            })).catch(err => console.error(err))
            let nrddata = await nrd.findOne({
                msgID: gdatawith.msgID
            })
            if (!nrddata) {
                nrdata = await nrd.create({
                    msgID: gdatawith.msgID,
                    idstusr: gdatawith.id,
                    role: usrchoose,
                    notrole: notrole,
                    players: [stusrgame.id, wthusrgame.id]
                })
            } else {
                nrdata = await nrd.findOneAndUpdate({
                    msgID: gdatawith.msgID,
                    idstusr: gdatawith.id,
                    role: usrchoose,
                    notrole: notrole,
                    players: [stusrgame.id, wthusrgame.id]
                })
            }
            let nrdusrdata = await nrdusr.findOne({
                id: gdatawith.id
            })
            if (!nrdusrdata) {
                nrdusrdata = await nrdusr.create({
                    id: gdatawith.id,
                    with: gdatawith.with,
                    attempt: 0,
                    numbers: [],
                    result: 0
                })
            } else {
                nrdusrdata = await nrdusr.findOneAndUpdate({
                    id: gdatawith.id,
                    with: gdatawith.with,
                    attempt: 0,
                    numbers: [],
                    result: 0
                })
            }
            let nrdusr1data = await nrdusr.findOne({
                id: gdatawith.with
            })
            if (!nrdusr1data) {
                nrdusr1data = await nrdusr.create({
                    id: gdatawith.with,
                    with: gdatawith.id,
                    attempt: 0,
                    numbers: [],
                    result: 0
                })
            } else {
                nrdusr1data = await nrdusr.findOneAndUpdate({
                    id: gdatawith.with,
                    with: gdatawith.id,
                    attempt: 0,
                    numbers: [],
                    result: 0
                })
            }
            setTimeout(async () => {
                let embed_edit_nrd_game = new Discord.MessageEmbed()
                    .setTitle("بيانات التحدي")
                    .addFields({
                        name: `${stusrgame.username}`,
                        value: `0`
                    }, {
                        name: `${wthusrgame.username}`,
                        value: `0`
                    })
                let button_nrdk = new MessageButton()
                    .setCustomId(`nrdk_${gdatawith.msgID}`)
                    .setLabel("العب نردك")
                    .setStyle("PRIMARY")
                let row = new MessageActionRow()
                    .setComponents(button_nrdk)
                client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
                    embeds: [embed_edit_nrd_game],
                    content: `<@!${usrchoose}>\n اصبح دورك`,
                    components: [row]
                })).catch(err => console.error(err))
            }, 3000)
            return;
        }
        if (interaction.customId == `cancel_${interaction.user.id}`) {
            let gdata = await game.findOne({
                id: interaction.user.id
            })
            if (!gdata) return;
            let stusrgame = client.users.cache.get(gdata.id)
            let wthusrgame = client.users.cache.get(gdata.with)
            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                embeds: [],
                content: `تم إلغاء التحدي من قبل ${interaction.user}
> || ${stusrgame} | ${wthusrgame} || `,
                components: []
            })).catch(err => console.error(err))
            await game.findOneAndDelete({
                id: stusrgame.id,
                with: wthusrgame.id,
                msgID: interaction.message.id
            })
            let data = await db.findOne({
                id: stusrgame.id
            })
            if (!data) {
                data = await db.create({
                    id: stusrgame.id,
                    coins: 0,
                    status_playing: "no"
                })
            }
            let data2 = await db.findOne({
                id: wthusrgame.id
            })
            if (!data2) {
                data2 = await db.create({
                    id: wthusrgame.id,
                    coins: 0,
                    status_playing: "no"
                })
            }
            data2.status_playing = "no";
            await data2.save()
            data.status_playing = "no";
            await data.save()
        }
        if (interaction.customId == `nog_${interaction.message.id}`) {
            let gdata = await game.findOne({
                msgID: interaction.message.id
            })
            if (!gdata) return;
            let stusrgame = client.users.cache.get(gdata.id)
            let wthusrgame = client.users.cache.get(gdata.with)
            if (stusrgame.id !== interaction.user.id && wthusrgame.id !== interaction.user.id) return;
            if (stusrgame.id == interaction.user.id) {
                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                    embeds: [],
                    content: `تم إلغاء التحدي من قبل ${interaction.user}
  > || ${stusrgame} | ${wthusrgame} || `,
                    components: []
                })).catch(err => console.error(err))
            }
            if (wthusrgame.id == interaction.user.id) {
                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                    embeds: [],
                    content: `تم رفض التحدي من قبل ${interaction.user}
> || ${stusrgame} | ${wthusrgame} || `,
                    components: []
                })).catch(err => console.error(err))
            }
            await game.findOneAndDelete({
                id: stusrgame.id,
                with: wthusrgame.id,
                msgID: interaction.message.id
            })
            let data = await db.findOne({
                id: stusrgame.id
            })
            if (!data) {
                data = await db.create({
                    id: stusrgame.id,
                    coins: 0,
                    status_playing: "no"
                })
            }
            let data2 = await db.findOne({
                id: wthusrgame.id
            })
            if (!data2) {
                data2 = await db.create({
                    id: wthusrgame.id,
                    coins: 0,
                    status_playing: "no"
                })
            }
            data2.status_playing = "no";
            await data2.save()
            data.status_playing = "no";
            await data.save()
        }
        if (interaction.customId == `nrdk_${interaction.message.id}`) {

      let data = await nrd.findOne({
                msgID: interaction.message.id
            })
            if (!data) return;
            let datausr = await nrdusr.findOne({
                id: interaction.user.id
            })
            if (!datausr) return;
            await interaction.deferReply({
                ephemeral: true
            })
            if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
                content: `> ليس عليك الدور !`,
                ephemeral: true
            })
            if (data.role !== interaction.user.id) return;
            let gdata = await game.findOne({
                id: data.idstusr
            })
            if (!gdata) return;
            let stusrgame = client.users.cache.get(data.idstusr)
            if (!stusrgame) return;
            let wthusrgame = client.users.cache.get(gdata.with)
            if (!wthusrgame) return;
            let nums = ["1", "2", "3", "4", "5", "6"]
            let num = nums[Math.floor(Math.random() * nums.length)]
            datausr.numbers.push(num)
            await datausr.save()
            datausr.result = parseInt(datausr.result) + parseInt(num)
            await datausr.save()
            datausr.attempt = parseInt(datausr.attempt) + 1;
            await datausr.save()
            gdata.time = timestamp(moment(ms("90s")) + Date.now())
            await gdata.save()
            interaction.editReply({
                content: `> تم اللعب ، رقمك هو \`${num}\` !!`,
                ephemeral: true
            })
            let datausrus = await nrdusr.findOne({
                id: stusrgame.id
            })
            let datausrue = await nrdusr.findOne({
                id: wthusrgame.id
            })
            let resultnum1;
            if (datausrus.numbers.length == 2) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} = **${datausrus.result}**`;
            if (datausrus.numbers.length == 3) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} + ${datausrus.numbers[2]} = **${datausrus.result}**`;
            let resultnum2;
            if (datausrue.numbers.length == 2) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`;
            if (datausrue.numbers.length == 3) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} + ${datausrue.numbers[2]} = **${datausrue.result}**`;
            if (parseInt(datausr.attempt) == 1) {
                if (gdata.with == interaction.user.id) {
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${datausrus.numbers[0] || 0}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${num}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${stusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                if (data.idstusr == interaction.user.id) {
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${num}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${datausrue.numbers[0] || 0}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${wthusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                return;
            }
            if (parseInt(datausr.attempt) == 2) {
                if (datausrus.numbers.length == 1) resultnum1 = `${datausrus.numbers[0]}`
                if (datausrue.numbers.length == 1) resultnum2 = `${datausrue.numbers[0]}`
                if (wthusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${stusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                if (stusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${wthusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                return;
            }
            if (parseInt(datausr.attempt) == 3) {
                if (wthusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    let datausrupst = await nrdusr.findOne({
                        id: stusrgame.id
                    })
                    let datausrupwh = await nrdusr.findOne({
                        id: wthusrgame.id
                    })
                    let embed_end_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_end_nrd_game],
                            content: `> انتهى التحدي...`,
                            components: []
                        })).catch(err => console.error(err))
                    } else {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            components: [row]
                        })).catch(err => console.error(err))
                    }
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                            let userr1r = await nrdusr.findOne({
                                id: stusrgame.id
                            })
                            let userr2r = await nrdusr.findOne({
                                id: wthusrgame.id
                            })
                            if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 2616 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    }, {
                                        name: `${stusrgame}`,
                                        value: `> ${resultnum1}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${wthusrgame} ضد ${stusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 2682 winner ${wthusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr2st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            return;
                        } else {
                            let button_nrdk1 = new MessageButton()
                                .setCustomId(`nrdk_${gdata.msgID}`)
                                .setLabel("العب نردك")
                                .setStyle("PRIMARY")
                            let row1 = new MessageActionRow()
                                .setComponents(button_nrdk1)
                            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                embeds: [embed_edit_nrd_game],
                                content: `${stusrgame}\n اصبح دورك`,
                                components: [row1]
                            })).catch(err => console.error(err))
                        }
                    }, 2500)
                }
                if (stusrgame.id == interaction.user.id) {
                    var datausrupst = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let datausrupwh = await nrdusr.findOne({
                        id: wthusrgame.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    let embed_end_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_end_nrd_game],
                            content: `> انتهى التحدي...`,
                            components: []
                        })).catch(err => console.error(err))
                    } else {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            components: [row]
                        })).catch(err => console.error(err))
                    }
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                            let userr1r = await nrdusr.findOne({
                                id: stusrgame.id
                            })
                            let userr2r = await nrdusr.findOne({
                                id: wthusrgame.id
                            })
                            if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 2873 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${wthusrgame}`,
                                        value: `> ${resultnum2}`
                                    }, {
                                        name: `${stusrgame}`,
                                        value: `> ${resultnum1}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${wthusrgame} ضد ${stusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 2939 winner ${wthusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr2st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            return;
                        } else {
                            let button_nrdk1 = new MessageButton()
                                .setCustomId(`nrdk_${gdata.msgID}`)
                                .setLabel("العب نردك")
                                .setStyle("PRIMARY")
                            let row1 = new MessageActionRow()
                                .setComponents(button_nrdk1)
                            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                embeds: [embed_edit_nrd_game],
                                content: `${wthusrgame}\n اصبح دورك`,
                                components: [row1]
                            })).catch(err => console.error(err))
                        }
                    }, 2500)
                }
                return;
            }
        }
        if (interaction.customId == `nrdk_${interaction.message.id}`) {
      let data = await nrd.findOne({
                msgID: interaction.message.id
            })
            if (!data) return;
            let datausr = await nrdusr.findOne({
                id: interaction.user.id
            })
            if (!datausr) return;
            await interaction.deferReply({
                ephemeral: true
            })
            if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
                content: `> ليس عليك الدور !`,
                ephemeral: true
            })
            if (data.role !== interaction.user.id) return;
            let gdata = await game.findOne({
                id: data.idstusr
            })
            if (!gdata) return;
            let stusrgame = client.users.cache.get(data.idstusr)
            if (!stusrgame) return;
            let wthusrgame = client.users.cache.get(gdata.with)
            if (!wthusrgame) return;
            let nums = ["4", "5", "6"]
            let num = nums[Math.floor(Math.random() * nums.length)]
            datausr.numbers.push(num)
            await datausr.save()
            datausr.result = parseInt(datausr.result) + parseInt(num)
            await datausr.save()
            datausr.attempt = parseInt(datausr.attempt) + 1;
            await datausr.save()
            gdata.time = timestamp(moment(ms("90s")) + Date.now())
            await gdata.save()
            interaction.editReply({
                content: `> تم اللعب ، رقمك هو \`${num}\` !!`,
                ephemeral: true
            })
            let datausrus = await nrdusr.findOne({
                id: stusrgame.id
            })
            let datausrue = await nrdusr.findOne({
                id: wthusrgame.id
            })
            let resultnum1;
            if (datausrus.numbers.length == 2) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} = **${datausrus.result}**`;
            if (datausrus.numbers.length == 3) resultnum1 = `${datausrus.numbers[0]} + ${datausrus.numbers[1]} + ${datausrus.numbers[2]} = **${datausrus.result}**`;
            let resultnum2;
            if (datausrue.numbers.length == 2) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`;
            if (datausrue.numbers.length == 3) resultnum2 = `${datausrue.numbers[0]} + ${datausrue.numbers[1]} + ${datausrue.numbers[2]} = **${datausrue.result}**`;
            if (parseInt(datausr.attempt) == 1) {
                if (gdata.with == interaction.user.id) {
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${datausrus.numbers[0] || 0}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${num}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${stusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                if (data.idstusr == interaction.user.id) {
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${num}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${datausrue.numbers[0] || 0}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${wthusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                return;
            }
            if (parseInt(datausr.attempt) == 2) {
                if (datausrus.numbers.length == 1) resultnum1 = `${datausrus.numbers[0]}`
                if (datausrue.numbers.length == 1) resultnum2 = `${datausrue.numbers[0]}`
                if (wthusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${datausrue.numbers[0]} + ${datausrue.numbers[1]} = **${datausrue.result}**`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${stusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                if (stusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                        embeds: [embed_edit_nrd_game],
                        components: [row]
                    })).catch(err => console.error(err))
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        let button_nrdk1 = new MessageButton()
                            .setCustomId(`nrdk_${gdata.msgID}`)
                            .setLabel("العب نردك")
                            .setStyle("PRIMARY")
                        let row1 = new MessageActionRow()
                            .setComponents(button_nrdk1)
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            content: `${wthusrgame}\n اصبح دورك`,
                            components: [row1]
                        })).catch(err => console.error(err))
                    }, 2500)
                }
                return;
            }
            if (parseInt(datausr.attempt) == 3) {
                if (wthusrgame.id == interaction.user.id) {
                    var datausrup = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    let datausrupst = await nrdusr.findOne({
                        id: stusrgame.id
                    })
                    let datausrupwh = await nrdusr.findOne({
                        id: wthusrgame.id
                    })
                    let embed_end_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_end_nrd_game],
                            content: `> انتهى التحدي...`,
                            components: []
                        })).catch(err => console.error(err))
                    } else {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            components: [row]
                        })).catch(err => console.error(err))
                    }
                    setTimeout(async () => {
                        data.role = stusrgame.id;
                        await data.save()
                        data.notrole = wthusrgame.id;
                        await data.save()
                        if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                            let userr1r = await nrdusr.findOne({
                                id: stusrgame.id
                            })
                            let userr2r = await nrdusr.findOne({
                                id: wthusrgame.id
                            })
                            if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                        }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 3605 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    }, {
                                        name: `${stusrgame}`,
                                        value: `> ${resultnum1}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                let datacoinsusr1st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr2st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            return;
                        } else {
                            let button_nrdk1 = new MessageButton()
                                .setCustomId(`nrdk_${gdata.msgID}`)
                                .setLabel("العب نردك")
                                .setStyle("PRIMARY")
                            let row1 = new MessageActionRow()
                                .setComponents(button_nrdk1)
                            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                embeds: [embed_edit_nrd_game],
                                content: `${stusrgame}\n اصبح دورك`,
                                components: [row1]
                            })).catch(err => console.error(err))
                        }
                    }, 2500)
                }
                if (stusrgame.id == interaction.user.id) {
                    var datausrupst = await nrdusr.findOne({
                        id: interaction.user.id
                    })
                    let datausrupwh = await nrdusr.findOne({
                        id: wthusrgame.id
                    })
                    let embed_edit_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    let button_nrdk = new MessageButton()
                        .setCustomId(`nrdk_${gdata.msgID}`)
                        .setLabel("العب نردك")
                        .setStyle("DANGER")
                        .setDisabled()
                    let row = new MessageActionRow()
                        .setComponents(button_nrdk)
                    let embed_end_nrd_game = new Discord.MessageEmbed()
                        .setTitle("بيانات التحدي")
                        .addFields({
                            name: `${stusrgame.tag}`,
                            value: `> ${resultnum1}`
                        }, {
                            name: `${wthusrgame.tag}`,
                            value: `> ${resultnum2}`
                        })
                    if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_end_nrd_game],
                            content: `> انتهى التحدي...`,
                            components: []
                        })).catch(err => console.error(err))
                    } else {
                        client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                            embeds: [embed_edit_nrd_game],
                            components: [row]
                        })).catch(err => console.error(err))
                    }
                    setTimeout(async () => {
                        data.role = wthusrgame.id;
                        await data.save()
                        data.notrole = stusrgame.id;
                        await data.save()
                        if ((parseInt(datausrupst.attempt) == 3 && datausrupst.numbers.length == 3) && (parseInt(datausrupwh.attempt) == 3 && datausrupwh.numbers.length == 3)) {
                            let userr1r = await nrdusr.findOne({
                                id: stusrgame.id
                            })
                            let userr2r = await nrdusr.findOne({
                                id: wthusrgame.id
                            })
                            if (parseInt(userr1r.result) == parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `${stusrgame} / ${wthusrgame} تعادل !\n اللعبة: النرد, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr1r.result) > parseInt(userr2r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${stusrgame.tag}`,
                                        value: `> ${resultnum1}`
                                    }, {
                                        name: `${wthusrgame.tag}`,
                                        value: `> ${resultnum2}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${stusrgame}** فائززززز !!! ب مجموع **${parseInt(userr1r.result)}** الي يفوز فيه نقطة!\n\n**${wthusrgame}** خاسر ب مجموع **${parseInt(userr2r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                                await bets.send(`لقد فاز ${wthusrgame} ضد ${stusrgame} ب$${parseInt(gdata.coins)}`)
                                await bets.send({
                                    files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                                });
                                console.log(`line 3671 winner ${wthusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            if (parseInt(userr2r.result) > parseInt(userr1r.result)) {
                                let embed_end = new Discord.MessageEmbed()
                                    .setTitle("بيانات التحدي")
                                    .addFields({
                                        name: `${wthusrgame}`,
                                        value: `> ${resultnum2}`
                                    }, {
                                        name: `${stusrgame}`,
                                        value: `> ${resultnum1}`
                                    })
                                client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                    embeds: [embed_end],
                                    content: `**${wthusrgame}** فائززززز !!! ب مجموع **${parseInt(userr2r.result)}** الي يفوز فيه نقطة!\n\n**${stusrgame}** خاسر ب مجموع **${parseInt(userr1r.result)}** نقطة!
		> اللعبة: **النرد**, المبلغ: **${gdata.coins}**`
                                })).catch(err => console.error(err))
                                const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${wthusrgame} ضد ${stusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 357 winner ${wthusrgame} amount ${parseInt(gdata.coins)}`)
                                let datacoinsusr1st = await db.findOne({
                                    id: wthusrgame.id
                                })
                                if (!datacoinsusr1st) {
                                    datacoinsusr1st = await db.create({
                                        id: wthusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                let tax = parseInt(gdata.coins) * 0.09;
                                let total = parseInt(gdata.coins) - parseInt(tax);
                                datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
                                await datacoinsusr1st.save()
                                let datacoinsusr2st = await db.findOne({
                                    id: stusrgame.id
                                })
                                if (!datacoinsusr2st) {
                                    datacoinsusr2st = await db.create({
                                        id: stusrgame.id,
                                        coins: 0,
                                        status_playing: "no"
                                    })
                                }
                                datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                await datacoinsusr2st.save()
                                datacoinsusr1st.status_playing = "no"
                                await datacoinsusr1st.save()
                                datacoinsusr2st.status_playing = "no"
                                await datacoinsusr2st.save()
                                await nrd.findOneAndDelete({
                                    msgID: gdata.msgID,
                                    idstusr: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: stusrgame.id
                                })
                                await nrdusr.findOneAndDelete({
                                    id: wthusrgame.id
                                })
                                await game.findOneAndDelete({
                                    id: stusrgame.id,
                                    with: wthusrgame.id
                                })
                            }
                            return;
                        } else {
                            let button_nrdk1 = new MessageButton()
                                .setCustomId(`nrdk_${gdata.msgID}`)
                                .setLabel("العب نردك")
                                .setStyle("PRIMARY")
                            let row1 = new MessageActionRow()
                                .setComponents(button_nrdk1)
                            client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
                                embeds: [embed_edit_nrd_game],
                                content: `${wthusrgame}\n اصبح دورك`,
                                components: [row1]
                            })).catch(err => console.error(err))
                        }
                    }, 2500)
                }
                return;
            }
        }
		if (interaction.customId == `takribi_${interaction.user.id}`) {
			let gdata = await game.findOne({
				id: interaction.user.id
			})
			if (!gdata) return;
			if (!gdata.coins || gdata.coins == null) return;
			if (!gdata.with || gdata.with == null) return;
			if (!gdata.msgID || gdata.msgID == null) return;
			gdata.game = "takribi"
			await gdata.save()
			await interaction.deferReply({
				ephemeral: true
			})
			let usraccano = interaction.guild.members.cache.find(s => s.id == gdata.with)
			if (!usraccano) return interaction.reply({
				content: `\`❎\` **لم استطيع إجاد صديقك في الخادم**`,
				ephemeral: true
			})
			gdata.time = timestamp(moment(ms("40s")) + Date.now())
			await gdata.save()
			let embed_edit = new Discord.MessageEmbed()
				.setColor("#7D72FE")
				.setDescription(`> تنبيه: في حال عدم استجابة الطرفين و عدم اكمال* التحدي يؤدي الى خصم نصف المبلغ من الطرفين.
    > عند التعادل لا يتم سحب اي مبلغ من الطرفين.*`)
				.addFields({
					name: `- لـعبة الـ تقريبي 📊 :`,
					value: `*__سيظهر لك ارقام عشوائيه و يجب عليك اختيار بين اقل نتيجه او اكبر نتيجه , للحصول علي الحد الاقصي او اقرب رقم له , قد يكون الحظ حليفك او لا . التعادل ليس فوزا .!
__*`
				}, {
					name: `المبلغ:`,
					value: `${parseInt(gdata.coins)}`
				})
			let button_yes = new MessageButton()
				.setCustomId(`yestkg_${gdata.msgID}`)
				.setLabel("قبول")
				.setStyle("SUCCESS")
			let button_no = new MessageButton()
				.setCustomId(`notkg_${gdata.msgID}`)
				.setLabel("رفض")
				.setStyle("DANGER")
			let row = new MessageActionRow()
				.setComponents(button_yes, button_no)
			interaction.editReply({
				content: `> لقد تم اختيار العبة هي : \`الرقم التقريبي\` !!`,
				ephemeral: true
			})
			client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
				embeds: [embed_edit],
				content: `> بانتظار رد من ${usraccano} ...`,
				components: [row]
			})).catch(err => console.error(err))
		}
		if (interaction.customId == `yestkg_${interaction.message.id}`) {
			let gdatawith = await game.findOne({
				with: interaction.user.id
			})
			if (!gdatawith) return;
			if (interaction.message.id !== gdatawith.msgID) return;
			await interaction.deferReply({
				ephemeral: true
			})
			let stusrgame = client.users.cache.get(gdatawith.id)
			let wthusrgame = client.users.cache.get(gdatawith.with)
			let nums = ["1", "2"]
			let numr = nums[Math.floor(Math.random() * nums.length)]
			let usrchoose = "";
			let notrole = "";
			if (numr == "1") {
				usrchoose = gdatawith.id;
				notrole = gdatawith.with;
				statusuingame1 = "**Playing..**";
				statusuingame2 = "Waiting.."
			}
			if (numr == "2") {
				usrchoose = gdatawith.with;
				notrole = gdatawith.id;
				statusuingame1 = "Waiting..";
				statusuingame2 = "**Playing..**"
			}
			gdatawith.time = timestamp(moment(ms("90s")) + Date.now())
			await gdatawith.save()
			interaction.editReply({
				content: `> لقد تم القبول اللعبة هي : \`الرقم التقريبي\` ، اللعب مع : ${stusrgame} !!`,
				ephemeral: true
			})
			const firstNumbers = [];
			for (let i = 19; i <= 79; i += 3) {
				firstNumbers.push(i);
			}
			const secondNumbers = [2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7];
			const thirdNumbers = [4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14];
			const fourthNumbers = [5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 15, 15, 16, 16, 17, 18, 18, 19];
			const fiveNumbers = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 22, 23, 24, 25, 26, 27];
			const randomIndex = Math.floor(Math.random() * firstNumbers.length);
			const a = secondNumbers[randomIndex];
			const b = thirdNumbers[randomIndex];
			const c = fourthNumbers[randomIndex];
			const d = fiveNumbers[randomIndex]
			const numaksa = firstNumbers[randomIndex];
			setTimeout(async () => {
				let embed_edit_nrd_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${numaksa}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> ${statusuingame1}`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> ${statusuingame2}`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdatawith.msgID}`)
					.setLabel(`${a} - ${b}`)
					.setStyle("PRIMARY")
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdatawith.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdatawith.msgID}`)
					.setLabel(`${c} - ${d}`)
					.setStyle("PRIMARY")
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdatawith.msgID).then(msg1 => msg1.edit({
					embeds: [embed_edit_nrd_game],
					content: `<@!${usrchoose}>\n انه دورك`,
					components: [row]
				})).catch(err => console.error(err))
			}, 1250)
			let tkdata = await takribi.findOne({
				msgID: gdatawith.msgID
			})
			if (!tkdata) {
				tkdata = await takribi.create({
					msgID: gdatawith.msgID,
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					max_number: numaksa,
					number_players_done: 0,
					number_smaller1: a,
					number_smaller2: b,
					number_greater1: c,
					number_greater2: d
				})
			} else {
				tkdata = await takribi.findOneAndUpdate({
					msgID: gdatawith.msgID,
					idstusr: gdatawith.id,
					role: usrchoose,
					notrole: notrole,
					max_number: numaksa,
					number_players_done: 0,
					number_smaller1: a,
					number_smaller2: b,
					number_greater1: c,
					number_greater2: d
				})
			}
			let tkusrdata = await tkusr.findOne({
				id: gdatawith.id
			})
			if (!tkusrdata) {
				tkusrdata = await tkusr.create({
					id: gdatawith.id,
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusrdata = await tkusr.findOneAndUpdate({
					id: gdatawith.id,
					with: gdatawith.with,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			let tkusr1data = await tkusr.findOne({
				id: gdatawith.with
			})
			if (!tkusr1data) {
				tkusr1data = await tkusr.create({
					id: gdatawith.with,
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			} else {
				tkusr1data = await tkusr.findOneAndUpdate({
					id: gdatawith.with,
					with: gdatawith.id,
					attempt: 0,
					numbers: [],
					result: 0,
					msgID: interaction.message.id
				})
			}
			return;
		}
		if (interaction.customId == `notkg_${interaction.message.id}`) {
			let gdata = await game.findOne({
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(gdata.id)
			let wthusrgame = client.users.cache.get(gdata.with)
			if (stusrgame.id !== interaction.user.id && wthusrgame.id !== interaction.user.id) return;
			if (stusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `تم إلغاء التحدي من قبل ${interaction.user}
            > || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch(err => console.error(err))
			}
			if (wthusrgame.id == interaction.user.id) {
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [],
					content: `تم رفض التحدي من قبل ${interaction.user}
         > || ${stusrgame} | ${wthusrgame} || `,
					components: []
				})).catch(err => console.error(err))
			}
			await game.findOneAndDelete({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			let data = await db.findOne({
				id: stusrgame.id
			})
			if (!data) {
				data = await db.create({
					id: stusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			let data2 = await db.findOne({
				id: wthusrgame.id
			})
			if (!data2) {
				data2 = await db.create({
					id: wthusrgame.id,
					coins: 0,
					status_playing: "no"
				})
			}
			data2.status_playing = "no";
			await data2.save()
			data.status_playing = "no";
			await data.save()
		}
		if (interaction.customId == `finishtk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			let datausr = await tkusr.findOne({
				id: interaction.user.id,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			await interaction.deferReply({
				ephemeral: true
			})
			if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			data.number_players_done = parseInt(data.number_players_done) + 1;
			await data.save()
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			if (parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${stusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					interaction.editReply({
						content: `> تم الانتهاء من اللعب، انتظر العضو حتى يلعب دوره !`,
						ephemeral: true
					})
					return;
				}
				if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${wthusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					interaction.editReply({
						content: `> تم الانتهاء من اللعب، انتظر العضو حتى يلعب دوره !`,
						ephemeral: true
					})
					return;
				}
			}
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if (parseInt(dataup.number_players_done) == 2) {
				let embed_finish_tk_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${dataup.max_number}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> Done`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> Done`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdata.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
					.setDisabled()
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_finish_tk_game],
					content: `> انتهى التحدي...`,
					components: [row]
				})).catch(err => console.error(err))
				setTimeout(async () => {
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  ** الـ ** فـآئز ** : بـ ** مجموع ** : ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()


						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} ** الـ ** فـآئز ** : بـ ** مجموع ** : ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  ** الـ ** فـآئز ** : بـ ** مجموع ** :${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${wthusrgame} ضد ${stusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 357 winner ${wthusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  ** الـ ** فـآئز ** : بـ ** مجموع ** :${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4311 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.04;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}, 500)
				return;
			}
		}
		if (interaction.customId == `arkam1tk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			let datausr = await tkusr.findOne({
				id: interaction.user.id,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			await interaction.deferReply({
				ephemeral: true
			})
			if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			let urnum = getRandomNumber(parseInt(data.number_smaller1), parseInt(data.number_smaller2))
			datausr.numbers.push(urnum)
			await datausr.save()
			datausr.result = parseInt(datausr.result) + urnum;
			await datausr.save()
			let datausrup = await tkusr.findOne({
				id: interaction.user.id,
				msgID: interaction.message.id
			})
			if (!datausrup) return;
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if ((parseInt(data.max_number) < parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: interaction.user.id,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					return;
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
					return;
				}
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
				}
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: interaction.user.id,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					return;
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
          اصبح مجموعك ${datausrup.result}
          > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
					return;
				}
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
				}
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${stusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${wthusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
			}
			if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${stusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${wthusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				return;
			}
			if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
				interaction.editReply({
					content: `لقد حصلت على **${urnum}**
اصبح مجموعك ${datausrup.result}
> يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
					ehpemeral: true
				})
				let embed_finish_tk_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${dataup.max_number}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> Done`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> Done`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdata.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
					.setDisabled()
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_finish_tk_game],
					content: `> انتهى التحدي...`,
					components: [row]
				})).catch(err => console.error(err))
				setTimeout(async () => {
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}, 1500)
				return;
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
				interaction.editReply({
					content: `لقد حصلت على **${urnum}**
      اصبح مجموعك ${datausrup.result}
      > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
					ehpemeral: true
				})
				let embed_finish_tk_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${dataup.max_number}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> Done`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> Done`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdata.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
					.setDisabled()
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_finish_tk_game],
					content: `> انتهى التحدي...`,
					components: [row]
				})).catch(err => console.error(err))
				setTimeout(async () => {
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}, 1500)
				return;
			}
			return interaction.editReply({
				content: `لقد حصلت على **${urnum}**
     اصبح مجموعك ${datausrup.result}
     ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`,
				ephemeral: true
			})
		}
		if (interaction.customId == `arkam2tk_${interaction.message.id}`) {
			let data = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!data) return;
			let datausr = await tkusr.findOne({
				id: interaction.user.id,
				msgID: interaction.message.id
			})
			if (!datausr) return;
			await interaction.deferReply({
				ephemeral: true
			})
			if (data.role !== interaction.user.id && data.notrole == interaction.user.id) return interaction.editReply({
				content: `انه ليس دورك !`,
				ephemeral: true
			})
			if (data.role !== interaction.user.id) return;
			let gdata = await game.findOne({
				id: data.idstusr,
				msgID: interaction.message.id
			})
			if (!gdata) return;
			let stusrgame = client.users.cache.get(data.idstusr)
			if (!stusrgame) return;
			let wthusrgame = client.users.cache.get(gdata.with)
			if (!wthusrgame) return;
			let dataup = await takribi.findOne({
				msgID: interaction.message.id
			})
			if (!dataup) return;
			gdata.time = timestamp(moment(ms("90s")) + Date.now())
			await gdata.save()
			let urnum = getRandomNumber(parseInt(data.number_greater1), parseInt(data.number_greater2))
			datausr.numbers.push(urnum)
			await datausr.save()
			datausr.result = parseInt(datausr.result) + urnum;
			await datausr.save()
			let datausrup = await tkusr.findOne({
				id: interaction.user.id,
				msgID: interaction.message.id
			})
			if (!datausrup) return;
			let datausrtk1 = await tkusr.findOne({
				id: stusrgame.id,
				with: wthusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk1) return;
			let datausrtk2 = await tkusr.findOne({
				id: wthusrgame.id,
				with: stusrgame.id,
				msgID: interaction.message.id
			})
			if (!datausrtk2) return;
			if ((parseInt(data.max_number) < parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: interaction.user.id,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					return;
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
					return;
				}
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
                اصبح مجموعك ${datausrup.result}
                > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100)* parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
				}
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result))) {
				data.number_players_done = parseInt(data.number_players_done) + 1
				await data.save()
				datausrup = await tkusr.findOne({
					id: interaction.user.id,
					msgID: interaction.message.id
				})
				datausrtk1 = await tkusr.findOne({
					id: stusrgame.id,
					with: wthusrgame.id,
					msgID: interaction.message.id
				})
				datausrtk2 = await tkusr.findOne({
					id: wthusrgame.id,
					with: stusrgame.id,
					msgID: interaction.message.id
				})
				dataup = await takribi.findOne({
					msgID: interaction.message.id
				})
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
					if (data.notrole == stusrgame.id) {
						data.role = stusrgame.id;
						await data.save()
						data.notrole = wthusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> **Playing..**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> Done`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${stusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					if (data.notrole == wthusrgame.id) {
						data.role = wthusrgame.id;
						await data.save()
						data.notrole = stusrgame.id;
						await data.save()
						let embed_finish_tk_game = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> Done`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> **Playing..**`
							})
						let button_arkam1 = new MessageButton()
							.setCustomId(`arkam1tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
							.setStyle("PRIMARY")
						let button_finish = new MessageButton()
							.setCustomId(`finishtk_${gdata.msgID}`)
							.setLabel("finish")
							.setStyle("SUCCESS")
						let button_arkam2 = new MessageButton()
							.setCustomId(`arkam2tk_${gdata.msgID}`)
							.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
							.setStyle("PRIMARY")
						let row = new MessageActionRow()
							.setComponents(button_arkam1, button_finish, button_arkam2)
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game],
							content: `> ${wthusrgame}\n اصبح دورك !`,
							components: [row]
						})).catch(err => console.error(err))
						return interaction.editReply({
							content: `لقد حصلت على **${urnum}**
                    اصبح مجموعك ${datausrup.result}
                    > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
							ehpemeral: true
						})
					}
					return;
				}
				if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
          اصبح مجموعك ${datausrup.result}
          > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (5 / 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
					return;
				}
				if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
					interaction.editReply({
						content: `لقد حصلت على **${urnum}**
                  اصبح مجموعك ${datausrup.result}
                  > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
						.setDisabled()
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
						.setDisabled()
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> انتهى التحدي...`,
						components: [row]
					})).catch(err => console.error(err))
					setTimeout(async () => {
						if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) *

parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let datacoinsusr2st = await db.findOne({
								id: wthusrgame.id
							})
							if (!datacoinsusr2st) {
								datacoinsusr = await db.create({
									id: wthusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
							let total = parseInt(gdata.coins) - parseInt(tax);
							datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
							datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
						if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
							let embed_finish_tk_game_tm = new Discord.MessageEmbed()
								.setTitle("بيانات التحدي")
								.setDescription(`اقصى رقم : **${dataup.max_number}**`)
								.addFields({
									name: `${stusrgame.tag}`,
									value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
								}, {
									name: `${wthusrgame.tag}`,
									value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
								})
							client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
								embeds: [embed_finish_tk_game_tm],
								content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
								components: []
							})).catch(err => console.error(err))
							const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
							let datacoinsusr1st = await db.findOne({
								id: stusrgame.id
							})
							if (!datacoinsusr1st) {
								datacoinsusr1st = await db.create({
									id: stusrgame.id,
									coins: 0,
									status_playing: "no"
								})
							}
							let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
							datacoinsusr1st.status_playing = "no"
							await datacoinsusr1st.save()
							datacoinsusr2st.status_playing = "no"
							await datacoinsusr2st.save()
							await takribi.findOneAndDelete({
								msgID: gdata.msgID,
								idstusr: stusrgame.id
							})
							await tkusr.findOneAndDelete({
								id: stusrgame.id,
								msgID: interaction.message.id
							})
							await tkusr.findOneAndDelete({
								id: wthusrgame.id,
								msgID: interaction.message.id
							})
							await game.findOneAndDelete({
								id: stusrgame.id,
								with: wthusrgame.id,
								msgID: interaction.message.id
							})
							return;
						}
					}, 1500)
				}
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${stusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${wthusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
			}
			if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) == 1) {
				if (data.notrole == stusrgame.id) {
					data.role = stusrgame.id;
					await data.save()
					data.notrole = wthusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> **Playing..**`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> Done`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${stusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				if (data.notrole == wthusrgame.id) {
					data.role = wthusrgame.id;
					await data.save()
					data.notrole = stusrgame.id;
					await data.save()
					let embed_finish_tk_game = new Discord.MessageEmbed()
						.setTitle("بيانات التحدي")
						.setDescription(`اقصى رقم : **${dataup.max_number}**`)
						.addFields({
							name: `${stusrgame.tag}`,
							value: `> Done`
						}, {
							name: `${wthusrgame.tag}`,
							value: `> **Playing..**`
						})
					let button_arkam1 = new MessageButton()
						.setCustomId(`arkam1tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
						.setStyle("PRIMARY")
					let button_finish = new MessageButton()
						.setCustomId(`finishtk_${gdata.msgID}`)
						.setLabel("finish")
						.setStyle("SUCCESS")
					let button_arkam2 = new MessageButton()
						.setCustomId(`arkam2tk_${gdata.msgID}`)
						.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
						.setStyle("PRIMARY")
					let row = new MessageActionRow()
						.setComponents(button_arkam1, button_finish, button_arkam2)
					client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
						embeds: [embed_finish_tk_game],
						content: `> ${wthusrgame}\n اصبح دورك !`,
						components: [row]
					})).catch(err => console.error(err))
					return interaction.editReply({
						content: `لقد حصلت على **${urnum}**
        اصبح مجموعك ${datausrup.result}
        > يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
						ehpemeral: true
					})
				}
				return;
			}
			if ((parseInt(data.max_number) < parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
				interaction.editReply({
					content: `لقد حصلت على **${urnum}**
اصبح مجموعك ${datausrup.result}
> يا للأسف , لقد تخطيت الرقم المطلوب و قد تم انهاء دورك`,
					ehpemeral: true
				})
				let embed_finish_tk_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${dataup.max_number}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> Done`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> Done`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdata.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
					.setDisabled()
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_finish_tk_game],
					content: `> انتهى التحدي...`,
					components: [row]
				})).catch(err => console.error(err))
				setTimeout(async () => {
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (5 / 100)* parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}, 1500)
				return;
			}
			if ((parseInt(data.max_number) == parseInt(datausrup.result)) && parseInt(dataup.number_players_done) >= 2) {
				interaction.editReply({
					content: `لقد حصلت على **${urnum}**
      اصبح مجموعك ${datausrup.result}
      > تهانينا لقد حصلت على الرقم المطلوب و قد تم انهاء دورك`,
					ehpemeral: true
				})
				let embed_finish_tk_game = new Discord.MessageEmbed()
					.setTitle("بيانات التحدي")
					.setDescription(`اقصى رقم : **${dataup.max_number}**`)
					.addFields({
						name: `${stusrgame.tag}`,
						value: `> Done`
					}, {
						name: `${wthusrgame.tag}`,
						value: `> Done`
					})
				let button_arkam1 = new MessageButton()
					.setCustomId(`arkam1tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_smaller1} - ${dataup.number_smaller2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let button_finish = new MessageButton()
					.setCustomId(`finishtk_${gdata.msgID}`)
					.setLabel("finish")
					.setStyle("SUCCESS")
					.setDisabled()
				let button_arkam2 = new MessageButton()
					.setCustomId(`arkam2tk_${gdata.msgID}`)
					.setLabel(`${dataup.number_greater1} - ${dataup.number_greater2}`)
					.setStyle("PRIMARY")
					.setDisabled()
				let row = new MessageActionRow()
					.setComponents(button_arkam1, button_finish, button_arkam2)
				client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
					embeds: [embed_finish_tk_game],
					content: `> انتهى التحدي...`,
					components: [row]
				})).catch(err => console.error(err))
				setTimeout(async () => {
					if (parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
						await datacoinsusr1st.save()
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) < parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) || (parseInt(datausrtk1.result) == parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame} **/** ${wthusrgame} تعادل !\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if (parseInt(dataup.max_number) >= parseInt(datausrtk1.result) && parseInt(dataup.max_number) < parseInt(datausrtk2.result)) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk1.result)) && (parseInt(datausrtk1.result) > parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${stusrgame}  فائززززز !!! ب مجموع ${datausrtk1.result} نقطة!\n\n${wthusrgame} خاسر ب مجموع **${datausrtk2.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);
						datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) + parseInt(total)
						datacoinsusr1st.wins_money += parseInt(total);
                                datacoinsusr1st.wins += 1;
                                
                                if (datacoinsusr1st.wins >= 6) {
                                    datacoinsusr1st.coins += (2 / 100) * parseInt(datacoinsusr1st.wins_money);
                                    datacoinsusr1st.wins = 0;
                                    datacoinsusr1st.wins_money = 0;
                                }
                                
								await datacoinsusr1st.save()
								let datacoinsusr2st = await db.findOne({
									id: wthusrgame.id
								})
								if (!datacoinsusr2st) {
									datacoinsusr = await db.create({
										id: wthusrgame.id,
										coins: 0,
										status_playing: "no"
									})
								}
								datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) - parseInt(gdata.coins)
                                datacoinsusr2st.loses_money += parseInt(gdata.coins);
                                datacoinsusr2st.loses += 1;
                                
                                if (datacoinsusr2st.loses >= 9) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.loses_money);
                                    datacoinsusr2st.loses = 0;
                                    datacoinsusr2st.loses_money = 0;
                                }
								await datacoinsusr2st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
					if ((parseInt(dataup.max_number) >= parseInt(datausrtk2.result)) && (parseInt(datausrtk1.result) < parseInt(datausrtk2.result))) {
						let embed_finish_tk_game_tm = new Discord.MessageEmbed()
							.setTitle("بيانات التحدي")
							.setDescription(`اقصى رقم : **${dataup.max_number}**`)
							.addFields({
								name: `${stusrgame.tag}`,
								value: `> ${datausrtk1.numbers.join(" + ") || ""} = **${datausrtk1.result || 0}**`
							}, {
								name: `${wthusrgame.tag}`,
								value: `> ${datausrtk2.numbers.join(" + ") || ""} = **${datausrtk2.result || 0}**`
							})
						client.channels.cache.get(interaction.channel.id).messages.fetch(gdata.msgID).then(msg1 => msg1.edit({
							embeds: [embed_finish_tk_game_tm],
							content: `${wthusrgame}  فائززززز !!! ب مجموع ${datausrtk2.result} نقطة!\n\n${stusrgame} خاسر ب مجموع **${datausrtk1.result}** نقطة!\nاللعبة: **الرقم التقريبي**, المبلغ: **${parseInt(gdata.coins).toLocaleString()}**`,
							components: []
						})).catch(err => console.error(err))
						const bets = client.channels.cache.get(allbetschannel);
                        await bets.send(`لقد فاز ${stusrgame} ضد ${wthusrgame} ب$${parseInt(gdata.coins)}`)
                        await bets.send({
                            files: ["https://i.ibb.co/TT8H0X5/Picsart-24-06-23-04-24-51-743.png"]
                        });
                        console.log(`line 4382 winner ${stusrgame} amount ${parseInt(gdata.coins)}`)
						let datacoinsusr1st = await db.findOne({
							id: stusrgame.id
						})
						if (!datacoinsusr1st) {
							datacoinsusr1st = await db.create({
								id: stusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						let tax = parseInt(gdata.coins) * 0.090;
						let total = parseInt(gdata.coins) - parseInt(tax);

						let datacoinsusr2st = await db.findOne({
							id: wthusrgame.id
						})
						if (!datacoinsusr2st) {
							datacoinsusr = await db.create({
								id: wthusrgame.id,
								coins: 0,
								status_playing: "no"
							})
						}
						datacoinsusr2st.coins = parseInt(datacoinsusr2st.coins) + parseInt(total)
						datacoinsusr2st.wins_money += parseInt(total);
                                datacoinsusr2st.wins += 1;
                                
                                if (datacoinsusr2st.wins >= 6) {
                                    datacoinsusr2st.coins += (1.5/ 100) * parseInt(datacoinsusr2st.wins_money);
                                    datacoinsusr2st.wins = 0;
                                    datacoinsusr2st.wins_money = 0;
                                }
                                
								await datacoinsusr2st.save()
								
								datacoinsusr1st.coins = parseInt(datacoinsusr1st.coins) - parseInt(gdata.coins)
                                datacoinsusr1st.loses_money += parseInt(gdata.coins);
                                datacoinsusr1st.loses += 1;
                                
                                if (datacoinsusr1st.loses >= 9) {
                                    datacoinsusr1st.coins += (1.5/ 100) * parseInt(datacoinsusr1st.loses_money);
                                    datacoinsusr1st.loses = 0;
                                    datacoinsusr1st.loses_money = 0;
                                }
								await datacoinsusr1st.save()
						datacoinsusr1st.status_playing = "no"
						await datacoinsusr1st.save()
						datacoinsusr2st.status_playing = "no"
						await datacoinsusr2st.save()
						await takribi.findOneAndDelete({
							msgID: gdata.msgID,
							idstusr: stusrgame.id
						})
						await tkusr.findOneAndDelete({
							id: stusrgame.id,
							msgID: interaction.message.id
						})
						await tkusr.findOneAndDelete({
							id: wthusrgame.id,
							msgID: interaction.message.id
						})
						await game.findOneAndDelete({
							id: stusrgame.id,
							with: wthusrgame.id,
							msgID: interaction.message.id
						})
						return;
					}
				}, 1500)
				return;
			}
			return interaction.editReply({
				content: `لقد حصلت على **${urnum}**
     اصبح مجموعك ${datausrup.result}
     ||تنبيه: انتبه ان يصبح مجموعك اعلى من الرقم المطلوب, يمكنك انهاء دورك بالضغط على الزر الاخضر||`,
				ephemeral: true
			})
		}
	}
})

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const minesweeper = require('discord.js-minesweeper');
module.exports = {
	name: 'minesweeper',
	description: 'Play minesweeper game in Discord',
	async execute(interaction) {
		const mines = new minesweeper({
			rows: 10,
			columns: 10,
			mines: 10,
			revealFirstCell: true,
			emote: 'boom',
		});
		await mines.start();
		const grid = mines.print();
		const rows = [];
		for (let i = 0; i < grid.length; i += 1) {
			const row = new MessageActionRow();
			for (let j = 0; j < grid[i].length; j += 1) {
				const button = new MessageButton()
					.setCustomId(`${i},${j}`)
					.setLabel(' ')
					.setStyle('PRIMARY');
				row.addComponents(button);
			}
			rows.push(row);
		}
		const message = await interaction.reply({
			content: 'Minesweeper started!',
			components: rows,
		});
		const filter = (i) => i.customId.split(',')[0] === '0';
		const collector = message.createMessageComponentCollector({
			filter,
			time: 30000
		});
		collector.on('collect', (i) => {
			const [row, column] = i.customId.split(',');
			const result = mines.revealCell(row, column);
			if (result === false) {
				i.reply({
					content: 'Game Over!',
					components: [],
				});
				collector.stop();
			} else {
				const newGrid = mines.print();
				const newRows = [];
				for (let i = 0; i < newGrid.length; i += 1) {
					const row = new MessageActionRow();
					for (let j = 0; j < newGrid[i].length; j += 1) {
						const button = new MessageButton()
							.setCustomId(`${i},${j}`)
							.setLabel(newGrid[i][j] === '0' ? ' ' : newGrid[i][j])
							.setStyle('PRIMARY');
						row.addComponents(button);
					}
					newRows.push(row);
				}
				i.update({
					components: newRows,
				});
			}
		});
		collector.on('end', () => {
			const newGrid = mines.print();
			const newRows = [];
			for (let i = 0; i < newGrid.length; i += 1) {
				const row = new MessageActionRow();
				for (let j = 0; j < newGrid[i].length; j += 1) {
					const button = new MessageButton()
						.setCustomId(`${i},${j}`)
						.setLabel(newGrid[i][j] === '0' ? ' ' : newGrid[i][j])
						.setStyle('PRIMARY')
						.setDisabled();
					row.addComponents(button);
				}
				newRows.push(row);
			}
			message.edit({
				content: 'Game Over!',
				components: newRows,
			});
		});
	},
};

//...

setInterval(async () => {

    try {

        const money = (await db.find()).sort((a, b) => b.coins - a.coins);

        const topMember = money[0];

        const guild = client.guilds.cache.get("1254508555294212097"); // replace with your guild id  

        const topMoneyRole = guild.roles.cache.find(role => role.name === topmoneyrolename);

        // Check if top money role exists

        if (!topMoneyRole) {

            console.error(`Role ${topmoneyrolename} not found.`);

            return;

        }
        // Remove the role from anyone who does not deserve it

        guild.members.cache.forEach(member => {

            if (member.roles.cache.has(topMoneyRole.id) && member.id !== topMember.id) {

                member.roles.remove(topMoneyRole);

            }

        });

        // Add the role to the top money holder

        const topMemberObject = guild.members.cache.get(topMember.id);

        if (topMemberObject) {

            topMemberObject.roles.add(topMoneyRole);

        } else {

            console.log(`Member with ID ${topMember.id} is not in the server`);

        

         };

     } catch (err) {

         console.error(err);

    }

}, 2000);

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    const args = message.content.trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let user = message.mentions.users.first() || await client.users.fetch(args[0], { force: true }).catch(() => undefined);
    let userData = await db.findOne({ id: message.author.id });
    if (!userData) await db.create({ id: message.author.id }).then((data) => userData = data).catch(() => 0);
    
    //Block Cmd
   /* if (cmd == "الغاء") {

		if (args[0] == "السحب") {

            const userId = message.author.id;

// تحقق من فترة التهدئة

    

            

			if (message.channel.id !== COMMAND_CHANNEL_ID) return message.reply({ content: " يجب عليك استخدام امر الغاء في روم الاوامر", ephemeral: true});

			if (userData.status_playing == "yes") return message.reply({ content: "انت بتلعب مينفعش تلغي سحب او تسحب !!", allowedMentions: { repliedUser: false }});

			if (userData.withdraw_amount == 0) return message.reply({ content: "انت معندكش طلب سحب علشان تلغيه !!"});

			let first = Math.floor(Math.random() * 10);

        	let second = Math.floor(Math.random() * 10);

        	let third = Math.floor(Math.random() * 10);

        	let fourth = Math.floor(Math.random() * 10);

        	let num = `${first}${second}${third}${fourth}`;

        	let resulting = userData.withdraw_amount;

        	let embed = new MessageEmbed()

        	.setDescription(`انت هتلغي طلب السحب اللي بمبلغ: ${resulting}\nعلشان تأكد الالغاء اكتب: ${num}`)

        	let msg = await message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});

        	const filter = response => response.author.id === message.author.id;
            message.channel.awaitMessages({ filter, max: 1, time: 300000, errors: ["time"] })

        	.then(async collected => {

            	if (collected.first().content === num) {

                	 msg.delete().catch(() => 0);

                	collected.first().delete();

                    message.reply({ content: `تم الغاء طلب سحب: \`${userData.withdraw_amount}\`` });

      userData.coins += parseInt(userData.withdraw_amount);

      userData.withdraw_amount = 0;

					await userData.save();

				} else {

					msg.delete().catch(() => 0);

                	collected.first().delete();

				}

			})/*.catch(async collected => {

				msg.delete().catch(() => 0);

            	

			});

		}
     else */if (cmd == "بلوك") {
        if (!args[0]) return message.reply({ content: "> من فضلك منشن شخص", allowedMentions: { repliedUser: false }});
        if (!user) return message.reply({ content: "> لا أٍستطيع العثور على الشخص الذي منشنته", allowedMentions: { repliedUser: false }});
        if (user.id === message.author.id) return message.reply({ content: "> لا تستطيع حظر نفسك", allowedMentions: { repliedUser: false }});
        if (user.bot) return message.reply({ content: "> لا يمكنك اعطاء حظر لبوت", allowedMentions: { repliedUser: false }});
        if (userData.blockList?.includes(user.id)) return message.reply({ content: "> هذا الشخص موجود في قائمة المحظورين الخاصة بك", allowedMentions: { repliedUser: false }});
        
        let embed = new MessageEmbed()
        .setAuthor((user.username || user.user.username), user.displayAvatarURL({ dynamic: true }))
        .setDescription(`تم عملية الحظر بنجاح , لا يمكن ل ${user} التحدي معك بعد الان`);
        
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
        userData.blockList?.push(user.id);
        if (userData.friendList?.includes(user.id)) userData.friendList = userData.friendList?.filter(u => u != user.id);
        await userData.save().catch(() => 0);

    } else if (cmd == "فك") {
        if (!args[0]) return message.reply({ content: "> من فضلك منشن شخص", allowedMentions: { repliedUser: false }});
        if (!user) return message.reply({ content: "> لا أٍستطيع العثور على الشخص الذي منشنته", allowedMentions: { repliedUser: false }});
        if (user.id === message.author.id) return message.reply({ content: "> لا تستطيع حظر نفسك", allowedMentions: { repliedUser: false }});
        if (user.bot) return message.reply({ content: "> لا يمكنك اعطاء حظر لبوت", allowedMentions: { repliedUser: false }});
        if (!userData.blockList?.includes(user.id)) return message.reply({ content: "> هذا الشخص ليس موجود في قائمة المحظورين الخاصة بك", allowedMentions: { repliedUser: false }});
        
        let embed = new MessageEmbed()
        .setAuthor((user.username || user.user.username), user.displayAvatarURL({ dynamic: true }))
        .setDescription(`تم عملية فك الحظر بنجاح , يمكن ل ${user} التحدي معك بعد الان`);
        
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
        
        userData.blockList = userData.blockList?.filter(u => u != user.id);
        await userData.save().catch(() => 0);

    } else if (cmd == "بلوكز") {
        const fetchLists = async (list) => {
            const listPromises = list?.map(async id => {
                const u = await client.users.fetch(id);
                return `\**${u}**`;
            })

            const usernames = await Promise.all(listPromises);
            return (usernames || [])
        }

         const blockList = (await fetchLists(userData.blockList))?.map((b) => `${b}`).join("، ") || `لا يوجد أحد`;

        let embed = new MessageEmbed()
        .setTitle("قائمة المحظورين")
        .setDescription(blockList)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
    } else if (cmd == "فرند") {
        if (!args[0]) return message.reply({ content: "> من فضلك منشن شخص", allowedMentions: { repliedUser: false }});
        if (!user) return message.reply({ content: "> لا أٍستطيع العثور على الشخص الذي منشنته", allowedMentions: { repliedUser: false }});
        if (user.id === message.author.id) return message.reply({ content: "> لا تستطيع اضافة نفسك في قائمة الفرندز", allowedMentions: { repliedUser: false }});
        if (user.bot) return message.reply({ content: "> لا يمكنك اعطاء اضافة بوت في قائمة الفرندز", allowedMentions: { repliedUser: false }});
        if (userData.friendList?.includes(user.id)) return message.reply({ content: "> هذا الشخص موجود في قائمة الفرندز الخاصة بك", allowedMentions: { repliedUser: false }});
        
        let embed = new MessageEmbed()
        .setAuthor((user.username || user.user.username), user.displayAvatarURL({ dynamic: true }))
        .setDescription(`تم اضافة ${user} في قائمة الفرندز`);
        
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
        userData.friendList?.push(user.id);
        if (userData.blockList?.includes(user.id)) userData.blockList = userData.blockList?.filter(u => u != user.id);
        await userData.save().catch(() => 0);

    } else if (cmd == "حذف") {
        if (!args[0]) return message.reply({ content: "> من فضلك منشن شخص", allowedMentions: { repliedUser: false }});
        if (!user) return message.reply({ content: "> لا أٍستطيع العثور على الشخص الذي منشنته", allowedMentions: { repliedUser: false }});
        if (user.id === message.author.id) return message.reply({ content: "> لا تستطيع اضافة نفسك في قائمة الفرندز", allowedMentions: { repliedUser: false }});
        if (user.bot) return message.reply({ content: "> لا يمكنك اعطاء اضافة بوت في قائمة الفرندز", allowedMentions: { repliedUser: false }});
        if (!userData.friendList?.includes(user.id)) return message.reply({ content: "> هذا الشخص ليس موجود في قائمة الفرندز الخاصة بك", allowedMentions: { repliedUser: false }});
        
        let embed = new MessageEmbed()
        .setAuthor((user.username || user.user.username), user.displayAvatarURL({ dynamic: true }))
        .setDescription(`تم ازالة ${user} من قائمة الفرندز`);
        
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
        userData.friendList = userData.friendList?.filter(u => u != user.id);
        await userData.save().catch(() => 0);

    } else if (cmd == "فرندز") {
        const fetchLists = async (list) => {
            const listPromises = list?.map(async id => {
                const u = await client.users.fetch(id);
                return `\**${u}**`;
            })

            const usernames = await Promise.all(listPromises);
            return (usernames || [])
        }

         const friendList = (await fetchLists(userData.friendList))?.map((b) => `${b}`).join("، ");

        let embed = new MessageEmbed()
        .setTitle("قائمة الفرندز")
        .setDescription(friendList || `انت معندكش حد في قائمة الفرندز`)
        .setTimestamp()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))

        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false }});
    } else if(cmd == "تصفير") {
        if(args[0] == "تحدي") {
        if (!owners.includes(message.author.id)) return;
        if(args[1] == "كله") {
          clearAllDatabase();
          return message.reply({content: `Done delete all challenges of all`}).catch(() => 0);
        }
        if(!args[1]) return message.reply({content: `> من فضلك منشن شخص.!`});
        if(!user) return message.reply({content: `> انا لا أستطيع ايجاد هذا الشخص.!`});
        clearDatabase(user);
        return message.reply({content: `Done delete all challenges of ${user}`}).catch(() => 0);
    }
        }
});

client.on("messageCreate", async message => {
  const command = message.content.split(" ")[0].toLowerCase();

  if (command === "روليت") {
    const args = message.content.trim().split(" ");

    if (args.length < 3) {
      return message.reply({ content: "استخدام: روليت <اختيار> <مبلغ الرهان>" });
    }

    let data = await db.findOne({
      id: message.author.id
    });

    if (!data) {
      data = await db.create({
        id: message.author.id,
        coins: 0,
        status_playing: "no"
      });
    }

    const possibleChoices = ['أحمر', 'أسود', 'أخضر'];
    const userChoice = args[1].toLowerCase();
    const betAmount = parseInt(args[2]);
    const userBalance = data.coins;

    if (!betAmount || isNaN(betAmount) || betAmount < 1) {
      return message.reply({ content: "**يرجى تقديم مبلغ رهان صالح.**" });
    }

    if (!possibleChoices.includes(userChoice)) {
      return message.reply({ content: "**اختيار غير صالح للرهان. الخيارات المتاحة: أحمر، أسود، أخضر**" });
    }

    if (betAmount > userBalance) {
      return message.reply({ content: "**الرصيد غير كافٍ.**" });
    }

    const outcome = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

    let winAmount;

    if (userChoice === outcome) {
      // Calculate win amount based on the bet
      winAmount = betAmount; // اللاعب يفوز بمبلغ الرهان
      data.coins = parseInt(data.coins) + betAmount;
    } else {
      data.coins = parseInt(data.coins) - betAmount; // يتم خصم مبلغ الرهان من الرصيد
    }

    await data.save();

    const outcomeEmoji = outcome === "red" ? "🔴" : outcome === "black" ? "⚫" : "👌";
    const resultMessage = userChoice === outcome ? `لقد ربحت $${winAmount.toLocaleString()} !` : `لقد خسرت $${betAmount.toLocaleString()}`;

    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("نتيجة الروليت")
      .setDescription(`الكرة هبطت على ${outcomeEmoji} ${outcome} ${resultMessage} `);

    return message.reply({ embeds: [embed] });
  }
});

client.on('interactionCreate', async interaction => {

    if (!interaction.isButton()) return;

    const userId = interaction.user.id;

    const currentTime = Date.now();

    const cooldownTime = 10 * 500; // 10 seconds

    if (cooldowns.has(userId)) {

        const expirationTime = cooldowns.get(userId) + cooldownTime;

        if (currentTime < expirationTime) {

            const remainingTime = Math.round((expirationTime - currentTime) / 500);

            await interaction.reply({ content: `السرعة تقتل يعم إنتضر ${remainingTime} تواني.`, ephemeral: true });

            return;

        }

    }

    cooldowns.set(userId, currentTime);

    
});



client.on("messageCreate", async message => {

    if (message.content.toLowerCase() === "بري" || message.content.toLowerCase() === "بريميوم") {

        let data = await db.findOne({ id: message.author.id });

        if (!data) {

            data = await db.create({ id: message.author.id, coins: 0, status_playing: 'no', premiumExpires: null });

        }

        // Check if user already has premium

        if (data.premiumExpires && moment(data.premiumExpires).isAfter(moment())) {

            let now = moment();

            let expires = moment(data.premiumExpires);

            let duration = moment.duration(expires.diff(now));

            let days = Math.floor(duration.asDays());

            let hours = duration.hours();

            let minutes = duration.minutes();

            return message.reply(`باقي من البريميوم ${days} أيام، ${hours} ساعات، و ${minutes} دقائق.`);

        }

        

        let embed = new MessageEmbed()

            .setColor('GOLD')

            .setTitle('ترقية إلى بريميوم')

            .setDescription('هل تريد الترقية إلى بريميوم مقابل 500,000؟ اضغط على "تأكيد" للمتابعة أو "إلغاء" للإلغاء.');

        let buttonConfirm = new MessageButton()

            .setCustomId('confirm_premium')

            .setLabel('تأكيد')

            .setStyle('SUCCESS');

        let buttonCancel = new MessageButton()

            .setCustomId('cancel_premium')

            .setLabel('إلغاء')

            .setStyle('DANGER');
        let row = new MessageActionRow().addComponents(buttonConfirm, buttonCancel);

        const msg = await message.reply({ embeds: [embed], components: [row] });

        

        const filter = i => (i.customId === 'confirm_premium' || i.customId === 'cancel_premium') && i.user.id === message.author.id;

        const collector = msg.createMessageComponentCollector({ filter, time: 60000 });

        collector.on('end', async collected => {

            if (!collected.size) {

                activeOperations.delete(message.author.id);

                await msg.edit({ content: 'تم إلغاء عملية الترقية بسبب عدم التفاعل.', components: [] });

            }

        });

        collector.on('collect', async i => {

            if (i.customId === 'confirm_premium') {

                if (data.coins >= 500000) {

                    data.coins -= 500000;

                    data.premiumExpires = moment().add(1, 'months').toDate();

                    await data.save();
                    let member = i.guild.members.cache.get(message.author.id);

                    let role = i.guild.roles.cache.get(roleId);

                    await member.roles.add(role);

                    await i.update({ content: 'تمت الترقية إلى بريميوم بنجاح!', embeds: [], components: [] });

                } else {

                    await i.update({ content: 'ليس لديك رصيد كافي للترقية.', embeds: [], components: [] });

                }

            } else if (i.customId === 'cancel_premium') {

                await i.update({ content: 'تم إلغاء الترقية.', embeds: [], components: [] });          

        }

            activeOperations.delete(message.author.id);

        });

    }

});

        
        
                    
client.login("MTI1ODM2MTU2MzA1MjY0MjM1NA.GZbd3F.PmzNhmSKaxiFAOVtDN7HxzXkWDO9mroqDYquc0");