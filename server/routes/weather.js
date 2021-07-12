const express = require('express')
const request = require('superagent')
const router = express.Router()

const baseUrlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&'
const baseUrlCurrent = 'api.openweathermap.org/data/2.5/units=metric&weather?id='
const apiKey = process.env.API_KEY

router.get('/:long/:lat', (req, res) => {
  return request.get(`${baseUrlOneCall}lat=${req.params.lat}&lon=${req.params.long}&appid=${apiKey}`)
    .then(resp => res.json(JSON.parse(resp.text)))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  return request(`${baseUrlCurrent}${req.params.id}&appid=${apiKey}`)
    .then(resp => res.body)
    .catch(err => console.log(err))
})

module.exports = router
