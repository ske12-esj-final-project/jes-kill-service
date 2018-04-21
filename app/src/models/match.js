const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    dateCreated: { type: Date, default: Date.now },
    players: [{ type: String }],
    duration: { type: Number, default: 0 },
    winner: { type: String, default: null }
})

mongoose.model('Match', MatchSchema)
module.exports = mongoose.model('Match')

