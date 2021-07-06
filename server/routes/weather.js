const express = require('express')
const request = require('superagent')
const router = express.Router()

require('dotenv').config()

const baseUrlOneCall = 'https://api.openweathermap.org/data/2.5/onecall'
const baseUrlCurrent = 'api.openweathermap.org/data/2.5/weather?id='
const apiKey = process.env.API_KEY

router.get('/:long/:lat', (req, res) => {
  return request(`${baseUrlOneCall}?lat=${req.params.lat}&long=${req.params.long}&appid=${apiKey}`)
    .then(res => res.json(res))
})

router.get('/:id', (req, res) => {
  return request(`${baseUrlCurrent}${req.params.id}&appid=${apiKey}`)
    .then(res => res.json)
})

module.exports = router
