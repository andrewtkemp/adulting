const router = require("express").Router();
const Log = require("../../models/Log");
const mongoose = require("mongoose");
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
router.get("/", (req, res) => {
  Log.find({}).then((r) => res.json(r));
});
router.get("/:id", (req, res) => {
  Log.aggregate([{ $match: { userId: mongoose.Types.ObjectId(req.params.id) }},
    // same as .populate(userID)
    { $lookup:  {from: 'users', localField: 'userId', foreignField: '_id', as: 'userId'} },
    { "$unwind": "$log" },
    { "$lookup": {
        "from": 'activities',
        "localField": "log.activity",
        "foreignField": "_id",
        "as": "log.activity",
      }},
    ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/:id", (req, res) => {
  console.log(req.body.id, req.params.id);
  Log.findOneAndUpdate(
    {
      userId: mongoose.Types.ObjectId(req.params.id),
    },
    {
      $set: {
        log: {
          activity: mongoose.Types.ObjectId(req.body.id),
          duration: req.body.duration,
          date: new Date(req.body.date),
        },
      },
    }
  )
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => res.status(422).json(err));
});

module.exports = router;