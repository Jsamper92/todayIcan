const express = require("express");
const Comment = require("../models/Comments");
const Event = require("../models/Event.js")
const authRoutes = express.Router();


authRoutes.post("/createComment", (req, res, next) => {
    let location = new Event({
        type: 'point',
        coordinates: [req.body.longitude, req.body.latitude]
    })

    const comment = new Comment({
        author: req.user.id,
        title: req.body.title,
        content: req.body.content,
        location: location,
        author: req.user.id,
        events: req.user.id
    });

    comment.save(err => {
        if (err) {
            next(null, false, {
                message: event.errors
            });
        } else {
            console.log(comment)
            res.status(200).json(comment);
        }
    });
})

module.exports=authRoutes;