const mongoose = require('mongoose')

const KillSchema = new mongoose.Schema({
    matchID: String,
    playerID: String,
    victimID: String,
    victimPos: Object,
    weaponUsed: String,
})

mongoose.model('Kill', KillSchema)

module.exports = mongoose.model('Kill')