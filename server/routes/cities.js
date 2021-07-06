const express = require('express')

const db = require('../db/cities')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getCities()
    .then(cities => res.json(cities))
    .catch(err => console.log(err))
})
