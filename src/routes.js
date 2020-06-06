const { Router } = require('express')

const ProfController = require('./controllers/ProfController')
const ExercisesController = require('./controllers/ExercisesController')
const AlunoController = require('./controllers/AlunoController')
const ResponseController = require('./controllers/ResponseController')
const RespondeController = require('./controllers/RespondeController')

const routes = Router()


routes.post('/registers', ProfController.store)

routes.post('/exercises', ExercisesController.store)
routes.get('/exercises', ExercisesController.index)
routes.get('/exercisesId', ExercisesController.show)
routes.delete('/exercises/:id', ExercisesController.destroy)

routes.post('/alunos', AlunoController.store)
routes.get('/alunos', AlunoController.index)

routes.post('/responses', ResponseController.store)
routes.get('/responses', ResponseController.index)

routes.post('/responde', RespondeController.store)
routes.get('/responde', RespondeController.index)
routes.delete('/responde/:id', RespondeController.destroy)

module.exports = routes