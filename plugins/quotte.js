const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "quote",
    desc: "Get a random inspiring quote.",
    category: "fun",
    react: "💬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const response = await axios.get('https://favqs.com/api/qotd');
        const quote = response.data.quote;
        const message = `
💬 "${quote.body}"
- ${quote.author}
*QUOTES BY X-BOT MD*
        `;
        return reply(message);
    } catch (e) {
        console.error("Error fetching quote:", e);
        reply("¢συℓ∂ ησт ƒєт¢н α qυσтє. ρℓєαѕє тяу αgαιη ℓαтєя.");
    }
});
