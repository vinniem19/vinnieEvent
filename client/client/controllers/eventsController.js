const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Event
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByCity: function(req, res) {
        db.Event
        .findByCity(req.params.city)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};