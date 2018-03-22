const { Router } = require('express')
const router = Router()

const Kill = require('../models/kill')

router.post('/kill', (req, res) => {
    console.log('POST /kill')

    Kill.create({
        playerID: req.body.playerID,
        victimID: req.body.victimID,
        victimPos: JSON.parse(req.body.victimPos),
        weaponUsed: req.body.weaponUsed

    }, (err, kill) => {
        if(err) {
            console.error(err)
            return res.status(500).json("Cannot create killfeed")
        }
        
        console.log("Killfeed created")
    })
})

router.get('/', (req, res) => {
    Kill.Find({}, (err, kills) => {
        if (err) {
            console.error(err)
            return res.status(500).json("Cannot find killfeeds")
        }

        let results = kills.map(kill => ({
            id: kill.id,
            playerID: kill.playerID,
            victimID: kill.victimID,
            victimPos: JSON.stringify(kill.victimPos),
            weaponUsed: kill.weaponUsed,
        }))

        res.status(200).send(results)
    })
})

module.exports = router