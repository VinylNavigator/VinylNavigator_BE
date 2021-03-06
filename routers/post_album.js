const router = require('express').Router()
const db = require('../data/dataConfig')

router.get('/', (req, res) => {
    db('post_album').then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the post"})
    })
})

router.post('/', (req, res) => {
    const body = req.body
    db('post_album').insert(body).then(response => {
        res.status(201).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting your content"})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('post_album').where({id}).del()
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json({error: "There was an error deleting this post"})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body
    db('post_album').where({id}).update(body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json({error: "There was an error updating the post"})
        })
})



module.exports = router