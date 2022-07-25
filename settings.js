const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6283816171576','6283816171576','6283816171576']
global.premium = ['6283816171576','6283816171576']
global.rkyt = ['6283816171576','6283816171576']
global.packname = ''
global.author = 'Wa : 0838-1617-1576\nYT : zhal69\nIG : ZhaaLL\nGH : zhal122\nTT : ZhaaLL'
global.sessionName = 'session'
global.namabotnya = 'ZhaaLLBOT'
global.namaownernya = 'ZhaaLL'
global.fake = namabotnya
global.autoread = true
global.replyType = "web"
global.dapkey = 'Kirbotz123'
global.lolkey = 'Atakbotz'
global.zenzkey = 'sanzychan01'
global.wame = 'https://wa.me/6283816171576'
global.gcatakbotz = 'https://chat.whatsapp.com/EfnVktu6UNV1bbXMU2dzP1'
global.ownerNumber = ["6283816171576@s.whatsapp.net","62877213178707@s.whatsapp.net"]
global.email = 'zhal@gmail.com'
global.yt = 'https://youtube.com/channel/UCT76Agxm4MbefBoywjDRA'
global.webatak = 'blm buat ngab'
global.githubatak = 'https://github.com/Zhal122'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.antitags = true
global.autobio = true
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '*TUNGGU SEBENTAR*⏳', 
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Kamu Bukan User Premium Mau Beli Premiun Klik Button Di Bawah Ini',
    wrongFormat: 'Format salah, coba liat lagi di menu',
}


global.limitawal = {
    premium: "Infinity",
    free: 40
}


global.thumb = fs.readFileSync('./Image/atakbot.jpg')
global.thumbdm = fs.readFileSync('./Image/diamond.jpg')
global.thumbrpg = fs.readFileSync('./Image/atakbotrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/fuck.webp')
global.sticknya = fs.readFileSync('./Atak/JANGANDIUBAH/wait.webp') 

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
