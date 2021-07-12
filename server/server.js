const express = require('express')
const path = require('path')
require('dotenv').config()

const server = express()
const cities = require('./routes/cities')
const weather = require('./routes/weather')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cities', cities)
server.use('/api/v1/weather', weather)

module.exports = server
