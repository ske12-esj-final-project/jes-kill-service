require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const path = require('path')
const swaggerDocument = YAML.load(path.join(__dirname, '/swagger.yaml'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next()
})

const db = require('./db')
const port = process.env.PORT || 8081
const VERSION = process.env.VERSION || '1.1'

app.use(cors())
app.use(bodyParser.json())
app.use(`/v${VERSION}`, routes)

app.get('/', (req, res) => {
    res.send(`Kill service is running... VERSION ${VERSION}`)
})

let server = app.listen(port, () => {
    let port = server.address().port
    console.log(`jes-kill-service version : ${VERSION}`)
    console.log('running at http://' + 'localhost' + ':' + port)
})

module.exports = server
