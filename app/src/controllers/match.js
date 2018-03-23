const { Router } = require('express')
const router = Router()

const Match = require('../models/match')

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

