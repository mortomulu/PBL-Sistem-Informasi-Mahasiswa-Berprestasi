const {Router} = require('express')
const router = Router()
const {mahasiswaAdminController, dosenAdminController} = require('../../../controllers')

router.get('/mahasiswa', mahasiswaAdminController.getMahasiswa)
router.get('/dosen', dosenAdminController.getDosen)

module.exports = router