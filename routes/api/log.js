const router = require('express').Router();
const { Log } = require('../../models');


router.post('/log', (req, res) => {
    Log.create({})
      .then((dbLog) => {
        res.json(dbLog);
      })
      .catch((err) => {
        res.json(err);
      });
  });


router.get("/log", (req, res) => {
    Log.find({})
      .sort({ date: -1 })
      .then(dbLog => {
        res.json(dbLog);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
 

module.exports = router;

  























