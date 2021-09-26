const db = require('../data/dataConfig')
const UserPost = require('./album-model')

module.exports = {
    add,
    find,
    findBy,
    findByUsername,
    findById,
}

function find(){
    return db('band').select('id', 'band_name')
}

function findBy(user){
    return db('band').where(user)
}

function findByUsername(username){
    return findBy({username}).first()
}

function add(user){
    return db('band')
      .insert(user, 'id')
      .then(([id]) => findById(id))
}

function findById(id){
    return db('band').where({id}).first()
    .then(user => {
        return UserPost.getByUserId(id)
          .then(userPost => {
              user.userPost = userPost
              return user
          })
    })
}