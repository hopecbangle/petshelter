const PetsController = require('../controllers/pets.controller');

module.exports = (app) => {
    app.get('/api/pets', PetsController.getAll);
    app.post('/api/pets', PetsController.create);
    app.get('/api/pets/:id', PetsController.getOne);
    app.put('/api/pets/:id', PetsController.update);
    app.delete('/api/pets/:id', PetsController.delete);
}