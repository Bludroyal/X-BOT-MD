const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "enter your session",
    CAPTION: process.env.CAPTION || "> ᴘᴏᴡᴇʀᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/rzPIk3t.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "ʜɪ ᴛʜᴇʀᴇ, ɪ'ᴍ ᴀᴄᴛɪᴠᴇ ʀɪɢʜᴛ ɴᴏᴡ, ᴀɴʏ ɴᴇᴡs?",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "⁠➜x-ʙᴏᴛ-ᴍᴅ",
    STATUS_REPLY: process.env.STATUS_REPLY || "`sᴛᴀᴛᴜs sᴜᴄᴄᴇssғᴜʟʟʏ ᴠɪᴇᴡᴇᴅ ʙʏ x-ʙᴏᴛ-ᴍᴅ`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};