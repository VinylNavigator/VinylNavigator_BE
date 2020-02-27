const db = require('../data/dataConfig.js')

module.exports = {
    get, 
    add,
    getById,
    getByUserId
}

function get(){
    return db('user_post')
    .select([
        'user_post.id', 
        'user_post.title', 
        'user_post.link',
        'user_post.youtube',
        'user_post.image',
        'user_post.content',
        'user_post.genre',
        'user_post.likes',
        'user_post.date',
        'user.username AS user.username',
        'user.email AS user.email'
    ])
    .join('user', 'user.id', 'user_post.user_id')
}

function add(user){
    return db('user_post')
      .insert(user, 'id')
      .then(([id]) => getById(id))
}

function getById(id){
    return get().where({'user_post.id': id}).first()
}

function getByUserId(id){
    return get().where({'user_post.user_id': id })
}
