
exports.up = function(knex) {
    return knex.schema.createTable('band', table => {
        table.increments()
        table.string('band_name').unique()
        table.string('band_members')
        table.text('band_bio')
        table.string('years_active')
        table.string('band_image')
        table.string('band_image_2')
        table.string('band_link')
        table.string('youtube')
        table.string('youtube_2')
        table.string('genre')
        table.string('similar_bands')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('band')
};
