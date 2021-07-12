const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const getCities = (db = connection) => {
  return db('cities').select().orderBy('name', 'asc')
}

const getCity = (id, db = connection) => {
  return db('cities').select().where('internalid', id).first()
}

module.exports = {
  getCities,
  getCity
}
