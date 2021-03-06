'use strict'

const express = require('express')

const controllers = require('../controllers/index')
const router = express.Router()

router.get('/', controllers.get)

module.exports = router
