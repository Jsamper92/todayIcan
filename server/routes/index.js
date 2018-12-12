const express = require('express');
const router  = express.Router();
const Event = require("../models/Event");
const Comment = require("../models/Comments");
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/api/auth', require('./auth'));
router.use('/', require('./events'));



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








module.exports = router;
