module.exports = {
    config: {
        name: "😄",
        version: "1.0",
        author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ",
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
        if (event.body && event.body.toLowerCase() == "😄") return message.reply("Contente que tu soit heureux, mais ne rit pas avec moi c'est pas comme si on etais pote😐😶");
    
}
