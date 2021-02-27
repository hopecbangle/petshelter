const PetsModel = require('../models/pets.model');

module.exports = {
    getAll: (req, res) => {
        PetsModel.find()
            .then((allPets) => {
                console.log(allPets);
                res.json(allPets);
            })
            .catch ((err) => {
                console.log("error in getAll: " + err);
                res.json(err);
            })
    },
    
    create: (req, res) => {
        console.log(req.body);
        PetsModel.create(req.body)
            .then((newPet) => {
                console.log(newPet);
                res.json(newPet);
            })
            .catch ((err) => {
                console.log("error in create: " + err);
                res.json(err);
            })
    },

    getOne: (req, res) => {
        console.log(req.params.id);
        PetsModel.findById(req.params.id)
            .then((onePet) => {
                console.log(onePet);
                res.json(onePet);
            })
            .catch ((err) => {
                console.log("error in getOne: " + err);
                res.json(err);
            })
    },

    update: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        PetsModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        .then((updatedPet) => {
            console.log(updatedPet);
            res.json(updatedPet);
        })
        .catch( (err) => {
            console.log ("error in update: " + err);
            res.json(err);
        })
    },

    delete: (req, res) => {
        console.log(req.params.id);
        PetsModel.findByIdAndRemove(req.params.id)
            .then((removedPet) => {
                console.log(removedPet);
                res.json(removedPet);
            })
            .catch((err) => {
                console.log("error in delete: " + err);
                res.json(err);
            })
    },
}