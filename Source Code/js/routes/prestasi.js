const {Router} = require('express')
const {uploadImage} = require('../../../middleware')
const router = Router()
const {prestasiController} = require('../../../controllers')

router.get('/', prestasiController.getPrestasi)
router.post('/addPrestasi', uploadImage.single('image'), prestasiController.createData)

module.exports = router