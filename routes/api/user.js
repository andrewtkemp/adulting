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

router.put('/:id/:activityId', async(req, res) => {
    const response = await User.findOneAndUpdate({_id: req.params.activitiyId}, { completed: req.body.completed }, {
        new: true,
        upsert: true // Make this update into an upsert
      })
    res.json(response)
});

module.exports = router;