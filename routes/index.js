const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  queries.listGoals()
    .then((goals) => {
      res.render('index', {
        title: 'Resolution Solution',
        goals: goals
      });
    })
});

router.post('/', (req, res) => {
  queries.addGoal(req.body)
    .then(() => {
      res.redirect('/')
    })
})

module.exports = router;
