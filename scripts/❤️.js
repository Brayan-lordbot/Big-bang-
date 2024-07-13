module.exports = {
    config: {
        name: "❤️",
        version: "1.0",
        author: "ʬɸʬ Lørd Braÿañ ʬɸʬ",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "❤️") return message.reply("𝑂ℎℎℎ 😊 merci chéri !? 𝐶'𝑒𝑠𝑡 𝑔𝑒𝑛𝑡𝑖𝑙 𝑑𝑒 𝑡𝑎 𝑝𝑎𝑟𝑡😇, mon amour Mesumbe Halle alia Braÿañ");
    }
}
