var express = require('express')
var router = express.Router()
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route
  router.get('/workouts', function (req, res) {
      Workout.find()
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
  });
  router.post("/api/workouts", function(req, res) {
    Workout.create({})
      .then(data => res.json(data))
      .catch(err => {
        console.log("err", err);
        res.json(err);
      });
  });
 // define the about route 
 router.get('/about', function (req, res) {
    res.send('About birds')
  })
  module.exports = router;
  