const express = require('express')

const BudgetController = require('./controllers/BudgetController')
const BudgetControllerUpUser = require('./controllers/BudgetControllerUpUser')
const BudgetControllerUpData = require('./controllers/BudgetControllerUpData')
const ServicesController = require('./controllers/ServicesController')
const ServiceControllerId = require('./controllers/ServiceControllerId')
const SessionsController = require('./controllers/SessionsController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router()

routes.post('/session', SessionsController.create)

routes.get('/profile/:user', ProfileController.index)
routes.post('/profile/', ProfileController.create)
routes.delete('/profile/:id', ProfileController.delete)

routes.get('/budget', BudgetController.index)
routes.post('/budget', BudgetController.create)
routes.delete('/budget/:id', BudgetController.delete)

routes.put('/budget/up/user/:id', BudgetControllerUpUser.update)
routes.get('/budget/user/id/:id', BudgetControllerUpUser.index) //busca por id

routes.put('/budget/up/budget/:id', BudgetControllerUpData.update)

routes.get('/services/user/id/:id', ServiceControllerId.index)

routes.get('/services', ServicesController.index)
routes.post('/services/:id', ServicesController.create)
routes.put('/services/up/id/:id', ServicesController.update)
routes.delete('/services/:id', ServicesController.delete)

module.exports = routes