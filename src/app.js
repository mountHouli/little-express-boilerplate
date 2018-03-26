const express = require('express')
const app = express()

const config = require('./config.js')
const router = require('./router.js')
const errorHandler = require('./errorHandler.js')

app.use(router)

app.use(errorHandler)

app.listen(config.port, (err) => {
  if (err) {
    console.log('Error starting server:')
    console.log(err)
    process.exit(1)
  }
})
