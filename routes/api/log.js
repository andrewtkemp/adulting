const router = require("express").Router();
const Log = require("../../models/Log");

router.post("/", (req, res) => {
  console.log(req.body);
  Log.create(req.body)
    .then((dbLog) => {
      res.json(dbLog);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/:id", (req, res) => {
  Log.findOne({ userId: req.params.id }).populate({path: "log.activity"})
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

router.put("/:id", (req, res) => {
  console.log("put route" + req.body);
  Log.updateOne(
    {
      userId: req.params.id,
    },
    {
      $push: {
        log: {
          activity: req.body.id,
          duration: req.body.duration,
          date: new Date(req.body.date),
        },
      },
    }
  )
    .then((response) => {
      console.log(response);
      res.send(response);
    })
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
