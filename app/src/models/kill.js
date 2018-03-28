const mongoose = require('mongoose')

const KillSchema = new mongoose.Schema({
    matchID: { type: String, required: true },
    playerID: { type: String, required: true },
    victimID: { type: String, required: true },
    victimPos: { type: Object, required: true },
    weaponUsed: { type: String, required: true },
})

mongoose.model('Kill', KillSchema)

module.exports = mongoose.model('Kill')