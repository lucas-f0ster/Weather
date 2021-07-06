exports.up = (knex) => {
  return knex.schema.createTable('cities', (table) => {
    table.increments('internalid').primary()
    table.string('name')
    table.string('country')
    table.decimal('long', null)
    table.decimal('lat', null)
    table.boolean('fave')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('cities')
}
