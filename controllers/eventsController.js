const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Event.find(req.query)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Event.findById(req.params.id)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body);
        db.Event.create(req.body)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Event.findOneAndUpdate({id: req.params.id},req.body)
        .then(dbEvent => res.json(dbEvent))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Event.findById(req.params.id)
        .then(dbEvent => dbEvent.remove())
        .catch(err => res.status(422).json(err));
    }
    };