const router = require('express').Router()
const album = require('../helpers/user_post-model')
const db = require('../data/dataConfig')


router.get('/', (req, res) => {
    album.get().then(response => {
        res.status(200).json(response)
    })
    .catch(error => { 
        res.status(500).json({error: "There was an error retrieving your data"})
    })
})


router.get('/:id', (req, res) => {
    const {id} = req.params
    album.getById(id).then(response => {
        if(response){
            res.status(200).json(response)  
        } else {
              res.status(404).json({error: "Your request does not exist"})
          }
    })
    .catch(error => { 
        res.status(500).json({error: "There was an error retrieving your data"})
    })
})


router.post('/', (req, res) => {
    const body = req.body
    db('album').insert(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting your message"})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('album').where({id}).del()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: "There was an error deleting the user"})
    })
})


module.exports = router