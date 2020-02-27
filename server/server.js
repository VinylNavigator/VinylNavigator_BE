require('dotenv').config()

const express = require('express')
const server = express()
const cors = require('cors')
const helmet = require('helmet')

server.use(express.json())
server.use(cors())
server.use(helmet())

const userRouter = require('../routers/user')
server.use('/api/user', userRouter)

const userPostRouter = require('..routers/userPost')
server.use('/api/user_post', userPostRouter)

server.get('/', (req, res) => {
    res.status(200).send("You are officially connected!")
})

module.exports = server