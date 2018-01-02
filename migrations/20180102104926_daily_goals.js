
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('daily_goals', (table) => {
      table.increments()
      table.string('goal').notNullable()
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('daily_goals')
  ])
};
