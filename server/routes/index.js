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
        city: req.body.city,
        location:location
    });


    event.save(err => {
        if (err) {
            next(null, false, { message: event.errors });
        } else {
            res.status(200).json(event);
        }
    });
});

// router.post("/showEvent/:id", (req, res, next) => {
//     var eventId = req.params.id;

//     Event.findById(eventId)
//         .then(event =>{
//             console.log(event)
//             res.status(200).json(event)
//         })
//         .catch(err =>{
//             console.log(err)
//         })
// })


router.post("/createComment",(req,res,next) =>{
    let location = new Event({
        type: 'point',
        coordinates: [req.body.longitude, req.body.latitude]
    })

    const comment = new Comment({
        author:req.user.id,
        title:req.body.title,
        content:req.body.content,
        location:location,
        author:req.user.id,
        events:req.user.id
    });

    comment.save(err => {
        if (err) {
            next(null, false, { message: event.errors });
        } else {
            console.log(comment)
            res.status(200).json(comment);
        }
    });
})





module.exports = router;
