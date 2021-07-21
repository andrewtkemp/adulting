const router = require('express').Router();
const { Log } = require('../../models/');


router.get('/log', (req, res) => {
    Log.findOne({}) 
});

router.post('/log', (req, res) => {
    Log.create({})
      .then((dbLog) => {
        res.json(dbLog);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
