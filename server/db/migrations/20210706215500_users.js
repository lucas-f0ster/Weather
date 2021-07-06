exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('hash')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
