
exports.up = function(knex) {
  return knex.schema.createTable('post_album', table => {
      table.increments()
      table.string('band')
      table.string('album')
      table.string('year')
      table.string('members')
      table.string('tracks')
      table.string('buzz_track')
      table.string('content')
      table.string('album_image')
      table.string('band_image')
      table.string('link')
      table.string('youtube')
      table.string('genre')
      table.string('keyword')
      table.string('similar')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('post_album')
};
