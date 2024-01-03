//organize routes with different pages
const express = require('express')
const router = express.Router()
const authController = require('../../../controllers/auth')

//only able to access routes via post
router.post('/register',authController.register)

module.exports = router