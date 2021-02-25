const ThingsModel = require('../models/things.model');

module.exports = {
    getAll: (req, res) => {
        ThingsModel.find()
            .then((allThings) => {
                console.log(allThings);
                res.json(allThings);
            })
            .catch ((err) => {
                console.log("error in getAll: " + err);
                res.json(err);
            })
    },
    
    create: (req, res) => {
        console.log(req.body);
        ThingsModel.create(req.body)
            .then((newThing) => {
                console.log(newThing);
                res.json(newThing);
            })
            .catch ((err) => {
                console.log("error in create: " + err);
                res.json(err);
            })
    },

    getOne: (req, res) => {
        console.log(req.params.id);
        ThingsModel.findById(req.params.id)
            .then((oneThing) => {
                console.log(oneThing);
                res.json(oneThing);
            })
            .catch ((err) => {
                console.log("error in getOne: " + err);
                res.json(err);
            })
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        ThingsModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedThing) => {
            console.log(updatedThing);
            res.json(updatedThing);
        })
        .catch( (err) => {
            console.log ("error in update: " + err);
            res.json(err);
        })
    },

    delete: (req, res) => {
        console.log(req.params.id);
        ThingsModel.findByIdAndRemove(req.params.id)
            .then((removedThing) => {
                console.log(removedThing);
                res.json(removedThing);
            })
            .catch((err) => {
                console.log("error in delete: " + err);
                res.json(err);
            })
    },
}