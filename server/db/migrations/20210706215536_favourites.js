exports.up = (knex) => {
  return knex.schema.createTable('favourites', (table) => {
    table.increments('id').primary()
    table.integer('users_id')
    table.integer('cities_internalid')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('favourites')
}
