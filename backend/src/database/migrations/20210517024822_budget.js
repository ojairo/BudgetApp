
exports.up = function(knex){
  return knex.schema.createTable('budget', function(table){
    table.string('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('uf').notNullable();
    table.string('phone').notNullable();
    table.string('typeService').notNullable();
    table.double('footage').notNullable();
    table.double('value').notNullable();
    table.datetime('date').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('budget')
};


