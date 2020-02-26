const server = require('./server/server.js')

const PORT = 9000

server.listen(PORT, () => {
    console.log('Server is running on port: ', PORT)
})