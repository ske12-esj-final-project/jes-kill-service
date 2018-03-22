const { Router } = require('express')
const kill = require('./controllers/kill')

const router = Router()
router.use('/kills', kill)

module.exports = router