const router = require('express').Router();
const User = require('../../models/User');

router.post('/', (req, res) => {
    User.create(req.body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        { $push: { activities: req.body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
      )
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
});

router.put('/:id/:activityId', async (req, res) => {
    const response = await User.findOne({ "_id" : req.params.id});
    const act = await response.activities.map((a) => {
      console.log(String(a._id) === req.params.activityId)
      if (String(a._id) === req.params.activityId) {
        a.completed = req.body.completed;
        return a;
      } else {
        return a;
      }
    });
    const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, {
      $set:{ activities:act }
    })
    res.json(updatedUser)
});

module.exports = router;