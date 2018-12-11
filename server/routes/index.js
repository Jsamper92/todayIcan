const express = require('express');
const router  = express.Router();
const Event = require("../models/Event");
const Comment = require("../models/Comments");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/api/auth', require('./auth'));


router.post("/createEvent",  (req, res, next) => {

    const event = new Event({
        author: req.user.id,
        description: req.body.description,
        city: req.body.city
    });


    event.save(err => {
        if (err) {
            next(null, false, { message: event.errors });
        } else {
            res.status(200).json(event);
        }
    });
});


router.post("/createComment",(req,res,next) =>{
    const comment = new Comment({
        author:req.user.id,
        title:req.body.title,
        content:req.body.content,
        author:req.user.id,
        events:req.user.id
    });

    comment.save(err => {
        if (err) {
            next(null, false, { message: event.errors });
        } else {
            res.status(200).json(comment);
        }
    });
})



module.exports = router;
