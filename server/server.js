require('dotenv').config()

const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')

server.use(express.json())
server.use(cors())
server.use(helmet())

const auth = require('../auth/authentication')
server.use('/api/auth', auth)

const userRouter = require('../routers/user')
server.use('/api/user', userRouter)

const userPostRouter = require('../routers/userPost')
server.use('/api/user_post', userPostRouter)

const postAlbumRouter = require('../routers/post_album')
server.use('/api/post_album', postAlbumRouter)

const bandRouter = require('../routers/band')
server.use('/api/band', bandRouter)

const albumRouter = require('../routers/album')
server.use('/api/album', albumRouter)

server.get('/', (req, res) => {
    res.status(200).send("You are officially connected!")
})

module.exports = server