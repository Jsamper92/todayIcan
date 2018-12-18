const express = require("express");
const Events = require("../models/Event");
const authRoutes = express.Router();

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

authRoutes.get("/showEvent", (req, res, next) => {
    
    Events.find()
        .then(event => {
            
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

