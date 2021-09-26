exports.up = function(knex) {
    return knex.schema.createTable('album', table => {
        table.increments()
        table.uuid('band_id')
              .unsigned()
              .references('id')
              .inTable('band')
              .onUpdate('CASCADE')
              .onDelete("CASCADE")

        table.string('album_name')
        table.string('album_year')
        table.string('album_members')
        table.string('album_tracks')
        table.string('buzz_track')
        table.text('album_content')
        table.string('album_image')
        table.string('link')
        table.string('album_youtube')
        table.string('genre')
        table.string('similar_albums')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('album')
  };