const express = require('express')

const db = require('../db/cities')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getCities()
    .then(cities => res.json(cities))
    .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {
  db.getCity(req.params.id)
    .then(city => res.json(city))
    .catch(err => console.log(err))
})
