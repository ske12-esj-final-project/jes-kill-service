const { Router } = require('express')
const match = require('./controllers/match')
const kill = require('./controllers/kill')

const router = Router()
router.use('/match', match)
router.use('/kill', kill)

module.exports = router