const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    dateCreated: { type: Date, default: Date.now },
    duration: { type: Number, default: 0 },
    numRoundFire: { type: Number, default: 0 }
})

mongoose.model('Match', MatchSchema)
module.exports = mongoose.model('Match')

