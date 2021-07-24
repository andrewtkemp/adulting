const router = require('express').Router();
const Log = require('../../models/Log');

router.post('/', (req, res) => {
    console.log(req.body)
    Log.create(req.body)
      .then((dbLog) => {
        res.json(dbLog);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Log.findById()(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  });

  // router.get('/', (req, res) => {
  //   Log.findAll()
  //   .find(req.query)
  //   .sort({ date: -1 })
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // });


module.exports = router;


  























