const express = require("express");
const Event = require("../models/Event");
const authRoutes = express.Router();

authRoutes.post("/createEvent", (req, res, next) => {
    const event = new Event({
        author: req.user.id,
        description: req.body.description,
        city: req.body.city,
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



module.exports = authRoutes;

