const express = require("express");
const Events = require("../models/Event");
const PlanConfirmation = require("../models/PlanConfirmation");
const authRoutes = express.Router();
const transporter = require('../mail/transporter');

authRoutes.post("/createEvent", (req, res, next) => {
    const {description,city} = req.body;
    const event = new Events({
        author: req.user.id,
        description,
        city
    });

    event.save(err => {
        
        if (err) {
            next(null, false, {
                message: event.errors
            });
        } else {
            res.status(200).json(event);
        }
    });
});

authRoutes.get("/showEvents", (req, res, next) => {
    
    Events.find()
        .then(event => {
            
            res.status(200).json(event);
            
        })
        .catch(err => {
            console.error(err);
        })
});
authRoutes.get("/showEventUsers/:id", (req, res, next) => {
    var eventId = req.params.id;
    Events.find({author:eventId})
        .populate('author')
        .then(event => {
            console.log(event)
            res.status(200).json(event);

        })
        .catch(err => {
            console.error(err);
        })
});


authRoutes.get("/showEvent/:id", (req, res, next) => {
var eventId = req.params.id;
    Events.findById(eventId)
        .populate('author')
        .then(event => {
            res.status(200).json(event);

        })
        .catch(err => {
            console.error(err);
        })
});

module.exports = authRoutes;

