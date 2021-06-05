
exports.up = function(knex) {
  return knex.schema.createTable('profile', function(table){
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('user').notNullable()
    table.string('pass').notNullable()
    table.string('phone').notNullable()
    table.string('email').notNullable()
    table.string('address').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profile')
};
