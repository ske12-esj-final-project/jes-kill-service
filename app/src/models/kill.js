const mongoose = require('mongoose')

const KillSchema = new mongoose.Schema({
    playerID: String,
    victimID: String,
    victimPos: Object,
    weaponUsed: String,
})

mongoose.model('Kill', KillSchema)

module.exports = mongoose.model('Kill')