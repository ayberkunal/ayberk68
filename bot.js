const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    //client.user.setActivity("Snne")

    // PLAYING, STREAMING, LISTENING, WATCHING
    //client.user.setActivity("SES", {type: "LISTENING"})
//	client.user.setActivity("7/24", { type: "STREAMING", url: "https://www.twitch.tv/..." })

 //  client.user.setActivity("online");
  var oyun = [
        "💪│∞ Ayberk ∞│💪",  
        "👑│∞ UNAL ∞│👑",
//       "🌙│∞ Developer ∞│🌙",
 //       "🌺│∞ !1v1 ∞│🌺",
//        "💥│∞ !sayaç <sayı> ∞│💥",
 //       "📌│∞ !sunucu-kur ∞│📌"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/...");
        }, 2 * 2500);

})





client.login(process.env.BOT_TOKEN);
