const router = require('express').Router()
const Band = require('../helpers/band-model')
const Album = require('../helpers/album-model')
const restricted = require('../auth/restricted-middleware')



router.get('/', (req, res) => {
    Band.find().then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: 'There was an error retrieving the Band', error})
    })
})

router.get('/:id',  (req, res) => {
    const {id} = req.params
    Band.findById(id).then(response => {
        if(response){
            res.status(200).json(response)    
        } else {
            res.status(404).json({error: 'Id does not exist'})
          }
    })
    .catch(err => res.send(err))
})


router.post('/', (req, res) => {
    const body = req.body
    Band.add(body).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Invalid Submission"})
        }
    })
})


router.get('/:id/band', (req, res) => {
    const { id } = req.params
    Album.getByUserId(id)
        .then( response => {
            if(response){
                res.status(200).json(response)
            } else {
                res.status(404).end()
            }
        })
})


router.post('/:band_id/band', (req, res) => {
    const {user_id} = req.params
    const {title, teaser, link, youTubeVideo} = req.body
    Album.add({title, teaser, link, youTubeVideo, user_id: parseInt(user_id, 10)})  
        .then(response => {
            if(response){
                res.status(200).json(response)   
            } else {
                res.status(404).json({error: "Invalid Entry"})
            }   
        })
        .catch(error => {res.status(500).json({error: "There was an error posting your content"})})
})


module.exports = router