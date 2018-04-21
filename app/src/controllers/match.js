const { Router } = require('express')
const router = Router()

const Match = require('../models/match')
const Kill = require('../models/kill')

router.post('/', (req, res) => {
    Match.create({
        players: req.body.players
    }, (err, match) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot create match")
        }

        return res.status(200).send({ matchID: match._id })
    })
})

router.get('/', (req, res) => {
    Match.find({}, (err, matches) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot find matches")
        }

        res.status(200).send(matches)
    })
})

router.get('/:match_id', (req, res) => {
    let matchID = req.params.match_id
    Match.findOne({ '_id': matchID }, (err, match) => {
        if (err) {
            console.error(err)
            return res.status(500).json(`Cannot find match ${matchID}`)
        }

        res.status(200).send(match)
    })
})

router.put('/:match_id', (req, res) => {
    let matchID = req.params.match_id
    Match.findByIdAndUpdate(matchID, {
        duration: req.body.duration || 0,
        winner: req.body.winner || null
    }, { new: true })
        .then(match => {
            if (!match) {
                return res.status(404).send({
                    message: "match not found " + matchID
                });
            }
            res.send(match);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "match not found " + matchID
                });
            }
            return res.status(500).send({
                message: `Error updating ${match}`
            })
        })
})

router.get('/:match_id/kills', (req, res) => {
    let matchID = req.params.match_id
    Match.findOne({ '_id': matchID }, (err, match) => {
        if (err) {
            console.error(err)
            return res.status(500).json(`Cannot find match ${matchID}`)
        }

        Kill.find({ 'matchID': matchID }, (err, kills) => {
            if (err) {
                console.error(err)
                return res.status(500).json(`Cannot find kills in ${matchID}`)
            }
            res.status(200).send(kills)

        })
    })
})

module.exports = router

