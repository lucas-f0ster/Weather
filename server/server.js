const express = require('express')
const path = require('path')

const server = express()
const cities = require('./routes/cities')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cities', cities)

module.exports = server
