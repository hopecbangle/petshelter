const ThingsController = require('../controllers/things.controller');

module.exports = (app) => {
    app.get('/api/things', ThingsController.getAll);
    app.post('/api/things', ThingsController.create);
    app.get('/api/things/:id', ThingsController.getOne);
    app.put('/api/things/:id', ThingsController.update);
    app.delete('/api/things/:id', ThingsController.delete);
}