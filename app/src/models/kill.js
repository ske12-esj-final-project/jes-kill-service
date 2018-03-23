const mongoose = require('mongoose')

const KillSchema = new mongoose.Schema({
    matchID: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    playerID: { type: String, required: true },
    victimID: { type: String, required: true },
    victimPos: { type: String, required: true },
    weaponUsed: { type: String, required: true },
})

mongoose.model('Kill', KillSchema)

module.exports = mongoose.model('Kill')