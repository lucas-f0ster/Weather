const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const getCities = (db = connection) => {
  return db('cities').select().orderBy('name', 'asc')
}

module.exports = {
  getCities
}
