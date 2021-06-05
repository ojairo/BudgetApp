
exports.up = function(knex) {
  return knex.schema.createTable('services', function(table){
    table.string('id').primary()
    table.date('date').notNullable()
    table.integer('helper').notNullable()

    table.integer('idBudget').notNullable()
    table.foreign('idBudget').references('id').inTable('budget')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('services')
};
