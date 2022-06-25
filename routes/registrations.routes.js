const express = require('express');

//Controllers
const {
  getAllRegistrations,
  getRegistrationsById,
  checkin,
  checkout,
  cancelRegistration
} = require('../controllers/registrations.controllers')

const registrationsRouter = express.Router();

registrationsRouter.get('/', getAllRegistrations)
registrationsRouter.get('/:id', getRegistrationsById)
registrationsRouter.post('/', checkin)
registrationsRouter.patch('/:id', checkout)
registrationsRouter.delete('/:id', cancelRegistration)

module.exports = { registrationsRouter };