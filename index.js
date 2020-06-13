'use strict'

const express = require('express')
const path = require('path')

require('./start')
const app = require('./src/app')

app.use('/', express.static(path.join(__dirname, '/docs')))

const { APP_PORT } = process.env

app.listen(APP_PORT, () => {
  console.log('[app.js: Listening on ' + APP_PORT + ']')
})
