
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get bot dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ to x-ʙᴏᴛ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴏʀ ᴍᴇᴋ-ᴅ1*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴅᴀᴠɪᴅ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ᴍᴇᴋ-ᴅ1*
*│  ◦* *ᴀɢᴇ➠ /./ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ɪᴀɢᴏs*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • X-BOT-MD- TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ᴅᴀᴠɪᴅx*
*│  ◦* *▢➠ᴍᴇᴋ ᴅ1*
*│  ◦* *▢➠coming-soon*
*│  ◦* *▢➠coming-soon*
*│  ◦* *▢➠coming-soon*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
