const { Router } = require('express')
const match = require('./controllers/match')
const kill = require('./controllers/kill')

const router = Router()
router.use('/matches', match)
router.use('/kills', kill)

module.exports = router