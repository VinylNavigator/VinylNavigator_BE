exports.up = function(knex) {
    return knex.schema.createTable('album', table => {
        table.increments()
        table.string('band_name')
        table.string('album_name')
        table.string('release_year')
        table.string('band_members')
        table.string('album_tracks')
        table.string('buzz_track')
        table.text('content_1')
        table.text('content_2')
        table.text('content_3')
        table.string('album_image')
        table.text('album_image_2')
        table.string('link')
        table.string('album_youtube')
        table.string('album_genre')
        table.string('keyword')
        table.string('similar')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('album')
  };