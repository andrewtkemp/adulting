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

//   router.get('/:id', (req, res) => {
//     Log.findById(
//       req.params.id )
//       .then((dbAdulting) => {
//         res.json(dbAdulting);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });


module.exports = router;


  























