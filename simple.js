login as: root
root@45.118.132.30's password:
Access denied
root@45.118.132.30's password:
Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.15.0-60-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Sun Apr  9 07:44:53 PM UTC 2023

  System load:           0.0
  Usage of /:            6.6% of 156.92GB
  Memory usage:          6%
  Swap usage:            11%
  Processes:             127
  Users logged in:       0
  IPv4 address for eth0: 45.118.132.30
  IPv6 address for eth0: 2400:8901::f03c:93ff:fef3:2733


 * Introducing Expanded Security Maintenance for Applications.
   Receive updates to over 25,000 software packages with your
   Ubuntu Pro subscription. Free for personal use.

     https://ubuntu.com/pro

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

16 additional security updates can be applied with ESM Apps.
Learn more about enabling ESM Apps service at https://ubuntu.com/esm


*** System restart required ***
Last login: Sun Apr  9 17:59:25 2023 from 140.213.178.144
root@localhost:~# ls
biznet  sazumiviki
root@localhost:~# cd sazumiviki
root@localhost:~/sazumiviki# ls
ayaka
root@localhost:~/sazumiviki# cd ayaka
root@localhost:~/sazumiviki/ayaka# ls
app.json            index.js    node_modules       replit.nix  thumbnail.jpg
config.js           install.sh  package.json       run.js      tmp
database.json       lib         package-lock.json  server.js   tmp.zip
docker-compose.yml  LICENSE     plugins            sessions    views
Dockerfile          main.js     Procfile           speed.py    yarn.lock
handler.js          mp3         README.md          src
root@localhost:~/sazumiviki/ayaka# cd lin
-bash: cd: lin: No such file or directory
root@localhost:~/sazumiviki/ayaka# ld
ld: no input files
root@localhost:~/sazumiviki/ayaka# cd lin
-bash: cd: lin: No such file or directory
root@localhost:~/sazumiviki/ayaka# cd lib
root@localhost:~/sazumiviki/ayaka/lib# ls
cloudDBAdapter.js  kbbi.js       salat.js              uploader.js
cluster.js         levelling.js  scrape.js             uploadFile.js
color.js           logs.js       scraper_kodepos.js    uploadImage.js
converter.js       lowdb         scraper_pinterest.js  wallq.js
database.js        mongoDB.js    scrape_semoji.js      webp2mp4.js
exif.js            ppcouple.js   simple.js             webp.js
exif.json          print.js      sticker.js            welcome.js
gdrive.js          quotes.js     store.js              y2mate.js
jagokata.js        randomm.js    tictactoe.js
root@localhost:~/sazumiviki/ayaka/lib# nano simple.js
  GNU nano 6.2                                                                                                      simple.js *
   * @returns {string}
   */
  Number.prototype.toTimeString = function toTimeString() {
    // const milliseconds = this % 1000
    const seconds = Math.floor((this / 1000) % 60)
    const minutes = Math.floor((this / (60 * 1000)) % 60)
    const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
    const days = Math.floor((this / (24 * 60 * 60 * 1000)))
    return (
      (days ? `${days} day(s) ` : '') +
      (hours ? `${hours} hour(s) ` : '') +
      (minutes ? `${minutes} minute(s) ` : '') +
      (seconds ? `${seconds} second(s)` : '')
    ).trim()
  }
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom
}

function isNumber() {
  const int = parseInt(this)
  return typeof int === 'number' && !isNaN(int)
}

function getRandom() {
  if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
  return Math.floor(Math.random() * this)
}

function rand(isi) {
     return isi[Math.floor(Math.random() * isi.length)]
}
exports.makeWASocket = (connectionOptions, options = {}) => {
    let conn = (global.opts['legacy'] ? makeWALegacySocket : makeWASocket)(connectionOptions)

    // conn.ws.on('CB:stream:error', (stream) => {
    //     const { code } = stream || {}
    //     if (code == '401') conn.ev.emit('connection.update', {
    //         connection: 'logged Out',
    //         lastDisconnect: {
    //             error: {
    //                 output: {

    generateWAMessageFromContent,
    WAMessageStubType,
    WA_DEFAULT_EPHEMERAL,
} = require('@adiwajshing/baileys')
const { toAudio, toPTT, toVideo } = require('./converter')
const chalk = require('chalk')
const {
    default: makeWASocket,
    makeWALegacySocket,
    extractMessageContent,
    makeInMemoryStore,
    proto,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    getBinaryNodeChild,
    jidDecode,
    areJidsSameUser,
    generateForwardMessageContent,
