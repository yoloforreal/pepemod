const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '.pepe') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('is good.');
    }
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Why are you even looking at this.')
	.setURL('http://endless.horse/')
	.setAuthor('Pepeomod', 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg', 'http://endless.horse/')
	.setDescription('Pepe is very good and stuff. We all love pepe, it is the best thing ever invented after microwave popcorn.')
	.setThumbnail('https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale')
	.addFields(
		{ name: 'Pepe is really good.', value: 'No, really.' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Wanna support him?', value: 'Easy.', inline: true },
		{ name: 'Make your pfp a pepe image!!', value: 'And, maybe spam pepe memes to keep him alive?', inline: true },
	)
	.addField('And to be the ultimate supporter, DONATE!', 'Nah, jk no one does donate anyways.', true)
	.setImage('https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Feels_good_man.jpg/200px-Feels_good_man.jpg')
	.setTimestamp()
	.setFooter('Hey, my mom likes pepe.', 'https://static01.nyt.com/images/2016/09/28/us/17xp-pepethefrog_web1/28xp-pepefrog-articleLarge.jpg?quality=75&auto=webp&disable=upscale');

    if (message.content === '.secret') [
        message.channel.send(exampleEmbed)
	]


	if (message.content === '.pingme') {
		message.reply('Get pinged.')
	}
	if (message.content === '.checkpermkick') {

		const {member, mentions} = message

		if (member.hasPermission('KICK_MEMBERS')) {
			message.channel.send('Yahoo!! You can kick these kids out!');

		} else {
			message.channel.send("Bruh, you can't kick but I bet you wish you could 😆")
		}
	}

	if (message.content === '.checkpermkickban') {
		const {member, mentions} = message
		if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
			message.channel.send('Yas! You can kick AND ban -- I bet you feel nice now...')

		} else {
			if (member.hasPermission('KICK_MEMBERS')) {
				message.channel.send("Yahoo!! You can kick, but you can't ban -- oof");
	
			} else {
				if (member.hasPermission('BAN_MEMBERS')) {
					message.channel.send("tf -- you can't kick members, but you can ban members...");
		
				} else {
					message.channel.send("🙄 you can't even bad OR kick -- what are you thinking...")
				}
			}
		}
	}

	if (message.content === '.ban') {
		const {member, mentions} = message

		if (
			member.hasPermission('ADMINISTRATOR') ||
			member.hasPermission('BAN_MEMBERS')
		) {
			const target = mentions.users.first()
			if (target) {
				const targetMember = message.guild.members.cache.get(target.id)
				targetMember.ban()
			} else {
				message.reply('Please specify someone to ban.')
			}
		}
	}
});

client.login('NzY1NjYyNjU2OTc5MDA5NTk3.X4YE6g.kMPEGkEbX3zClMeXKQrFyp-26C8');