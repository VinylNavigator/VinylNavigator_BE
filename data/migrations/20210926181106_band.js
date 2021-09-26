exports.up = function(knex) {
    return knex.schema.createTable('band', table => {
        table.increments()
        table.string('name')
        table.string('members')
        table.string('years_active')
        table.string('content_1')
        table.string('content_2')
        table.string('content_3')
        table.string('band_image')
        table.string('band_image_2')
        table.string('published')
        table.string('album_youtube')
        table.string('genre')
        table.string('keyword')
        table.string('similar_bands')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('band')
  };