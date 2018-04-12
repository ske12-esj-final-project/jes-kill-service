const { Router } = require('express')
const router = Router()

const Kill = require('../models/kill')

router.post('/', (req, res) => {
    Kill.create({
        matchID: req.body.matchID,
        playerID: req.body.playerID,
        victimID: req.body.victimID,
        victimPos: req.body.victimPos,
        weaponUsed: req.body.weaponUsed
        
    }, (err, kill) => {
        if(err) {
            console.error(err)
            return res.status(500).json("Cannot create killfeed")
        }
        
        return res.status(200).json("Killfeed created")
    })
})

router.get('/', (req, res) => {
    Kill.find({}, (err, kills) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot find killfeeds")
        }
        res.status(200).send(kills)
    })
})

module.exports = router