const regulationController= require('../controllers/RegulationController');
const express= require('express');
const route= express.Router()

route.get('/', regulationController.index)
route.delete('/:id', regulationController.delete)
route.post('/', regulationController.create)
route.put('/:id', regulationController.update)

module.exports= route