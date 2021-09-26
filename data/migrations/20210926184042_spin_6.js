exports.up = function(knex) {
    return knex.schema.createTable('spin_6', table => {
        table.increments()
        table.string('theme')
        table.string('spin_6_youtube')

        table.string('band_1_name')
        table.string('band_1_song')
        table.string('band_1_image')
        table.string('band_1_link')

        table.string('band_2_name')
        table.string('band_2_song')
        table.string('band_2_image')
        table.string('band_2_link')

        table.string('band_3_name')
        table.string('band_3_song')
        table.string('band_3_image')
        table.string('band_3_link')

        table.string('band_4_name')
        table.string('band_4_song')
        table.string('band_4_image')
        table.string('band_4_link')

        table.string('band_5_name')
        table.string('band_5_song')
        table.string('band_5_image')
        table.string('band_5_link')

        table.string('band_6_name')
        table.string('band_6_song')
        table.string('band_6_image')
        table.string('band_6_link')

        table.string('publish_date')

    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('spin_6')
  };
