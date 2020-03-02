
exports.up = function(knex) {
  return knex.schema.createTable('post_album', table => {
      table.increments()
      table.string('title')
      table.string('content')
      table.string('date')
      table.string('image')
      table.string('image2')
      table.string('image3')
      table.string('link')
      table.string('youtube')
      table.string('keyword')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post_album')
};
