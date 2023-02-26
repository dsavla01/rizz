
const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);
const prefix = "!";

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});


client.on("ready", () => 
{
    console.log("Bot is online!");

    client.user.setActivity('meow', {type: "WATCHING"});

})


client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot)
    return;
    const args = message.content.slice(prefix.length).split(/ +/);
    // const command = args.shift().toLowerCase();// message array 
    const cmd = args.shift().toLowerCase();// message array 

    //commandz

    if (cmd === `rizz`) {
        const rizzy = [
          'I want you to pay close attention to the first three words of this sentence. ',
          'Are you hugging a mirror, cause I can see myself in your arms',
          'If I could rearrange the alphabet, I would put u and I together',
          'Do you like my shirt? Its made out of boyfriend material',
          'Are you French? Cause ma-damn, you are fine.',
          'Is your name Google? Cause you are exactly what I’ve been searching for',
          'I would love to be the content of your love songs.',
          'Are you caffeine? My heart is suddenly racing.',
          'I love being single, but after seeing you I might rethink that.',
          'Hey! (w/rizz) B)',
          'I seem to have lost my number… can I have yours?',
          'Cupid works in mysterious ways… Here I am.',
          'My parents told me to follow my dreams, so can I have your Instagram?',
          'Do you have a map? Cause I get lost in your eyes',
          'Do you believe in love at first sight, or should I walk past?',
          'Let me rizz you up into marriage. I offer marriage. You will not die alone',
          'Do you know CPR? Because you took my breath away.',
          'Are you a parking ticket? You got “fine" written all over you.',
          'Do you like “knock-knock” jokes? Because you just knocked me off my feet.',
          'Without any pen or paper, you still draw my attention',
          'Is your hand heavy? Because I can hold it for you',
          'Your mom must be mighty fine since you share the same genes'
        ];
    
        const randomIndex = Math.floor(Math.random() * rizzy.length);
        const randomJoke = rizzy[randomIndex];
    
        message.channel.send(randomJoke);
    }
})

client.login("ur mom");





















