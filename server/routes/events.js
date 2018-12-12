const express = require("express");
const Event = require("../models/Event");
const authRoutes = express.Router();

authRoutes.post("/createEvent", (req, res, next) => {
    const {
        description,
        city
    } = req.body;
    console.log(req.body)
    const event = new Event({
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



module.exports = authRoutes;

