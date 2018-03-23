const { Router } = require('express')
const router = Router()

const Match = require('../models/match')
const Kill = require('../models/kill')

router.post('/', (req, res) => {
    Match.create({}, (err, match) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot create match")
        }
        
        return res.status(200).json("Match created")
    })
})

router.get('/', (req, res) => {
    Match.find({}, (err, matches) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot find matches")
        }
        
        let results = {}
        matches.forEach((match) => {
            results[match._id] = match
        })
        
        res.status(200).send(results)
    })
})

router.get('/:match_id', (req, res) => {
    let matchID = req.params.match_id
    Match.findOne({ '_id': matchID }, (err, match) => {
        if (err) {
            console.error(err)
            return res.status(500).json(`Cannot find match ${matchID}`)
        }
        
        let results = {}
        matches.forEach((match) => {
            results[match._id] = match
        })
        
        res.status(200).send(results)
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
            
            let results = {}
            kills.forEach((kill) => {
                results[kill._id] = kill
            })
            
            res.status(200).send(results)
            
        })
    })
})

module.exports = router

