require("./lib/module.js")

// ===== !! Setting Bot & Owner !! ===== \\
global.owner = "243975074413"
global.BotName = "Killua Modo" 
global.OwnerName = "Killua Modo"
global.packname = "Create By"
global.author = "Cabrino Modo"

// ===== !! Setting Url !! ===== \\
global.thumbUrl = "https://files.catbox.moe/m0e5df.jpg" //buat sendiri di web tu
global.LinkCh = "https://whatsapp.com/channel/0029VayrkbSAO7RNZKTCHK2U"
global.IDch = "120363334353222571@newsletter"


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})