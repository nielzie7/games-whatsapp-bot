let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082189387018]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [082189387018]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
