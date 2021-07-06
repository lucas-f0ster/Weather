/* eslint-disable promise/always-return */

exports.seed = function (knex) {
  const data = require('../nzCities.json')
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      // Inserts seed entries
      const prepData = []
      data.map(e => {
        prepData.push({
          internalid: e.id,
          name: e.name,
          country: e.country,
          long: e.coord.lon,
          lat: e.coord.lat,
          fave: false
        })
      })
      return knex('cities').insert(prepData)
    })
    .catch(err => console.log(err))
}
