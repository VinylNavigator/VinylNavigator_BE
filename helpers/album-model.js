const db = require('../data/dataConfig.js')

module.exports = {
    get, 
    add,
    getById,
    getByUserId
}

function get(){
    return db('album')
    .select([
        'album.id', 
        'album.album_name', 
        'album.album_year',
        'album.album_members',
        'album.album_tracks',
        'album.buzz_track',
        'album.album_content',
        'album.album_image',
        'album.album_link',
        'album.album_youtube',
        'album.genre',
        'album.similar_albums',
        'band.band_name AS band.band_name',
    ])
    .join('band', 'band.id', 'album.band_id')
}

function add(user){
    return db('album')
      .insert(user, 'id')
      .then(([id]) => getById(id))
}

function getById(id){
    return get().where({'album.id': id}).first()
}

function getByUserId(id){
    return get().where({'album.album_id': id })
}
