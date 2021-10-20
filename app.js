const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(routes)

port = 5531
host = "http://localhost:"

app.listen(port, () => {
    console.log("Express started at: "+host+port)
})
