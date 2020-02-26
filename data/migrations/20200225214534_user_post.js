
exports.up = function(knex) {
  return knex.schema.createTable('user_post', table => {
      table.increments()
      table.integer('user_id')
            .unsigned()
            .references('id')
            .inTable('user')
            .onUpdate('CASCADE')
            .onDelete("CASCADE")

      table.string('title')
      table.string('image')
      table.string('content')
      table.string('youtube')
      table.string('link')
      table.string('genre')
      table.string('likes')
      table.string('date')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_post')
};
