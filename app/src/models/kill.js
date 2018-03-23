const mongoose = require('mongoose')

const KillSchema = new mongoose.Schema({
    matchID: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    playerID: String,
    victimID: String,
    victimPos: Object,
    weaponUsed: String,
})

mongoose.model('Kill', KillSchema)

module.exports = mongoose.model('Kill')