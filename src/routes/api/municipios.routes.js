'use strict'

const express = require('express')
const router = express.Router()
const municipios = require('../../controllers/municipios.controller')
const validator = require('express-validation')
const auth = require('../../middlewares/authorization')

router.get('/', municipios.getMunicipios)
router.get('/getById', municipios.getMunicipiosById)
router.post('/create', municipios.insertMunicipios)
router.put('/update', municipios.updateMunicipios)

module.exports = router
